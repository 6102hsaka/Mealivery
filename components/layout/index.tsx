import type { NextPage } from "next";
import Head from "next/head";
import { Montserrat, Open_Sans } from "@next/font/google";

import Footer from "./footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});
const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
});

interface Props {
    children: JSX.Element;
}

const Layout: NextPage<Props> = ({ children }) => (
    <div className={`${montserrat.variable} ${openSans.className}`}>
        <Head>
            <title>Mealivery</title>
            <meta
                name="description"
                content="Food delivery app build by Akash Sharma using next.js"
            />
        </Head>
        {children}
        <Footer />
    </div>
);

export default Layout;
