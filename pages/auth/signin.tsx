import type { NextPage, GetServerSideProps } from "next";
import { getProviders, signIn, getSession } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

import styles from "../../styles/auth.module.scss";
import Logo from "/public/images/logo.svg";

const getSignInLink = (provider: any) => (
    <motion.div
        whileTap={{ scale: 0.8 }}
        key={provider.id}
        className={styles.provider}
        onClick={() => signIn(provider.id)}
    >
        <FcGoogle size={24} />
        <span>Sign in with {provider.name}</span>
    </motion.div>
);

const SignIn: NextPage = ({ providers }: any) => (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.title}>
                <Logo />
                Meal<span>ivery</span>
            </div>
            <div className={styles.subtitle}>Login to continue..</div>
            {Object.values(providers).map((provider: any) =>
                getSignInLink(provider)
            )}
        </div>
    </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!!session) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    const providers = await getProviders();
    return {
        props: { providers },
    };
};

export default SignIn;
