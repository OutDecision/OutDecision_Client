import React from "react";
import styles from './floatingbanner.module.css';


function FloatingBanner () {
    
return (
    <div className={styles.container}>
      <div className={styles.sideBanner}>
        <div className={styles.rankbar}>Rank</div>
        <div className={styles.ranker}>
            <div className={styles.imgbox1}>
                <img src="/assets/github.png" alt="1st" />
            </div>
            <div>1st</div>
        </div>
        <div className={styles.ranker2}>
            <div className={styles.imgbox2} style={{border: "3px solid #a3a3a3"}}>
                <img src="/assets/github.png" alt="2nd" />
            </div>
            <div>2nd</div>
        </div>
        <div className={styles.ranker3}>
            <div className={styles.imgbox2} style={{border: "3px solid #cd7f32"}}>
                <img src="/assets/github.png" alt="3rd" />
            </div>
            <div>3rd</div>
        </div>
        <table className={styles.list}>
            <tr>
                <td className={styles.ranking}>1</td>
                <td>PLAYER1</td>
                <td className={styles.point}>10000</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
            <tr>
                <td>10</td>
                <td>PLAYER2</td>
                <td>900</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default FloatingBanner;