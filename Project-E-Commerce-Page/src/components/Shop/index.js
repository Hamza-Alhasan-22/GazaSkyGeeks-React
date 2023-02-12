import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import ShopCart from '../Shared/ShopCart';
import styles from './style.module.css'
import {shopOptions} from './shopData.js'

function Shop(props) {
    return (
        <div className={styles.shopContainer}>
            <SectionTitle title='Shop'/>
            <div className={styles.shopCarts}>
                 {
                    shopOptions.map((item,index)=>{
                        return(
                            <ShopCart key={index} {...item}/>
                        )
                    })
                 }
            </div>
        </div>
    );
}

export default Shop;