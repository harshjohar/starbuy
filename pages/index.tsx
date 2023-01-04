import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import ProductsFeed from "../components/home/Products/ProductsFeed";
import Layout from "../components/layout/Layout";
import { Product } from "../typings/Product";

const Home: NextPage = () => {
    const [products, setProducts] = useState<[Product] | []>([]);

    const getProducts = () => {
        fetch("/data/store.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (p) {
                setProducts(p);
            });
    };

    useEffect(() => {
        getProducts();
    });

    return (
        <Layout>
            <Head>
                <title>Starbuy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full">
                <Banner />
                <ProductsFeed products={products} />
            </main>
        </Layout>
    );
};

export default Home;
