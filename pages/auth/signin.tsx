import React from "react";
import { signIn, getSession, getProviders } from "next-auth/react";
import { SiGoogle } from "react-icons/si";
import {url} from "../../lib/url";
import Head from "next/head";

export default function Login({ providers, callbackUrl }: any) {
    return (
        <main className="flex flex-col items-center h-screen space-y-8 justify-center text-black">
            <Head>
                <title>Sign In | Starbuy</title>
            </Head>
            <div className="flex flex-col items-center space-y-5">
                <img
                    src="/assets/images/starbuy.png"
                    alt="microsoft logo"
                    className="w-32 h-32"
                />
                <div className="text-3xl">
                    <p className="inline"> Sign in to </p>
                    <p className="font-bold text-orange-400 inline">Starbuy</p>
                </div>
            </div>
            <div className="p-5 flex flex-col space-y-5">
                <div className="flex flex-col space-y-4">
                    <button
                        className="bg-orange-400 font-semibold text-gray-900 text-base px-3 py-2 hover:bg-blue-500 focus:outline-none focus:ring-2 ring-blue-300 flex flex-row items-center justify-center rounded-lg"
                        onClick={() =>
                            signIn(providers.google.id, { callbackUrl })
                        }
                    >
                        <SiGoogle className="text-gray-900 w-5 h-5 mr-2" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </main>
    );
}

export async function getServerSideProps(context: any) {
    try {
        const { req } = context;
        const session = await getSession({ req });
        if (session) {
            return {
                redirect: {
                    destination: "/",
                    permanent: false,
                },
            };
        }
    } catch (e) {
        console.error(e);
    }

    const providers = await getProviders();

    return {
        props: { providers, callbackUrl: `${url.client}` },
    };
}
