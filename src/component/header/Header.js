import React from "react";
import styles from './header.module.css';
import { Link, useNavigate } from "react-router-dom";

function Header({fullSearch, setFullSearch}) {
    const navigate = useNavigate();

    const onKeywordChange = (e) => {
        setFullSearch(e.target.value);
    };

    const onClick = (inputValue) => {
        navigate(`/board/all/search/${inputValue}`);
        setFullSearch('');
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onClick(fullSearch);
        }
    };

    return (
        <>
            <div className={styles.header} id="header">
                <Link to="/"><img className={styles.logo} src="/assets/logo.png" alt="logo"/></Link>
                <div className={styles.searchbar}>
                    <input className={styles.search} type="text" placeholder="통합검색" value={fullSearch} onChange={onKeywordChange} onKeyDown={handleEnter}></input>
                    <img src="/assets/search.png" alt="돋보기" onClick={onClick}/>
                </div>
                <div className={styles.loginbar}>
                    <Link to="/login" className={styles.loginbox}>
                        <img src="/assets/login.png" alt="로그인"/>
                        <span className={styles.login}>로그인</span>
                    </Link>
                    <Link to="/signup" className={styles.loginbox}>
                        <img src="/assets/signup.png" alt="회원가입"/>
                        <span className={styles.signup}>회원가입</span>
                    </Link>
                </div>
            </div>
            <div className={styles.navigator}>
                <div className={styles.leftMenu}>
                    <Link to="/board/hot" className={styles.hot}><span>HOT</span></Link>
                    <Link to="/board/food" className={styles.category}><span>음식</span></Link>
                    <Link to="/board/love" className={styles.category}><span>연애</span></Link>
                    <Link to="/board/fashion" className={styles.category}><span>패션</span></Link>
                    <Link to="/board/hobby" className={styles.category}><span>취미</span></Link>
                    <Link to="/board/work" className={styles.category}><span>취업</span></Link>
                    <Link to="/board/travel" className={styles.category}><span>여행</span></Link>
                    <Link to="/board/etc" className={styles.category}><span>기타</span></Link>
                </div>
                <div className={styles.rightMenu}>
                    <Link to="/board/all" className={styles.category}><span>전체</span></Link>
                    <Link to="/ranking" className={styles.rankinglink}><span>포인트랭킹</span></Link>
                </div>
            </div>
        </>
    )
}
export default Header;