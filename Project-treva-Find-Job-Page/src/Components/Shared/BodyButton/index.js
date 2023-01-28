import React from 'react';
import style from './style.module.css'

function BodyButton(props) {
    const {color, isActive, onClick} = props;
    const activeStyles = {
        borderBottom: '5px solid '+color
    };
    
    return (
        <button className={style.myButton} style={isActive?activeStyles:null} onClick={onClick} >
            {props.children}
        </button>
    );
}

export default BodyButton;