import React from "react";
import styles from "./sign.module.css";
import { SignData } from "../../Helpers/SignInData";
import { BsChevronRight } from "react-icons/bs";

// BsChevronRight;
const SignInDesc = () => {
  return (
    <div className={styles.SignDescContainer}>
      <div className={styles.firstHalf}>
        <div className={styles.SignInLogo}>
          <img src={SignData[0].img} alt="logo" />
          <h5>Hi There!</h5>
        </div>
        <div className={styles.SignInpara}>
          <p>{SignData[0].para}</p>
        </div>
        <div className={styles.SignInlink}>
          <BsChevronRight />
          <a>{SignData[0].para2}</a>
        </div>
      </div>
      <div className={styles.secondHalf}>
        <div className={styles.SignInForm}>
          <form>
            <h6>Email Address</h6>
            <input className={styles.emailA} type="text" placeholder="Email" />
            <div className={styles.passwordtext}>
              <div>
                <h6>Password</h6>
              </div>
              <div className={styles.passwordForget}>
                <a>Forgot your password?</a>
              </div>
            </div>
            <input
              className={styles.password}
              type="text"
              placeholder="Password"
            />
          </form>
          <button className={styles.formSignInButton}>Sign In</button>
        </div>

        <div className={styles.SignUpnotHaveAccount}>
          <p>Don't have an account?</p>
          <a>Sign Up Now</a>
        </div>
      </div>
    </div>
  );
};

export default SignInDesc;
