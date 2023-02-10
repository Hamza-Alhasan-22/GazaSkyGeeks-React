import React, { useState } from "react";
import styles from './styles.module.css';
import { FiAlertCircle } from "react-icons/fi";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function EmailInput({containerWidth, success}) {
    const [email, setEmail] = useState("");
    const [error, setError] = success;
    const [isShown, setIsShown] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
        if (emailRegex.test(event.target.value)) {
            setError(null);
        } else {
            setError('Invalid email address');
        }
    }

    return (
        <div className={styles.container} style={containerWidth?{width:containerWidth}:null}>
            {error && <span onMouseOver={()=>setIsShown(true)} onMouseLeave={() => setIsShown(false)}><FiAlertCircle color="red"/></span>}
            {isShown && <p>{error}</p>}
            <input type="email" placeholder="Enter Your Email" value={email} className={error?styles.invalid:null} onChange={handleChange} />
        </div>
    );
}

export default EmailInput;