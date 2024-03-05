import React from "react";
import styles from './header.module.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className={styles.header}>
                <Link to="/"><img className={styles.logo} src="/assets/logo.png" alt="logo"/></Link>
                <div className={styles.searchbar}>
                    <input className={styles.search} type="text" placeholder="통합검색"></input>
                    <img src="/assets/search.png" alt="돋보기"/>
                </div>
                <div className={styles.loginbar}>
                    <Link to="/login" className="link">
                        <img src="/assets/login.png" alt="로그인"/>
                        <span className={styles.login}>로그인</span>
                    </Link>
                    <Link to="/signup" className="link">
                        <img src="/assets/signup.png" alt="회원가입"/>
                        <span className={styles.signup}>회원가입</span>
                    </Link>
                </div>
            </div>
            <div className={styles.navigator}>
                <div className={styles.leftMenu}>
                    <span>HOT</span>
                    <Link to="/board/food" className={styles.category}><span>음식</span></Link>
                    <span>연애</span>
                    <span>패션</span>
                    <span>취미</span>
                    <span>취업</span>
                    <span>여행</span>
                    <span>기타</span>
                </div>
                <div className={styles.rightMenu}>
                    <span>전체</span>
                    <span>포인트랭킹</span>
                </div>
            </div>
        </>
    )
}
export default Header;