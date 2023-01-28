import React from "react";
import styles from "./sign.module.css";
import SignInDesc from "./SignInDesc";
import { SignData } from "../../Helpers/SignInData";
import { VscChromeClose } from "react-icons/vsc";

const SignIn = () => {
  return (
    <div className={styles.SignContainer}>
      <SignInDesc />
      <div className={styles.backgroundSign}>
        <img src={SignData[1].img}></img>
        {/* <button className={styles.CloseSign}>
          <VscChromeClose />
        </button> */}
      </div>
    </div>
  );
};

export default SignIn;
