import React from "react";
import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/assets/logo_white.png" alt="화이트로고" />
                <div>Copyrightⓒ2024 OutDecision, All rights reserved.</div>
            </div>
            <div className={styles.content}>
                <span>Our Team</span>
                <span>Our Service</span>
                <img className={styles.youtube} src="/assets/youtube.png" alt="유튜브" />
                <img className={styles.instagram} src="/assets/instagram.png" alt="인스타그램" />
                <img className={styles.github} src="/assets/github.png" alt="깃허브" />
            </div>
        </div>
    )
}

export default Footer;