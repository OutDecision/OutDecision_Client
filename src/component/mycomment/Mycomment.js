import React, { useState } from "react";
import styles from './mycomment.module.css';
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";

function Mycomment () {
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [clickedId, setClickedId] = useState(0);

    const handleButtonClick = (id) => {
        setClickedId(id);
        setIsOpen(!isOpen);
    }

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.title}>마이페이지</div>
                <Link to="/mypage" className="link2"><div className={styles.unselected}>마이페이지 <span>▶</span></div></Link>
                <Link to="/mypage/edit" className="link2"><div className={styles.unselected}>개인정보수정 <span>▶</span></div></Link>
                <Link to="/mypage/posting" className="link2"><div className={styles.unselected}>게시글 <span>▶</span></div></Link>
                <Link to="/mypage/comment" className="link2"><div className={styles.select}>댓글 <span>▶</span></div></Link>
                <Link to="/mypage/liked" className="link2"><div className={styles.unselected}>좋아요한 글 <span>▶</span></div></Link>
            </div>
            <div className={styles.main}>
                <div className={styles.comment}>댓글</div>
                <select className={styles.voteoption}>
                    <option>전체</option>
                    <option>투표중</option>
                    <option>투표마감</option>
                </select>

                <table className={styles.commenttable}>
                    <tr>
                        <td>
                            <div><Link className={styles.link} to="/board/view/1">댓글입니다 이건 게시글 제목이 아닙니다.</Link></div>
                            <div>From. 게시글 제목입니다. <span>(8)</span></div>
                        </td>
                        <td>
                            <button onClick={()=>handleButtonClick(1)}>⋮</button>
                            {isOpen && clickedId === 1 ? (
                            <div className={styles.postoption}>
                                <option>수정</option>
                                <option>삭제</option>
                            </div>
                            ):<></>}
                            <div>패션 | 02-25</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><Link className={styles.link} to="/board/view/1">안녕하세요</Link></div>
                            <div>From. 게시글 제목입니다. <span>(8)</span></div>
                        </td>
                        <td>
                            <button onClick={()=>handleButtonClick(2)}>⋮</button>
                            {isOpen && clickedId === 2 ? (
                            <div className={styles.postoption}>
                                <option>수정</option>
                                <option>삭제</option>
                            </div>
                            ):<></>}
                            <div>패션 | 02-25</div>
                        </td>
                    </tr>
                </table>
                <Pagination
                    pageCount={1}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}

export default Mycomment;