import React, { useEffect, useState } from "react";
import styles from "./postup.module.css"
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";

function Postup () {
    const navigate = useNavigate();

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const [deadline, setDeadline] = useState(new Date());
    const [count, setCount] = useState(0)
    const [options, setOptions] = useState([]);

    const [selectedHours, setSelectedHours] = useState(`${hours}시`);
    const [selectedMinutes, setSelectedMinutes] = useState(`${minutes}분`);
    
    const handleHoursChange = (newValue) => {
        const h = Number(newValue.substring(0,2));
        const m = Number(selectedMinutes.substring(0,2));

        if (now.getDate() === deadline.getDate()) {
            if (h > hours) {
                setSelectedHours(newValue);
            } else if (h === hours) {
                if (m > minutes) {
                    setSelectedHours(newValue);
                }
                else {
                    alert("현재 시간 이후로 설정 가능합니다");
                }
            } else {
                alert("현재 시간 이후로 설정 가능합니다");
            }
        } else {
            setSelectedHours(newValue);
        }
    };

    const handleMinutesChange = (newValue) => {
        const h = Number(selectedHours.substring(0,2));
        const m = Number(newValue.substring(0,2));

        if (now.getDate() === deadline.getDate()) {
            if (h > hours) {
                setSelectedMinutes(newValue);
            } else if (h === hours) {
                if (m > minutes) {
                    setSelectedMinutes(newValue);
                }
                else {
                    alert("현재 시간 이후로 설정 가능합니다");
                }
            } else {
                alert("현재 시간 이후로 설정 가능합니다");
            }
        } else {
            setSelectedMinutes(newValue);
        }
    };

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
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        const updatedOptions = [...options];

        return new Promise((resolve) => {
            reader.onload = () => {
                updatedOptions[optionIdx].image = reader.result;
                setOptions(updatedOptions);
                resolve();
            };
        });
    };

    const handleSubmit = () => {
        /*
        서버에 작성한 글 보내기
        */
        navigate('/board/food');
    }

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
                        minDate={now}
                    />
                    <select className={styles.voteoption} value={selectedHours} onChange={(e) => handleHoursChange(e.target.value)}>
                                <option>00시</option>
                                <option>01시</option>
                                <option>02시</option>
                                <option>20시</option>
                                <option>21시</option>
                                <option>22시</option>
                    </select>
                    <select className={styles.voteoption} value={selectedMinutes} onChange={(e) => handleMinutesChange(e.target.value)} >
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
                    <div key={index}>
                        <div className={styles.options}>
                            <input type="text" value={options[index].text} onChange={(e) => handleTextUpload(e, index)} placeholder={`보기${index + 1}`}/>
                            <div class={styles.filebox}>
                                <label for={`file-${index}`}>사진첨부</label>
                                <input id={`file-${index}`} type="file" onChange={(e) => handleImageUpload(e, index)} accept=".png,.jpg" />
                            </div>
                        </div>
                        {options[index].image && <img className={styles.preview} src={options[index].image} alt="preview-img" />}
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