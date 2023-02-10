import React, { useState } from "react";
import styles from "./styles.module.css";
import EmailInput from "../../Shared/EmailInput";
import AlertState from "../../Shared/Alert";

function TopInfo() {
    const [error, setError] = useState(null);
    const [isActive, setActive] = useState(true);
    return (
        <>
            {isActive ?
                <p className={styles.freeShipping} onClick={() => setActive(false)}>
                    Free shipping for orders above USD 150
                </p> :
                <div className={styles.navContainer}>
                    <p>Be the first to get best offers by Matterprints</p>
                    <EmailInput containerWidth={null} success={[error, setError]} />
                    <AlertState state={[error, setError]} numOfSec={3}>
                       <button onClick={()=>{}}>Subscribe</button> 
                    </AlertState>
                </div>
            }
        </>
    )
}

export default TopInfo;
