import React, { useState, useContext } from 'react';
import styles from './navStyles.module.css'
import { navTitles } from './data';
import { NavBar as NavBarContext } from '../../App';

const NavBar = (props) => {
    const { goToTypeFilter } = useContext(NavBarContext);
    const [typeFilter, setTypeFilter] = goToTypeFilter;

    const { handleSetProducts1, saveProducts, handleLabel, pageState } = props;
    const [pageId, setPageId] = pageState;
    const items = navTitles;
    const arrow = '>';
    const [isClicked, setIsClicked] = useState(items.map(i => { return (false) }));
    const handleIsClicked = (index) => {
        //const ary = [...isClicked];
        const ary = [...Array(isClicked.length).keys()].map((item, ind) => ind === index ? isClicked[index] : false)
        ary[index] = !(ary[index]);
        setIsClicked(ary);
    };
    const findType = (typeName, ind) => {
        return saveProducts[ind].filter(productType => productType.type.toLowerCase() === typeName.toLowerCase());
    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const initialType = ()=>{
        const i = saveProducts.indexOf(saveProducts.find(item=>item.find(types=>types.type.toLowerCase()===typeFilter.toLowerCase())));
        if(typeFilter != ''){
            handleSetProducts1(findType(typeFilter, i));
            handleLabel(capitalizeFirstLetter(typeFilter.toLowerCase()));
            setTypeFilter('');
        }
    }
    return (
        <div className={styles.container}>
            {
                initialType()
            }
            {
                items.map((item, i) => {
                    // const [optionIsClicked, setOptionIsClicked] = useState(item.options.map(i => { return (false) }));
                    // const handleOptionIsClicked = (index) => {
                    //     const ary = item.options.map(i => { return (false) });
                    //     ary[index] = !optionIsClicked[index];
                    //     setOptionIsClicked(ary);
                    // };
                    return (
                        <div className={styles.nav}>
                            <span className={styles.titleSpan} onClick={() => { handleIsClicked(i); handleLabel(''); setPageId(i); handleSetProducts1(saveProducts[i]); }}>
                                <h2 className={styles.titleLabel}>{item.title}</h2>
                                <p className={isClicked[i] ? styles.arrowUp : styles.arrowDown}>{arrow}</p>
                            </span>
                            {isClicked[i] ?
                                item.options.map((option, o) => {
                                    ////////
                                    return (
                                        <div>
                                            <span className={styles.optionsSpan} onClick={() => {
                                                //handleOptionIsClicked(o);
                                                handleSetProducts1(findType(option.label, i));
                                                handleLabel(capitalizeFirstLetter(option.label.toLowerCase()));
                                            }}>
                                                {/* <p className={optionIsClicked[o] ? styles.arrowUp : styles.arrowDown}
                                                    style={{ marginRight: '2%' }}>{arrow}</p> */}
                                                <p className={styles.optionLabel}>{option.label}</p>
                                            </span>

                                            {/* {optionIsClicked[o] ?
                                                <span>
                                                    {option.types.map((type) => {
                                                        return (
                                                            <p className={styles.optionType}>{type}</p>
                                                        )
                                                    })} </span> : <></>
                                            } */}

                                        </div>
                                    )
                                }) : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavBar;