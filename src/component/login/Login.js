import React from "react";
import styles from './login.module.css';
import { Link } from "react-router-dom";

function Login() {

    return(
        <div className={styles.container}>
            <div className={styles.loginform}>
                <div className={styles.title}>Log In</div>
                <div className={styles.formName}>Email Address</div>
                <input className={styles.formValue} type="text" placeholder="Placeholder" ></input>
                <div className={styles.formName}>Password</div>
                <input className={styles.formValue} type="password" placeholder="Placeholder"></input>
                <button className={styles.loginButton} >Log In</button>
                <div className={styles.social}>
                    <button className={styles.google}>Log in with Kakao</button>
                    <button className={styles.google}>Log in with Google</button>
                </div>
                <Link to="/signup" className={styles.signup}>No account yet? Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;