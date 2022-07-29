import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/home/Banner";
import ProductsFeed from "../components/home/Products/ProductsFeed";
import Layout from "../components/layout/Layout";

const Home: NextPage = ({products}: any) => {
    return (
        <Layout>
            <Head>
                <title>Starbuy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full">
                <Banner />
                <ProductsFeed products = {products} />
            </main>
        </Layout>
    );
};

export default Home;

export async function getServerSideProps(context: any) {
    const products = await fetch("https://jsonkeeper.com/b/NOTU", {
        method: "GET",
    }).then((res) => res.json());

    return {
        props: {
            products,
        },
    };
}
