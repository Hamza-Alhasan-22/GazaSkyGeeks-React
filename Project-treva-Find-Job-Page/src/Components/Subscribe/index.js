import React from "react";
import style from "./style.module.css";
import {AiOutlineArrowRight} from "react-icons/ai"
const Subscribe = () => {
  return (
    <section className={style.mainWrapper}>
      <div className={style.centerContent}>Subscribe Us</div>
      <div className={style.subscribeInfo}>Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit,</div>
      <div className={style.flexCenter}>
        <input type="text"/>
        <button><span>Subscribe</span> <AiOutlineArrowRight/></button>
      </div>
    </section>
  );
};

export default Subscribe;
