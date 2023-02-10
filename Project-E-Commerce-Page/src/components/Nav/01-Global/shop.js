import React, { useState, useContext } from 'react';
import styles from './shop.module.css'
//import globalData from './data.js'
import { navTitles, productPageInfo } from '../../ProductListing/data';
import { Link } from "react-router-dom";
import { NavBar } from '../../../App';

const globalData = JSON.parse(JSON.stringify(navTitles));
globalData[3].title = 'Other';

function ShopOptions({ handleShowOptions, id }) {
    return (
        <div className={styles.container}>
            {
                globalData.map(item => {
                    return (
                        column(item, handleShowOptions, id)
                    )
                })
            }
        </div>
    );
}

const column = (data, handleShowOptions, id) => {
    const { goToProductsPage, goToTypeFilter } = useContext(NavBar);
    const [pageId, setPageId] = goToProductsPage;
    const [typeFilter, setTypeFilter] = goToTypeFilter;
    const arrow = '>';
    const { title, options } = data;
    const [isClicked, setIsClicked] = useState(data.options.map(i => false));
    const handleIsClicked = (index) => {
        let ary = [...isClicked];
        ary = ary.map((i, ind) => ind === index ? i = !i : i = false)
        setIsClicked(ary);
    }
    const arrowStyle = {
        transform: 'rotate(90deg)',
        margin: '0',
        marginRight: '5%',
        paddingBottom: '5%',
    }
    const arrowStyle1 = {
        margin: '0',
        marginRight: '5%',
        paddingBottom: '5%',
    }
    return (
        <div className={styles.column}>
            <Link to="/products" style={{ textDecoration: 'none' }} onClick={() => {
                setPageId(productPageInfo.find(info => info.title.toLowerCase() === title.toLowerCase()).id);
                handleShowOptions(id);
            }}>
                <h2 className={styles.title}>{title}</h2>
            </Link>
            {
                options.map((i, index) => {
                    return (
                        <div className={styles.options}>
                            <span className={styles.labelSpan} onClick={() => handleIsClicked(index)}>
                                <p style={isClicked[index] ? arrowStyle : arrowStyle1}>{arrow}</p>
                                <Link to="/products" style={{ textDecoration: 'none' }} onClick={() => {
                                    setPageId(productPageInfo.find(info => info.title.toLowerCase() === title.toLowerCase()).id);
                                    handleShowOptions(id);
                                    setTypeFilter(i.label);
                                }}>
                                    <p className={styles.label}>{i.label}</p>
                                </Link>
                            </span>
                            {
                                // isClicked[index] ?
                                //     <span className={styles.typesSpan}>
                                //         {
                                //             i.types.map(j => {
                                //                 return (
                                //                     <p className={styles.type}>{j}</p>
                                //                 )
                                //             })
                                //         }
                                //     </span>
                                //     : <></>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShopOptions;