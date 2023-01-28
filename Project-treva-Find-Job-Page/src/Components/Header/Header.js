import React from "react";
import styles from "./Header.module.css";
import { Data } from "../../Helpers/HeaderImages";
import NavBar from "./NavBar";
import { TextData } from "../../Helpers/HeaderTexts";
import HeaderHero from "./HeaderHero";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <NavBar />
      <HeaderHero />
      <div className={styles.bgImage}>
        <img src={Data[0].img}></img>
      </div>
    </div>
  );
};

export default Header;
