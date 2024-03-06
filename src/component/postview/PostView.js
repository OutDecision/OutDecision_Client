import React from "react";
import styles from "./postview.module.css";

function PostView () {
    return (
        <div className={styles.container}>
            <div className="flexbox">
                <div className={styles.boardtitle}><span className={styles.decoration}>|</span>음식</div>
                <div className={styles.postinfo}>
                    <div className={styles.titlebox}>
                        <div className={styles.title}>둘 중에 뭐가 더 나아?</div>
                        <div className={styles.date}>2024-03-06 11:47</div>
                    </div>
                    <div className={styles.namebox}>
                        <div>패알못</div>
                        <div className={styles.detail}>
                            <span>끌올 0</span>
                            <span>조회수 0</span>
                            <span>좋아요 0</span>
                            <span>댓글 0</span>
                        </div>
                    </div>
                </div>
                <div className={styles.votebox}>
                    <div className={styles.votetitlebox}>
                        <div className={styles.votetitle}>골라줘</div>
                        <div>2024-03-06 00:00 까지</div>
                    </div>
                    <div className={styles.optionbox}>
                        <button className={styles.optionbutton}>초록색 니트 <img src="/assets/cloth.png" alt="옵션 1"/>  </button>                                         
                        <button className={styles.optionbutton}>파란색 맨투맨 <img src="/assets/cloth.png" alt="옵션 2"/> </button>
                        <button className={styles.optionbutton}>둘다 별로</button>
                        <button className={styles.votebutton}>투표하기</button>
                    </div>
                </div>
                <div className={styles.content}>옷 살건데 뭐사는게 좋을까ㅠㅠ</div>
                <div className={styles.likebox}>
                    <button className={styles.like}>❤️ 좋아요 <span>0</span></button>
                    <button className={styles.pullup}>🔥 끌어올리기 <span>0</span></button>
                </div>
                <div className={styles.writecomment}>
                    <div>댓글 작성</div>
                    <div className={styles.submitcomment}>
                        <input placeholder="댓글을 입력하세요"/>
                        <button>등록</button>
                    </div>
                </div>
                <div className={styles.commentcontainer}>
                    <div className={styles.commenttitle}>전체댓글</div>
                    <div className={styles.commentbox}>
                        <div className={styles.commentinfo}>
                            <span className={styles.commentwriter}>패잘알<span>2024-03-06 13:17</span></span>
                            <button className={styles.commentdelete}>🗑️</button>
                        </div>
                        <div className={styles.comment}>그냥 둘다 사!</div>
                    </div>
                    <div className={styles.commentbox}>
                        <div className={styles.commentinfo}>
                            <span className={styles.commentwriter}>패잘알<span>2024-03-06 13:17</span></span>
                            <button className={styles.commentdelete}>🗑️</button>
                        </div>
                        <div className={styles.comment}>그냥 둘다 사!</div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default PostView;