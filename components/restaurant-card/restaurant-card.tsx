import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

import type Restaurant from "../../model/restaurant";
import styles from "./restaurant-card.module.scss";

interface Props {
    restaurant: Restaurant;
}

const RestaurantCard: NextPage<Props> = ({ restaurant }) => {
    return (
        <motion.div whileTap={{ scale: 0.85 }} className={styles.card}>
            <Image
                src={restaurant.imageUrl}
                width="280"
                height="240"
                alt={`${restaurant.name}-image`}
            />
            <div className={styles.content}>
                <h6>{restaurant.name}</h6>
                <p>{restaurant.category.join(",")}</p>
            </div>
        </motion.div>
    );
};

export default RestaurantCard;
