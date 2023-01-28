import React from 'react'
import style from "./style.module.css"
import Group420 from "../../assets/Group420.png"
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import Group386 from "../../assets/Group386.png"
import treva from "../../assets/treva.png";
const Footer = () => {
  return (
    <>
    <section className={style.mainWrapper}>
        <section className={style.containerAbout}>
            <ul><img src={treva}/></ul>
            <ul><span>Quick Links</span>
                <li>About Us</li>
                <li>Blog </li>
                <li>Contact</li>
                <li>FAG</li>
            </ul>
            <ul><span>Legal Stuff</span>
                <li>Disclaimer</li>
                <li>Financing</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
            <ul>
                <span>Social</span>
                <li><FaFacebookF color='blue'/> Facebook</li>
                <li><AiOutlineTwitter color='blue'/> Twitter</li>
                <li><AiOutlineInstagram color='blue'/> Instagram</li>
            </ul>
            <ul></ul>
            
        </section>
    </section>
    <div className={style.flexContainer}>
        <div></div>
        <div></div>
        {/* <div></div> */}
        {/* <img src={Group420}/> */}
        {/* <img src={Group386}/> */}
    </div>
    </>
  )
}

export default Footer;