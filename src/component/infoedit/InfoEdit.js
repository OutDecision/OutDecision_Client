import React, { useState } from "react";
import styles from './infoedit.module.css';
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-modal';

function InfoEdit () {
    const navigate = useNavigate();
    const [name, setName] = useState("홍길동");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const openModal = () => {
        setModalIsOpen(true);
        document.body.style.overflow = "hidden";
        document.getElementById('header').style.zIndex = 0; // 헤더가 뒤로 안감
        window.scrollTo(0, 0); 
    }

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = "unset";
        document.getElementById('header').style.zIndex = 100;
    }

    const handleSubmit = () => {
        /*
        서버에 수정 내용 전송 
        */
        navigate('/mypage');
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.title}>마이페이지</div>
                <Link to="/mypage" className="link2"><div className={styles.unselected}>마이페이지 <span>▶</span></div></Link>
                <Link to="/mypage/edit" className="link2"><div className={styles.select}>개인정보수정 <span>▶</span></div></Link>
                <Link to="/mypage/posting" className="link2"><div className={styles.unselected}>게시글 <span>▶</span></div></Link>
                <Link to="/mypage/comment" className="link2"><div className={styles.unselected}>댓글 <span>▶</span></div></Link>
                <Link to="/mypage/liked" className="link2"><div className={styles.unselected}>좋아요한 글 <span>▶</span></div></Link>
            </div>
            <div className={styles.main}>
                <div className={styles.edit}>개인정보수정</div>
                <div className={styles.editform}>
                    <div className={styles.required}><span>*</span> 필수입력</div>
                    <table className={styles.edittable}>
                        <colgroup>
                            <col width="30%"/>
                            <col width="70%"/>
                        </colgroup>
                        <tr>
                            <td>이름 <span>*</span></td>
                            <td><input value={name} onChange={handleNameChange} style={{width: "65px"}}></input></td>
                        </tr>
                        <tr>
                            <td>아이디 <span>*</span></td>
                            <td>aaa@naver.com</td>
                        </tr>
                        <tr>
                            <td>비밀번호 <span>*</span></td>
                            <td><button onClick={openModal}>비밀번호 변경</button></td>
                        </tr>
                        <tr>
                            <td>닉네임 <span>*</span></td>
                            <td><input value="패알못"></input></td>
                        </tr>
                        <tr>
                            <td>휴대폰번호 <span>*</span></td>
                            <td><input value="010-3333-8888"></input></td>
                        </tr>
                    </table>
                </div>
                <div className={styles.buttonbox}>
                    <button onClick={() =>navigate('/mypage')}>취소</button>
                    <button onClick={handleSubmit}>수정</button>
                </div>
            </div>
            
            <Modal className={styles.modal} isOpen={modalIsOpen}>
                <div className={styles.modalheader}>
                    <span>비밀번호 설정</span>
                </div>
                <div className={styles.modalbody}>
                    <table className={styles.passwordtable}>
                            <colgroup>
                                <col width="40%"/>
                                <col width="60%"/>
                            </colgroup>
                            <tr>
                                <td>현재 비밀번호</td>
                                <td><input type="password"/></td>
                            </tr>
                            <tr>
                                <td>새 비밀번호</td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td>새 비밀번호 확인</td>
                                <td><input></input></td>
                            </tr>
                    </table>
                
                    <div className={styles.buttonbox2}>
                        <button onClick={closeModal}>변경</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default InfoEdit;