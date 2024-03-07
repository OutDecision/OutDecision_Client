import React, { useState } from "react";
import styles from './mypost.module.css';
import { Link, useNavigate } from "react-router-dom";

function Mypost () {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.title}>마이페이지</div>
                <Link to="/mypage" className="link2"><div className={styles.unselected}>마이페이지 <span>▶</span></div></Link>
                <Link to="/mypage/edit" className="link2"><div className={styles.unselected}>개인정보수정 <span>▶</span></div></Link>
                <Link to="/mypage/posting" className="link2"><div className={styles.select}>게시글 <span>▶</span></div></Link>
                <div className={styles.unselected}>댓글 <span>▶</span></div>
                <div className={styles.unselected}>좋아요한 글 <span>▶</span></div>
            </div>
            <div className={styles.main}>
                <div className={styles.post}>게시글</div>
               
            </div>
        </div>
    );
}

export default Mypost;