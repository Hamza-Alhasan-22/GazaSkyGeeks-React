import React from "react";
import { Data } from "../../Helpers/HeaderImages";
import styles from "./Header.module.css";

const NavBar = () => {
  return (
    <div className={`${styles.navBarContainer}`}>
      <div className={`${styles.navBarLogo}`}>
        <img src={Data[1].img} alt="logo" />
      </div>
      <div className={`${styles.navBarButtons}`}>
        <button className={styles.signIn}>Sign In</button>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
