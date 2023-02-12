import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css'
import about from '../../images/about.png'
import SectionTitle from '../Shared/SectionTitle';
import {info,description} from './info.js'

function About(props) {
    //const { innerWidth, innerHeight } = window;
    const ref = useRef(0);
    const [height, setHeight] = useState(0);
    const getHeight = (w) =>{
        return((430/555)*w)
    };
    useEffect(() => {
        setHeight(getHeight(ref.current.offsetWidth))
      }, [ref.current.offsetWidth,window.innerWidth]);
    const imgStyle = {
        height: height,
    };
    return (
        <div className={styles.container}>
            <div>
                <SectionTitle title='About Matter' />
            </div>
            <div className={styles.down}>
                <div className={styles.downLeft}>
                    <img src={about} alt='about background' style={imgStyle} ref={ref}/>
                </div>
                <div className={styles.downRight}>
                    <p className={styles.downRightAbout}>
                        {description}
                    </p>
                    <div className={styles.downRightData}>
                    {
                        info.map(item => {
                            return (
                                <div key={item.title}>
                                    <p className={styles.titleData}>{item.title}</p>
                                    {
                                        item.data.map(i => {
                                            return (
                                                <p key={i} className={styles.downRightP}>{i}</p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;