import React from 'react';
import styles from './style.module.css'

function FooterData(props) {
    return (
        <div className={styles.footerData}>
            <h2>{props.title}</h2>
            {
                props.options.map(item =>{
                    return(
                        <p key={item}>{item}</p>
                    )
                })
            }
        </div>
    );
}

export default FooterData;