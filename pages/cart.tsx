import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/home/CheckoutProduct";
import Layout from "../components/layout/Layout";
import { selectItems, selectTotal } from "../redux/slices/basketSlice";
import { Product } from "../typings/Product";

// stripe
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key!);

function cart() {
    const items = useSelector(selectItems);
    const { data: session } = useSession();
    const total = useSelector(selectTotal);

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        // call backend to create a checkout session
        const checkoutSession = await axios.post(
            "/api/create_checkout_session",
            {
                items,
                email: session?.user?.email,
            }
        );

        // redirect user to stripe
        const result = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        })

        if(result?.error) {
            alert(result.error.message)
        }

        
    };

    return (
        <Layout>
            <Head>
                <title>Starbuy | Cart</title>
            </Head>
            <div className="w-[85%] mx-auto">
                <h1 className="text-6xl font-poppins">Shopping Basket</h1>
                <div className="h-[1px] w-full bg-orange-500 mt-3" />
                <div className="w-full flex">
                    <div className="flex-[0.7] flex flex-col p-5 space-y-10 bg-white">
                        {items.length === 0 && (
                            <h1 className="text-3xl border-b pb-4">
                                "Your Amazon Basket is Empty"
                            </h1>
                        )}
                        {items.map((item: Product, i: number) => (
                            <CheckoutProduct key={i} item={item} />
                        ))}
                    </div>
                    <div className="flex-[0.3] flex flex-col bg-white p-10 shadow-md h-full">
                        {items.length > 0 && (
                            <>
                                <h2 className="whitespace-nowrap">
                                    Subtotal ({items.length} items):{" "}
                                    <span className="font-bold">
                                        &#8377;{`${Math.floor(total * 75)}.00`}
                                    </span>
                                </h2>

                                <button
                                    disabled={!session}
                                    className={`bg-orange-600 py-2 px-3 rounded-xl text-white font-bold mt-2 ${
                                        !session &&
                                        "from-gray-300 to-gray-500 border-gray-200 cursor-not-allowed text-gray-200"
                                    }`}
                                    role="link"
                                    onClick={createCheckoutSession}
                                >
                                    {!session
                                        ? "Sign in to checkout"
                                        : "Proceed to checkout"}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default cart;
