import React, { useEffect, useState } from "react";
import styles from './board.module.css';
import Pagination from "../pagination/Pagination";
import { Link, useNavigate, useParams } from "react-router-dom";

function Board({search, setSearch}) {
    const navigate = useNavigate();
    let {name} = useParams();

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const [gender, setGender] = useState("전체");
    const [voteState, setVoteState] = useState("전체");

    const boardNameMap = {
        food: '음식',
        love: '연애',
        fashion: '패션',
        hobby: '취미',
        work: '취업',
        travel: '여행',
        etc: '기타',
    };

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen);
    }

    const handleGenderClick = (e) => {
        setGender(e.target.value);
    }

    const handleVoteStateClick = (e) => {
        setVoteState(e.target.value);
    }

    const handleApplyFilter = () => {
        /*
        필터 적용 코드
        */
       setIsFilterOpen(false);
    }

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo(0, 0); // 페이지 변경 시 스크롤을 맨 위로 이동
    };

    const onKeywordChange = (e) => {
        setSearch(e.target.value);
    };

    const onClick = (inputValue) => {
        navigate(`/board/${name}/search/${search}`);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onClick(search);
        }
    };

    // 입력값 초기화
    useEffect(()=> {
        setSearch('');
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className={styles.container}>
            <div className="flexbox">
                <div className={styles.boardtitle}><span className={styles.decoration}>|</span>{boardNameMap[name]}</div>
                <div className={styles.boardnav}>
                    <div className="flexbox2">
                        <button className={styles.select} onClick={() => navigate(`/board/${name}`)}>전체글</button>
                        <button className={styles.unselected} onClick={() => navigate(`/board/${name}/hot`)}>HOT</button>
                    </div>
                    <div className="flexbox2">
                        <div className={styles.filterbox}>
                            <button className={styles.filter} onClick={handleFilterClick}>필터 <img src="/assets/filter.png" alt="필터" /></button>
                            {isFilterOpen && (
                                <div className={styles.filteroption}>
                                    <div className={styles.gender}>
                                        <div>성별</div>
                                        <div className={styles.genderoption}>
                                            <label>
                                            <input type="radio" value="전체" checked={gender === "전체"} onChange={handleGenderClick}/>
                                            전체
                                            </label>
                                            <label>
                                            <input type="radio" value="남" checked={gender === "남"} onChange={handleGenderClick}/>
                                            남
                                            </label>
                                            <label>
                                            <input type="radio" value="여" checked={gender === "여"} onChange={handleGenderClick}/>
                                            여
                                            </label>
                                        </div>
                                    </div>
                                    <div className={styles.gender}>
                                        <div>투표상태</div>
                                        <div className={styles.voteoption}>
                                            <label>
                                            <input type="radio" value="전체" checked={voteState === "전체"} onChange={handleVoteStateClick}/>
                                            전체
                                            </label>
                                            <label>
                                            <input type="radio" value="투표중" checked={voteState === "투표중"} onChange={handleVoteStateClick}/>
                                            투표중
                                            </label>
                                            <label>
                                            <input type="radio" value="투표마감" checked={voteState === "투표마감"} onChange={handleVoteStateClick}/>
                                            투표마감
                                            </label>
                                        </div>
                                    </div>
                                    <button className={styles.apply} onClick={handleApplyFilter}>적용</button>
                                </div>
                            )}
                        </div>
                        <button className={styles.write} onClick={()=> navigate(`/board/postup/${name}`)}>글쓰기</button>
                    </div>
                </div>

                <table className={styles.posttable}>
                    <colgroup>
                        <col width="6%"/>
                        <col width="8%"/>
                        <col width="49%"/>
                        <col width="11%"/>
                        <col width="8%"/>
                        <col width="9%"/>
                        <col width="9%"/>
                    </colgroup>

                    <thead className={styles.posthead}>
                        <tr>
                            <th>번호</th>
                            <th>투표</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>작성일</th>
                            <th>좋아요 <span>↑</span></th>
                            <th>조회수 <span>↑</span></th>
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
                        <img src="/assets/search_black.png" alt="검색" onClick={onClick}></img>
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