import React from 'react';
import styles from './style.module.css'
import about from '../../products/About/about.png'
import SectionTitle from '../Shared/SectionTitle';
import {info,description} from './info.js'

function About(props) {
    return (
        <div className={styles.container}>
            <div>
                <SectionTitle title='About Matter' />
            </div>
            <div className={styles.down}>
                <div className={styles.downLeft}>
                    <img src={about} alt='about background'/>
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