import React, { useEffect, useState } from "react";
import styles from "./postup.module.css"
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";

function Postup () {
    const navigate = useNavigate();
    const [deadline, setDeadline] = useState(new Date());
    const [count, setCount] = useState(0)
    const [options, setOptions] = useState([]);

    useEffect(() => {
        // 현재 옵션을 유지하면서 새로운 옵션을 추가
        setOptions(existingOptions => [...existingOptions, { text: "", image: "" }]);
      }, [count]);   

    const handleTextUpload = (e, optionIdx) => {
        const optionValue = e.target.value;
        const updatedOptions = [...options];
        updatedOptions[optionIdx].text = optionValue;
        setOptions(updatedOptions);
    };

    const handleImageUpload = (e, optionIdx) => {
        const file = e.target.files[0];
        const updatedOptions = [...options];
        updatedOptions[optionIdx].image = file.name;
        setOptions(updatedOptions);
    };

    const handleSubmit = () => {
        /*
        서버에 작성한 글 보내기
        */
        navigate('/board/food');
    }
    console.log(options);

    return (
        <div className={styles.container}>
            <div className={styles.boardtitle}><span className={styles.decoration}>|</span>음식</div>
            <div className={styles.writeform}>
                <div>게시글 작성</div>
                <input className={styles.title} placeholder="제목을 입력하세요"/>
                <input className={styles.text} />
                <div>투표 작성</div>
                <input className={styles.votetitle} placeholder="투표 제목"/>
                <div className={styles.deadline}>
                    <Datepicker
                        selected={deadline}
                        onChange={(date) => setDeadline(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                    <select className={styles.voteoption}>
                                <option>01시</option>
                                <option>02시</option>
                                <option>03시</option>
                    </select>
                    <select className={styles.voteoption}>
                                <option>00분</option>
                                <option>10분</option>
                                <option>20분</option>
                                <option>30분</option>
                                <option>40분</option>
                                <option>50분</option>                  
                    </select>
                    <span style={{margin: "5px 0 0 10px" }}>까지</span>
                </div>
                {options.map((option, index) => (
                    <div className={styles.options} key={index}>
                        <input type="text" value={options[index].text} onChange={(e) => handleTextUpload(e, index)} placeholder={`보기${index + 1}`}/>
                        <div class={styles.filebox}>
                            <label for={`file-${index}`}>사진첨부</label>
                            <input id={`file-${index}`} type="file" onChange={(e) => handleImageUpload(e, index)} accept=".png,.jpg" />
                            <div className={styles.filename}>{options[index].image}</div>
                        </div>
                    </div>
                ))}
                <button className={styles.add} onClick={()=> setCount(count + 1)}>항목 추가</button>
                <div className={styles.endbutton}>
                    <button className={styles.cancle} onClick={()=> navigate(`/board/food`)}>취소</button>
                    <button className={styles.submit} onClick={handleSubmit}>등록</button>
                </div>
            </div>
        </div>
    );
}

export default Postup;