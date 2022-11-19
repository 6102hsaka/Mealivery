import type { NextPage, GetServerSideProps } from "next";
import { signIn, signOut, getSession } from "next-auth/react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = ({ session }: any) => {
    if (session) {
        return (
            <>
                Signed in as {session.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
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
