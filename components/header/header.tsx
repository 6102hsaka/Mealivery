import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { TbShoppingCart, TbUserCircle } from "react-icons/tb";

import Logo from "/public/images/logo.svg";
import styles from "./header.module.scss";

const Header = ({ user }: any) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <Link href="/">
                <div className="brand">
                    <Logo />
                    Meal<span>ivery</span>
                </div>
            </Link>
            <div className="d-block d-md-none">
                {!!user ? (
                    <>
                        <motion.div whileTap={{ scale: 0.75 }}>
                            <Image
                                src={user.image}
                                width="32"
                                height="32"
                                alt="profile-img"
                                onClick={() => setShowMenu(true)}
                            />
                        </motion.div>
                        {showMenu && (
                            <div className={styles.menu}>
                                Hello, <span>{user.name}</span>
                                <span onClick={() => setShowMenu(false)}>
                                    &emsp; X
                                </span>
                                <ul>
                                    <li>
                                        <Link href="/restautant">
                                            Restaurant
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/aboutus">About us</Link>
                                    </li>
                                    <li onClick={() => signOut()}>Logout</li>
                                </ul>
                            </div>
                        )}
                    </>
                ) : (
                    <motion.div whileTap={{ scale: 0.75 }}>
                        <TbUserCircle size="32" onClick={() => signIn()} />
                    </motion.div>
                )}
            </div>
            <div className="d-none d-md-block">
                <nav className={styles.nav}>
                    <Link href="/restaurant">Restaurant</Link>
                    <Link href="/aboutus">About us</Link>
                    {!!user ? (
                        <>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <TbShoppingCart size="32" />
                            </motion.div>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <Image
                                    src={user.image}
                                    width="32"
                                    height="32"
                                    alt="profile-img"
                                    onClick={() => setShowMenu(true)}
                                />
                            </motion.div>
                            {showMenu && (
                                <div className={styles.menu}>
                                    Hello, <span>{user.name}</span>
                                    <span onClick={() => setShowMenu(false)}>
                                        &emsp; X
                                    </span>
                                    <ul>
                                        <li onClick={() => signOut()}>
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </>
                    ) : (
                        <motion.div whileTap={{ scale: 0.75 }}>
                            <TbUserCircle size="32" onClick={() => signIn()} />
                        </motion.div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
