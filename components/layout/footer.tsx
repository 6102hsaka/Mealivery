import type { NextPage } from "next";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";

import styles from "./footer.module.scss";

const Footer: NextPage = () => (
    <footer className={`container-fluid px-3 py-5 ${styles.footer}`}>
        <div className="row">
            <div className="col-12 col-md-5 mb-5 mb-md-0">
                <h6 className="fw-bold">Mealivery</h6>
                <ul className="list-unstyled mb-0 lh-sm">
                    <li>Full Stack webapp</li>
                    <li>Build using Next.js</li>
                </ul>
            </div>
            <div className="col-12 col-md-5 mb-5 mb-md-0">
                <h6 className="fw-bold">Developer Contact</h6>
                <ul className="list-unstyled mb-0 lh-sm">
                    <li>Akash Sharma</li>
                    <li>akashsharma15105@gmail.com</li>
                </ul>
            </div>
            <div className="col-12 col-md-2">
                <h6 className="fw-bold">Social Links</h6>
                <a
                    href="https://www.linkedin.com/in/akash-sharma-a09016162/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedIn"
                >
                    <SiLinkedin color="#c2410c" />
                </a>
                <a
                    className="mx-3"
                    href="https://github.com/6102hsaka"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <SiGithub color="#c2410c" />
                </a>
                <a
                    href="https://leetcode.com/akashsharma15105/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Leetcode"
                >
                    <SiLeetcode color="#c2410c" />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
