import React, { useState } from "react";
import styles from './mypost.module.css';
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";

function Mypost () {
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
                <Link to="/mypage/posting" className="link2"><div className={styles.select}>게시글 <span>▶</span></div></Link>
                <div className={styles.unselected}>댓글 <span>▶</span></div>
                <div className={styles.unselected}>좋아요한 글 <span>▶</span></div>
            </div>
            <div className={styles.main}>
                <div className={styles.post}>게시글</div>
                <select className={styles.voteoption}>
                    <option>전체</option>
                    <option>투표중</option>
                    <option>마감</option>
                </select>
                <div className={styles.postlist}>
                    <div className={styles.postbox}>
                        <div>게시글 제목입니다. <span>(8)</span></div>
                        <div>
                            패션 | 02-25<button onClick={()=>handleButtonClick(1)}>⋮</button>
                            {isOpen && clickedId === 1 ? (
                            <div className={styles.postoption}>
                                <option>수정</option>
                                <option>삭제</option>
                            </div>
                            ):<></>}
                        </div>
                    </div>
                    <div className={styles.postbox}>
                        <div>게시글 제목입니다. <span>(8)</span></div>
                        <div>
                            패션 | 02-25<button onClick={()=>handleButtonClick(2)}>⋮</button>
                            {isOpen && clickedId === 2 ? (
                            <div className={styles.postoption}>
                                <option>수정</option>
                                <option>삭제</option>
                            </div>
                            ):<></>}
                        </div>
                    </div>
                </div>
                <Pagination
                    pageCount={1}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}

export default Mypost;