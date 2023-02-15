import React, { useContext } from 'react';
import styles from './shop.module.css'
import { navTitles, productPageInfo } from '../../ProductListing/data';
import { Link } from "react-router-dom";
import { NavBar } from '../../../App';
import { IoIosArrowUp } from 'react-icons/io';

const globalData = JSON.parse(JSON.stringify(navTitles));
globalData[3].title = 'Other';

function ShopOptions({ handleShowOptions, id }) {
    return (
        <div className={styles.container}>
            {
                globalData.map((item,index) => {
                    return (
                        column(item, handleShowOptions, id, index)
                    )
                })
            }
        </div>
    );
}

const column = (data, handleShowOptions, id, indexMain) => {
    const { goToProductsPage, goToTypeFilter } = useContext(NavBar);
    const setPageId = goToProductsPage[1];
    const setTypeFilter = goToTypeFilter[1];
    const { title, options } = data;
    return (
        <div key={indexMain} className={styles.column}>
            <Link to="/products" style={{ textDecoration: 'none' }} onClick={() => {
                setPageId(productPageInfo.find(info => info.title.toLowerCase() === title.toLowerCase()).id);
                handleShowOptions(id);
            }}>
                <h2 className={styles.title}>{title}</h2>
            </Link>
            {
                options.map((i, index) => {
                    return (
                        <div key={index} className={styles.options}>
                            <span className={styles.labelSpan}>
                                <IoIosArrowUp size={15} style={{transform:'rotate(90deg)',}} />
                                <Link to="/products" style={{ textDecoration: 'none' }} onClick={() => {
                                    setPageId(productPageInfo.find(info => info.title.toLowerCase() === title.toLowerCase()).id);
                                    handleShowOptions(id);
                                    setTypeFilter(i.label);
                                }}>
                                    <p className={styles.label}>{i.label}</p>
                                </Link>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShopOptions;