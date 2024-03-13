import React, { useEffect, useState } from "react";
import styles from './board.module.css';
import Pagination from "../pagination/Pagination";
import { Link, useNavigate } from "react-router-dom";

function Board({search, setSearch}) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo(0, 0); // 페이지 변경 시 스크롤을 맨 위로 이동
    };

    const onKeywordChange = (e) => {
        setSearch(e.target.value);
    };

    const onClick = (inputValue) => {
        navigate(`/board/food/search/${search}`);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onClick(search);
        }
    };

    // 입력값 초기화
    useEffect(()=> {
        setSearch('');
    }, [])

    return(
        <div className={styles.container}>
            <div className="flexbox">
                <div className={styles.boardtitle}><span className={styles.decoration}>|</span>음식</div>
                <div className={styles.boardnav}>
                    <div className="flexbox2">
                        <button className={styles.select} onClick={() => navigate('/board/food')}>전체글</button>
                        <button className={styles.unselected} onClick={() => navigate('/board/food/hot')}>HOT</button>
                    </div>
                    <div className="flexbox2">
                        <select className={styles.voteoption}>
                            <option>전체</option>
                            <option>진행중</option>
                            <option>마감</option>
                        </select>
                        <button className={styles.write} onClick={()=> navigate(`/board/postup/food`)}>글쓰기</button>
                    </div>
                </div>

                <table className={styles.posttable}>
                    <colgroup>
                        <col width="6%"/>
                        <col width="8%"/>
                        <col width="50%"/>
                        <col width="13%"/>
                        <col width="8%"/>
                        <col width="8%"/>
                        <col width="8%"/>
                    </colgroup>

                    <thead className={styles.posthead}>
                        <tr>
                            <th>번호</th>
                            <th>투표</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>작성일</th>
                            <th>좋아요</th>
                            <th>조회수</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>투표중</td>
                            <td><Link  className="link" to="/board/view/1">안녕하세요</Link></td>
                            <td>패알못</td>
                            <td>18:09</td>
                            <td>101</td>
                            <td>233</td>
                        </tr>
                    </tbody>
                </table>

                <Pagination
                    pageCount={10} // 총 게시글 수
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />

                <div className={styles.searchbox}>
                    <div className={styles.searchbar}>
                        <input className={styles.search} type="text" placeholder="게시물검색" value={search} onChange={onKeywordChange} onKeyDown={handleEnter}></input>
                        <img src="/assets/search.png" alt="검색" onClick={onClick}></img>
                    </div>
                    <select className={styles.searchoption}>
                        <option>제목+내용</option>
                        <option>제목</option>
                        <option>내용</option>
                        <option>닉네임</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Board;