import React, { useState, useContext } from 'react';
import styles from './navStyles.module.css'
import { navTitles } from './data';
import { NavBar as NavBarContext } from '../../App';

const NavBar = (props) => {
    const { goToTypeFilter } = useContext(NavBarContext);
    const [typeFilter, setTypeFilter] = goToTypeFilter;

    const { handleSetProducts1, saveProducts, handleLabel, pageState } = props;
    const setPageId = pageState[1];
    const items = navTitles;
    const arrow = '>';
    const [isClicked, setIsClicked] = useState(items.map(i => { return (false) }));
    const handleIsClicked = (index) => {
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
        if(typeFilter !== ''){
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
                    return (
                        <div key={i} className={styles.nav}>
                            <span className={styles.titleSpan} onClick={() => { handleIsClicked(i); handleLabel(''); setPageId(i); handleSetProducts1(saveProducts[i]); }}>
                                <h2 className={styles.titleLabel}>{item.title}</h2>
                                <p className={isClicked[i] ? styles.arrowUp : styles.arrowDown}>{arrow}</p>
                            </span>
                            {isClicked[i] ?
                                item.options.map((option, o) => {
                                    return (
                                        <div key={o}>
                                            <span className={styles.optionsSpan} onClick={() => {
                                                handleSetProducts1(findType(option.label, i));
                                                handleLabel(capitalizeFirstLetter(option.label.toLowerCase()));
                                            }}>
                                                <p className={styles.optionLabel}>{option.label}</p>
                                            </span>
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