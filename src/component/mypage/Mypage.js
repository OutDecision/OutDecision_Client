import React, { useState } from "react";
import styles from './mypage.module.css';
import { Link, useNavigate } from "react-router-dom";

function Mypage () {
    const navigate = useNavigate();

    const [activeMenu, setActiveMenu] = useState('post');

    const handleMenu = (menu) => {
        setActiveMenu(menu);
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.title}>마이페이지</div>
                <Link to="/mypage" className="link2"><div className={styles.select}>마이페이지 <span>▶</span></div></Link>
                <Link to="/mypage/edit" className="link2"><div className={styles.unselected}>개인정보수정 <span>▶</span></div></Link>
                <Link to="/mypage/posting" className="link2"><div className={styles.unselected}>게시글 <span>▶</span></div></Link>
                <Link to="/mypage/comment" className="link2"><div className={styles.unselected}>댓글 <span>▶</span></div></Link>
                <Link to="/mypage/liked" className="link2"><div className={styles.unselected}>좋아요한 글 <span>▶</span></div></Link>
            </div>
            <div className={styles.main}>
                <div className={styles.mypage}>마이페이지</div>
                <div className={styles.profile}>
                    <div className={styles.imagebox}>
                        <img src="/assets/user.png" alt="프로필" />
                        <div className={styles.namebox}>
                            <div>패셔니스타</div>
                            <span>패알못 님</span><img src="/assets/setting.png" alt="설정" />                      
                        </div>
                    </div>
                    <div className={styles.userinfo}>가입일 <span>2024년 02월 19일</span></div>
                    <div className={styles.userinfo}>포인트 <span>7000점 (랭킹 : 3위)</span></div>
                    <div className={styles.userinfo}>끌어올리기 <span>14회</span></div>
                </div>
                <div className={styles.posting}>
                    <div className={styles.menu}>
                        <span onClick={()=> handleMenu('post')} className={activeMenu === 'post' ? styles.active : styles.inactive}>작성한 글</span>
                        <span onClick={()=> handleMenu('comment')} className={activeMenu === 'comment' ? styles.active : styles.inactive}>작성한 댓글</span>
                        <span onClick={()=> handleMenu('liked')} className={activeMenu === 'liked' ? styles.active : styles.inactive}>좋아요한 글</span>
                    </div>
                    {activeMenu === 'post' && (
                        <div className={styles.postlist}>
                        <div className={styles.plus} onClick={() => navigate('/mypage/posting')}>더보기</div>
                        <div className={styles.post}>
                            <div>게시글 제목입니다. <span>(8)</span></div>
                            <div>패션 | 02-25</div>
                        </div>
                        <div className={styles.post}>
                            <div>게시글 제목입니다. <span>(8)</span></div>
                            <div>패션 | 02-25</div>
                        </div>
                        <div className={styles.post}>
                            <div>게시글 제목입니다. <span>(8)</span></div>
                            <div>패션 | 02-25</div>
                        </div>
                    </div>
                    )}
                    {activeMenu === 'comment' && (
                        <div className={styles.postlist}>
                        <div className={styles.plus} onClick={() => navigate('/mypage/comment')}>더보기</div>
                        <div className={styles.commentbox}>
                            <div className={styles.commentitem}>
                                <div>댓글입니다 이건 게시글제목이 아닙니다.</div>
                            </div>
                            <div className={styles.commentitem2}>
                                <div>From. 게시글 제목입니다. <span>(8)</span></div>
                                <div>패션 | 02-25</div>
                            </div>          
                        </div>
                        <div className={styles.commentbox}>
                            <div className={styles.commentitem}>
                                <div>댓글입니다 이건 게시글제목이 아닙니다.</div>
                            </div>
                            <div className={styles.commentitem2}>
                                <div>From. 게시글 제목입니다. <span>(8)</span></div>
                                <div>패션 | 02-25</div>
                            </div>          
                        </div>
                        <div className={styles.commentbox}>
                            <div className={styles.commentitem}>
                                <div>댓글입니다 이건 게시글제목이 아닙니다.</div>
                            </div>
                            <div className={styles.commentitem2}>
                                <div>From. 게시글 제목입니다. <span>(8)</span></div>
                                <div>패션 | 02-25</div>
                            </div>          
                        </div>
                    </div>
                    )} 
                    {activeMenu === 'liked' && (
                        <div className={styles.postlist}>
                        <div className={styles.plus} onClick={() => navigate('/mypage/liked')}>더보기</div>
                        <div className={styles.post}>
                            <div>게시글 제목입니다. <span>(7)</span></div>
                            <div>패션 | 02-25</div>
                        </div>
                        <div className={styles.post}>
                            <div>게시글 제목입니다. <span>(2)</span></div>
                            <div>패션 | 02-25</div>
                        </div>
                        <div className={styles.post}>
                            <div>게시글 제목입니다. <span>(1)</span></div>
                            <div>패션 | 02-25</div>
                        </div>
                    </div>
                    )}          
                </div>
            </div>
        </div>
    );
}

export default Mypage;