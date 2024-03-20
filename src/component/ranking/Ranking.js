import React from "react";
import styles from './ranking.module.css';

function Ranking () {
    return (
        <div className={styles.container}>
            <div className="flexbox">
                <div className={styles.rankingtitle}><span className={styles.decoration}>|</span>포인트랭킹</div>

                <table className={styles.rankingtable}>
                    <thead className={styles.rankinghead}>
                        <tr>
                            <th>순위</th>
                            <th>닉네임</th>
                            <th>가입일</th>
                            <th>포인트</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/user.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><div className={styles.imgbox}><img src="/assets/banner1.png" alt="프로필"/></div>패알못</td>
                            <td>2024-03-03</td>
                            <td>13000000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>384</td>
                            <td><div className={styles.imgbox}><img src="/assets/cloth.png" alt="프로필"/></div>주인공</td>
                            <td>2024-03-01</td>
                            <td>368</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Ranking;