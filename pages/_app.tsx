import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.scss";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <AnimatePresence>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AnimatePresence>
        </SessionProvider>
    );
}
