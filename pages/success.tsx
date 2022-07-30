import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout/Layout";

function success() {
    return (
        <Layout>
            <Head>
                <title>Starbuy | Success</title>
            </Head>
            <div className="h-full w-full grid place-items-center">
                <p className="font-poppins text-[3rem]">Thank you! Your order has been confirmed!</p>
                <p>
                    Check the{" "}
                    <Link href={"/orders"}>
                        <span className="text-orange-500 cursor-pointer">Orders</span>
                    </Link>{" "}
                    page.
                </p>
            </div>
        </Layout>
    );
}

export default success;
