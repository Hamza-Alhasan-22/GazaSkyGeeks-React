import { TextData } from "../../Helpers/HeaderTexts";
import styles from "./Header.module.css";
import React from "react";

const HeaderHero = () => {
  return (
    <div className={styles.HeaderHeroContainer}>
      <div className={styles.HeaderHeroTextBig}>
        <p>{TextData[0].text}</p>
      </div>
      <div className={styles.HeaderHeroTextSmall}>
        <p>{TextData[1].text}</p>
      </div>
      <div className={styles.HeaderHeroButtonContainer}>
        <button className={styles.HeaderHeroHire}>Hire</button>
        <button className={styles.HeaderHeroWork}>Work</button>
      </div>
    </div>
  );
};

export default HeaderHero;
