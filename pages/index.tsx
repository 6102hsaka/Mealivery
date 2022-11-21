import type { NextPage, GetServerSideProps } from "next";
import type { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { motion } from "framer-motion";

import Header from "../components/header/header";
import styles from "../styles/Home.module.scss";
import Breakfast from "/public/images/breakfast.svg";
import EasytoOrder from "/public/images/easy_to_order.svg";
import FastDelivery from "/public/images/fast_delivery.svg";
import BestQuality from "/public/images/best_quality.svg";

interface Props {
    session: Session;
}

const Home: NextPage<Props> = ({ session }) => {
    return (
        <div className={styles.container}>
            <Header user={session?.user} />
            <main>
                <section className={styles.message}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        Hot or Cold we deliver <span>fresh food</span> for you.
                    </motion.div>
                    <Breakfast />
                </section>
                <section className={`container ${styles.services}`}>
                    <h3 className="text-center p-3">
                        Your Favourite Food delivery Partner
                    </h3>
                    <div className="row">
                        <div className="col-12 col-md-4 text-center">
                            <EasytoOrder />
                            <p>Easy To Order</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <FastDelivery />
                            <p>Fast Delivery</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <BestQuality />
                            <p>Best Quality</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    return {
        props: { session },
    };
};

export default Home;
