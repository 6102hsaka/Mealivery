import { useState, useRef } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";

import type Restaurant from "../../model/restaurant";
import RestaurantCard from "../restaurant-card/restaurant-card";
import LeftArrow from "/public/images/left-arrow.svg";
import RightArrow from "/public/images/right-arrow.svg";
import styles from "./featured-restaurant.module.scss";

interface Props {
    restaurants: Restaurant[];
}

const FeaturedRestaurant: NextPage<Props> = ({ restaurants }) => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const mainRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (mainRef.current?.scrollLeft !== undefined) {
            if (scrollPosition > 250) {
                mainRef.current.scrollLeft = scrollPosition - 250;
                setScrollPosition((_scrollPosition) => _scrollPosition - 250);
            } else {
                mainRef.current.scrollLeft = 0;
                setScrollPosition(0);
            }
        }
    };

    const scrollRight = () => {
        if (mainRef.current?.scrollLeft !== undefined) {
            if (
                scrollPosition + mainRef.current.offsetWidth <
                mainRef.current.scrollWidth
            ) {
                mainRef.current.scrollLeft = scrollPosition + 250;
                setScrollPosition((_scrollPosition) => _scrollPosition + 250);
            }
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h3>Featured Restautants</h3>
                <div className={styles.headerAction}>
                    <motion.span whileTap={{ scale: 0.75, opacity: 0.5 }}>
                        <LeftArrow onClick={() => scrollLeft()} />
                    </motion.span>
                    <motion.span whileTap={{ scale: 0.75, opacity: 0.5 }}>
                        <RightArrow onClick={() => scrollRight()} />
                    </motion.span>
                </div>
            </div>
            <div className={styles.main} ref={mainRef}>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedRestaurant;
