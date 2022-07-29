import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Starbuy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </Layout>
    );
};

export default Home;
