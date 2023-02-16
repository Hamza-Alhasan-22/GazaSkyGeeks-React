import React, { useState } from "react";
import styles from "./styles.module.css";
import Alert from '@mui/material/Alert';

function AlertState(props) {
    const { state, numOfSec } = props;
    //const [error, setError] = state;
    const error = state[0];
    const [alertIsShown, setAlertIsShown] = useState(false);
    const alertState = () => {
        if (error == null) {
            return <Alert severity="success" className={styles.alert}>Subscribed Successfully!</Alert>
        }
        else {
            return <Alert severity="error" className={styles.alert}>{error}</Alert>
        }
    }
    const handleAlertIsShown = () => {
        setAlertIsShown(true);
        setTimeout(() => {
            setAlertIsShown(false);
        }, numOfSec * 1000);
    };

    return (
        <>
        { React.cloneElement( props.children, { onClick: handleAlertIsShown } ) }
        <div className={styles.alertContainer}>
            {alertIsShown && alertState()}
        </div>
        </>
    );
}

export default AlertState;