import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
    const App = Component;
    return (
        <SessionProvider session={pageProps.sessions}>
            <App {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
