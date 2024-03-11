import React from "react";
import styles from './signup.module.css';
import { Link } from "react-router-dom";

function SocialSignup() {
    return (
        <div className={styles.container}>
            <div className={styles.signupform}>
                <div className={styles.title}>Sign Up</div>
                <div className={styles.formName}>Nickname</div>
                <input className={styles.formValue} type="text" placeholder="Nickname" ></input>
                <button className={styles.signupButton} >Sign up</button>
                <div className={styles.loginbox}>
                    <Link to="/login" className={styles.login}>Already have an account?</Link>
                </div>
            </div>
        </div>
    );
}

export default SocialSignup;