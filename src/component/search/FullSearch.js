import React, { useState } from "react";
import styles from './search.module.css';
import Pagination from "../pagination/Pagination";
import { Link, useParams } from "react-router-dom";

function FullSearch() {
    const {keyword} = useParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const [gender, setGender] = useState("전체");
    const [voteState, setVoteState] = useState("전체");
    const [category, setCategory] = useState("전체");

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen);
    }

    const handleGenderClick = (e) => {
        setGender(e.target.value);
    }

    const handleVoteStateClick = (e) => {
        setVoteState(e.target.value);
    }

    const handleCategoryClick = (e) => {
        setCategory(e.target.value);
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

    return(
        <div className={styles.container}>
            <div className="flexbox">
                <div className={styles.boardtitle}><span className={styles.decoration}>|</span>전체 검색 결과</div>
                <div className={styles.boardnav}>
                    <div className={styles.keyword}>"{keyword}" 검색 결과 <span>(30)</span></div>
                    <div className="flexbox2">
                    <div className={styles.filterbox}>
                            <button className={styles.filter} onClick={handleFilterClick}>필터 <img src="/assets/filter.png" alt="필터" /></button>
                            {isFilterOpen && (
                                <div className={styles.filteroption2}>
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
                                    <div className={styles.gender}>
                                        <div>카테고리</div>
                                        <div className={styles.categoryoption}>
                                            <label>
                                            <input type="radio" value="전체" checked={category === "전체"} onChange={handleCategoryClick}/>
                                            전체
                                            </label>
                                            <label>
                                            <input type="radio" value="음식" checked={category === "음식"} onChange={handleCategoryClick}/>
                                            음식
                                            </label>
                                            <label>
                                            <input type="radio" value="연애" checked={category === "연애"} onChange={handleCategoryClick}/>
                                            연애
                                            </label>
                                            <label>
                                            <input type="radio" value="패션" checked={category === "패션"} onChange={handleCategoryClick}/>
                                            패션
                                            </label>
                                            <label>
                                            <input type="radio" value="취미" checked={category === "취미"} onChange={handleCategoryClick}/>
                                            취미
                                            </label>
                                            <label>
                                            <input type="radio" value="취업" checked={category === "취업"} onChange={handleCategoryClick}/>
                                            취업
                                            </label>
                                            <label>
                                            <input type="radio" value="여행" checked={category === "여행"} onChange={handleCategoryClick}/>
                                            여행
                                            </label>
                                            <label>
                                            <input type="radio" value="기타" checked={category === "기타"} onChange={handleCategoryClick}/>
                                            기타
                                            </label>
                                        </div>
                                    </div>
                                    <button className={styles.apply} onClick={handleApplyFilter}>적용</button>
                                </div>
                            )}
                        </div>
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
                            <th>구분</th>
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
                            <td>음식</td>
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

            </div>
        </div>
    );
}

export default FullSearch;