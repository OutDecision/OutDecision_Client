import React from "react";
import styles from './signup.module.css';
import { Link } from "react-router-dom";

function EmailSignup() {
    return (
        <div className={styles.container}>
            <div className={styles.signupform}>
                <div className={styles.title}>Sign Up</div>
                <div className={styles.namebox}>
                    <div className="flexbox">
                        <div className={styles.formName}>Name</div>
                        <input className={styles.formValue2} type="text" placeholder="Name" ></input>
                    </div>
                    <div className="flexbox">
                        <div className={styles.formName}>Nickname</div>
                        <input className={styles.formValue2} type="text" placeholder="Nickname" ></input>
                    </div>
                </div>
                <div className={styles.formName}>Email</div>
                <input className={styles.formValue} type="text" placeholder="Email" ></input>
                <div className={styles.formName}>Password</div>
                <input className={styles.formValue} type="password" placeholder="Password"></input>
                <div className={styles.formName}>Phone Number</div>
                <input className={styles.formValue} type="text" placeholder="Phone Number" ></input>
                <button className={styles.signupButton} >Sign up</button>
                <div className={styles.loginbox}>
                    <Link to="/login" className={styles.login}>Already have an account?</Link>
                </div>
            </div>
        </div>
    );
}

export default EmailSignup;