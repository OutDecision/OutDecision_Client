import React from "react";
import Banner from "../banner/Banner";
import styles from './main.module.css';
import FloatingBanner from "../floatingbanner/FloatingBanner";

function Main() {
    return (
        <div className={styles.wrap}>
            <Banner />
            
            <div className={styles.container}>
                <div className={styles.maincontent}>
                    <div className={styles.categoryHot}>
                        <div className={styles.hottitle}>
                            <div className={styles.title}>HOT</div>
                            <div className={styles.more}>더보기</div>
                        </div>
                        <div className={styles.hotcontent}>
                            <div className={styles.posts}>
                                <div className={styles.post}>
                                    <div className={styles.posttitle}>제목</div>
                                    <div className={styles.postinfo}>카테고리 | 03-02</div>
                                </div>
                                <div className={styles.vote}>
                                    <div className={styles.option1}>
                                        <span>option1</span>
                                    </div>
                                    <span>VS</span>
                                    <div className={styles.option2}>
                                        <span>option1</span>
                                    </div>
                                    <button className={styles.moreoption}>+</button>
                                </div>
                            </div>
                            <div className={styles.posts}>
                                <div className={styles.post}>
                                    <div className={styles.posttitle}>제목</div>
                                    <div className={styles.postinfo}>카테고리 | 03-02</div>
                                </div>
                                <div className={styles.vote}>
                                    <div className={styles.option1}>
                                        <span>option1</span>
                                    </div>
                                    <span>VS</span>
                                    <div className={styles.option2}>
                                        <span>option1</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.posts}>
                                <div className={styles.post}>
                                    <div className={styles.posttitle}>제목</div>
                                    <div className={styles.postinfo}>카테고리 | 03-02</div>
                                </div>
                                <div className={styles.vote}>
                                    <div className={styles.option1}>
                                        <span>option1</span>
                                        <img src="/assets/cloth.png" alt="option1"/>
                                    </div>
                                    <span>VS</span>
                                    <div className={styles.option2}>
                                        <span>option1</span>
                                        <img src="/assets/cloth.png" alt="option1"/>
                                    </div>
                                    <button className={styles.moreoption}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pagination}>
                            <button>◀</button>
                            <button>▶</button>
                        </div>
                    </div>

                    <div className={styles.categoryNew}>
                        <div className={styles.hottitle}>
                            <div className={styles.title}>NEW</div>
                            <div className={styles.more}>더보기</div>
                        </div>
                        <div className={styles.hotcontent}>
                            <div className={styles.posts}>
                                <div className={styles.post}>
                                    <div className={styles.posttitle}>제목</div>
                                    <div className={styles.postinfo}>카테고리 | 03-02</div>
                                </div>
                            </div>
                            <div className={styles.posts}>
                                <div className={styles.post}>
                                    <div className={styles.posttitle}>제목</div>
                                    <div className={styles.postinfo}>카테고리 | 03-02</div>
                                </div>
                            </div>
                            <div className={styles.posts}>
                                <div className={styles.post}>
                                    <div className={styles.posttitle}>제목</div>
                                    <div className={styles.postinfo}>카테고리 | 03-02</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pagination}>
                            <button>◀</button>
                            <button>▶</button>
                        </div>
                    </div>

                    <div className={styles.categoryPhoto}>
                        <div className={styles.hottitle}>
                            <div className={styles.title}>PHOTO</div>
                            <div className={styles.more}>더보기</div>
                        </div>
                        <div className={styles.pagination}>
                            <button>◀</button>
                            <button>▶</button>
                        </div>
                    </div>

                </div>
                <FloatingBanner />       
            </div>
            
        </div>
    )
}

export default Main;