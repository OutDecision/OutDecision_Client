import React from "react";
import styles from './signup.module.css';
import { Link } from "react-router-dom";

function Signup() {
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
                <button className={styles.signupButton} >Sign up</button>
                <div className={styles.social}>
                    <button className={styles.google}>Log in with Google</button>
                    <button className={styles.google}>Log in with Apple</button>
                </div>
                <Link to="/login" className={styles.signup}>Already have an account?</Link>
            </div>
        </div>
    );
}

export default Signup;