import type { NextPage, GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import Header from "../components/header/header";
import styles from "../styles/Home.module.scss";

const Home: NextPage = ({ session }: any) => {
    return (
        <>
            <Header user={session?.user} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    return {
        props: { session },
    };
};

export default Home;
