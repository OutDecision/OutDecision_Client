import React from "react";
import styles from './signup.module.css';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const handleSoicalLogin = () => {
        /*
        소셜 로그인 처리 코드
        */
        navigate('/signup/social');
    }
    return (
        <div className={styles.container}>
            <div className={styles.signupform}>
                <div className={styles.title}>Sign Up</div>
                <buttoon className={styles.kakao} onClick={handleSoicalLogin}>Sign up with Kakao</buttoon>
                <buttoon className={styles.google} onClick={handleSoicalLogin}>Sign up with Google</buttoon>
                <div className={styles.boundary}>
                    <hr />or<hr />
                </div>
                <Link to="/signup/email" className="link"><buttoon className={styles.email}>Sign up with Email</buttoon></Link>
                <div className={styles.loginbox}>
                    <Link to="/login" className={styles.login}>Already have an account?</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;