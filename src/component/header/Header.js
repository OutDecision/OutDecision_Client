import React, { useState } from "react";
import styles from './header.module.css';
import { Link, useNavigate } from "react-router-dom";

function Header({fullSearch, setFullSearch}) {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenu = (menu) => {
        setActiveMenu(menu);
    } 

    const onKeywordChange = (e) => {
        setFullSearch(e.target.value);
    };

    const onClick = () => {
        navigate(`/board/all/search/${fullSearch}`);
        setActiveMenu(null);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <>
            <div className={styles.header} id="header">
                <Link to="/"><img className={styles.logo} src="/assets/logo.png" alt="logo" onClick={() => setActiveMenu(null)}/></Link>
                <div className={styles.searchbar}>
                    <input className={styles.search} type="text" placeholder="통합검색" value={fullSearch} onChange={onKeywordChange} onKeyDown={handleEnter}></input>
                    <img src="/assets/search.png" alt="돋보기" onClick={onClick}/>
                </div>
                <div className={styles.loginbar}>
                    <Link to="/login" className={styles.loginbox} onClick={() => setActiveMenu(null)}>
                        <img src="/assets/login.png" alt="로그인"/>
                        <span className={styles.login}>로그인</span>
                    </Link>
                    <Link to="/signup" className={styles.loginbox} onClick={() => setActiveMenu(null)}>
                        <img src="/assets/signup.png" alt="회원가입"/>
                        <span className={styles.signup}>회원가입</span>
                    </Link>
                </div>
            </div>
            <div className={styles.navigator}>
                <table className={styles.navTable}>
                    <tr>
                        <td className={activeMenu === 'hot' ? styles.active : ''}><Link to="/board/hot" className={styles.link} onClick={()=> handleMenu('hot')}><div>HOT</div></Link></td>
                        <td className={activeMenu === 'food' ? styles.active : ''}><Link to="/board/food" className={styles.link} onClick={()=> handleMenu('food')}><span>음식</span></Link></td>
                        <td className={activeMenu === 'love' ? styles.active : ''}><Link to="/board/love" className={styles.link} onClick={()=> handleMenu('love')}><span>연애</span></Link></td>
                        <td className={activeMenu === 'fashion' ? styles.active : ''}><Link to="/board/fashion" className={styles.link} onClick={()=> handleMenu('fashion')}><span>패션</span></Link></td>
                        <td className={activeMenu === 'hobby' ? styles.active : ''}><Link to="/board/hobby" className={styles.link} onClick={()=> handleMenu('hobby')}><span>취미</span></Link></td>
                        <td className={activeMenu === 'work' ? styles.active : ''}><Link to="/board/work" className={styles.link} onClick={()=> handleMenu('work')}><span>취업</span></Link></td>
                        <td className={activeMenu === 'travle' ? styles.active : ''}><Link to="/board/travel" className={styles.link} onClick={()=> handleMenu('travel')}><span>여행</span></Link></td>
                        <td className={activeMenu === 'etc' ? styles.active : ''}><Link to="/board/etc" className={styles.link} onClick={()=> handleMenu('etc')}><span>기타</span></Link></td>
                    </tr>
                </table>
                <table className={styles.navTable} style={{width: "180px"}}>
                    <colgroup>
                        <col width="38%"/>
                        <col width="62%"/>
                    </colgroup>
                    <tr>
                        <td className={activeMenu === 'all' ? styles.active : ''} ><Link to="/board/all" className={styles.link} onClick={()=> handleMenu('all')}><div>전체</div></Link></td>
                        <td className={activeMenu === 'ranking' ? styles.active : ''} ><Link to="/ranking" className={styles.link} onClick={()=> handleMenu('ranking')}><span>포인트랭킹</span></Link></td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export default Header;