import React, { useState, useContext } from 'react';
import styles from './style.module.css';
import { Link } from "react-router-dom";
import {NavBar} from '../../../App.js';
import {productPageInfo} from '../../ProductListing/data'

function ShopCart(props) {
    const {goToProductsPage} = useContext(NavBar);
    const [pageId, setPageId] = goToProductsPage;
    const [isHover, setIsHover] = useState(false);
    const {id, image, description} = props;
    return (
        <div className={styles.cart} onMouseEnter={(e) => { setIsHover(true) }}
        onMouseLeave={(e) => { setIsHover(false) }}>
            <img className={styles.cartImg} src={image} alt={'image '+id}/>
            {isHover?<button className={styles.cartButton}><Link to="/products" onClick={()=>{setPageId(productPageInfo.find(info=>info.title===description).id)}} style={{color:'white',textDecoration:'none'}}>Shop Now</Link></button>:<></>}
            <p className={styles.cartP}>{description}</p>
        </div>
    );
}

export default ShopCart;