import React, { useState } from 'react';
import BodyButton from '../Shared/BodyButton';
import styles from './style.module.css'
import { BsPencilFill, BsCheck2All } from 'react-icons/bs';
import { MdPeople } from 'react-icons/md';

function HeroSection(props) {
    const {title, img1, img2, rec1, rec2, descriptionData, buttonColors} = props;
    const [isActive, setIsActive] = useState([true, false, false]);
    const handleIsActive = (index) => {
        let ary = isActive.map(i => false);
        ary[index] = true;
        setIsActive(ary);
    };
    
    const recStyle = [
        {
            backgroundImage: `url(${rec1})`,
            backgroundSize: 'cover'
        },
        {
            backgroundImage: `url(${rec2})`,
            backgroundSize: 'cover'
        }
    ];
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>

            <div className={styles.buttons}>
                <BodyButton color={buttonColors[0]} isActive={isActive[0]} onClick={() => handleIsActive(0)}>
                    <span className={styles.icon} style={{color: 'white',backgroundColor: buttonColors[0]}}>
                        <BsPencilFill size={15} />
                    </span>
                    <p>Post</p>
                </BodyButton>
                <BodyButton color={buttonColors[1]} isActive={isActive[1]} onClick={() => handleIsActive(1)}>
                <span className={styles.icon} style={{color: 'black',backgroundColor: buttonColors[1]}}>
                    <BsCheck2All />
                </span>
                    <p>Applied</p>
                </BodyButton>
                <BodyButton color= {buttonColors[2]} isActive={isActive[2]} onClick={() => handleIsActive(2)}>
                <span className={styles.icon} style={{color: 'black',backgroundColor: buttonColors[2]}}>
                    <MdPeople />
                </span>
                    <p>Assigned</p>
                </BodyButton>
            </div>

            <div className={styles.body}>
                <div className={styles.description} style={recStyle[0]}>
                    <div className={styles.descriptionBody}>
                        <h3>{isActive.map((item, i)=>{return(item?descriptionData[i].title:<></>)})}</h3>
                        <p>{isActive.map((item, i)=>{return(item?descriptionData[i].description:<></>)})}</p>
                    </div>
                </div>
                <div className={styles.sideImage}>
                    <img src={img1} alt='Group 145'/>
                </div>
            </div>

            <div className={styles.body2}>
                <div className={styles.description2} style={recStyle[1]}>
                    <div className={styles.descriptionBody2}>
                        <h3>{descriptionData[3].title}</h3>
                        <p className={styles.p2}>{descriptionData[3].description}</p>
                    </div>
                </div>
                <div className={styles.sideImage2}>
                    <img src={img2} alt='Group 172'/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;