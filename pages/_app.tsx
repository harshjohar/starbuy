import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
    const App = Component;
    return (
        <SessionProvider session={pageProps.sessions}>
            <Provider store={store}>
                <App {...pageProps} />
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
