import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import moment from "moment";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";
import OrderCard from "../components/orders/Order";
import { db } from "../serverless/firebase";
import { Order } from "../typings/Order";

function orders({orders}: {orders: Order[]}) {
    const {data: session} = useSession()
    return (
        <Layout>
            <Head>
                <title>Orders | Starbuy</title>
            </Head>
            <div className="w-[85%] mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-orange-400">
                    Your Orders
                </h1>

                {session ? (
                    <h2 className="font-semibold">{orders.length} Order(s)</h2>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )}

                <div className="mt-5 space-y-4">
                    {orders?.map(
                        ({
                            id,
                            amount,
                            amountShipping,
                            items,
                            timestamp,
                            images,
                        }) => (
                            <OrderCard
                                key={id}
                                id={id}
                                amount={amount}
                                amountShipping={amountShipping}
                                items={items}
                                timestamp={timestamp}
                                images={images}
                            />
                        )
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default orders;

export async function getServerSideProps(context: any) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    // get the users logged in credentions..

    const session = getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }

    const stripeOrders = getDocs(
        query(
            collection(doc(db, "users", (await session)!.user!.email!), "orders"),
            orderBy("timestamp", "desc")
        )
    );

    const orders = await Promise.all(
        (
            await stripeOrders
        ).docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
        },
    };
}
