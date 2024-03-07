import React, { useState } from "react";
import styles from './infoedit.module.css';
import { Link, useNavigate } from "react-router-dom";

function InfoEdit () {
    const navigate = useNavigate();
    const [name, setName] = useState("홍길동");

    const handleNameChange = (e) => {
        setName(e.target.value);
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
                <div className={styles.unselected}>댓글 <span>▶</span></div>
                <div className={styles.unselected}>좋아요한 글 <span>▶</span></div>
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
                            <td><input value={name} onChange={handleNameChange} style={{width: "80px"}}></input></td>
                        </tr>
                        <tr>
                            <td>아이디 <span>*</span></td>
                            <td><input value="aaa@naver.com" style={{width: "160px"}}></input></td>
                        </tr>
                        <tr>
                            <td>비밀번호 <span>*</span></td>
                            <td><input value="*******"></input></td>
                        </tr>
                        <tr>
                            <td>비밀번호 확인 <span>*</span></td>
                            <td><input value="*******"></input></td>
                        </tr>
                        <tr>
                            <td>닉네임 <span>*</span></td>
                            <td><input value="패알못"></input></td>
                        </tr>
                        <tr>
                            <td>휴대폰번호 <span>*</span></td>
                            <td><input value="010-3333-8888"></input></td>
                        </tr>
                        <tr>
                            <td>생년월일 <span>*</span></td>
                            <td><input value="2021-11-11"></input></td>
                        </tr>
                    </table>
                </div>
                <div className={styles.buttonbox}>
                    <button onClick={() =>navigate('/mypage')}>취소</button>
                    <button onClick={handleSubmit}>수정</button>
                </div>
            </div>
        </div>
    );
}

export default InfoEdit;