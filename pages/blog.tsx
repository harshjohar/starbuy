import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";

function blog() {
    return (
        <Layout>
          <Head>
            <title>Starbuy | Blog</title>
          </Head>
            <div className="h-[50%] w-full grid place-items-center">
                <p className="text-[5rem] font-poppins">Coming Soon</p>
            </div>
        </Layout>
    );
}

export default blog;
