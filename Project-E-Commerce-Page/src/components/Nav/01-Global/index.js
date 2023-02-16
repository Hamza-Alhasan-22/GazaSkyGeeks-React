import React, { useContext, useState } from 'react';
import styles from "./style.module.css";
import { BsFillBagFill, BsSearch } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { navBar } from './data.js'
import ShopOptions from './shop.js'
import { NavBar } from '../../../App.js'
import FavCard from '../../Shared/FavCard';
import BagCard from '../../Shared/BagCard';
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import Search from '../../Shared/Search';

function Global() {
    const [discount, setDiscount] = useState([]);
    const { cards, closeState, favList } = useContext(NavBar);
    const cardsArry = cards[0];
    const favArryProducts = favList[0];
    const [close, setClose] = closeState;
    const [showOptions, setShowOptions] = useState(navBar.map(i => false));
    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const handleShowOptions = (index) => {
        setShowOptions(showOptions.map((item, i) => (i === index ? !item : false)))
    };
    const arrow = (direction) => {
        const arrowStyle = {
            transform: direction === 'up' ? 'rotate(180deg)' : 'rotate(0deg)',
        }
        return <IoIosArrowUp size={25} style={arrowStyle} />
    }
    const headerTitle = (header) => {
        return (
            <div className={styles.titleButton} key={header.id}>
                <button className={showOptions[header.id - 1] ? `${styles.titleButtonTxt} ${styles.redActive} ${styles.activeOption}` : styles.titleButtonTxt}
                    onClick={() => handleShowOptions(header.id - 1)}>{header.title}{showOptions[header.id - 1] ? arrow('up') : arrow('down')}</button>
                {
                    showOptions[header.id - 1] ? <ShopOptions handleShowOptions={handleShowOptions} id={header.id - 1} /> : <></>
                }
            </div>
        )
    }
    const numOfFavs = () => {
        return favArryProducts.length;
    }
    const numOfBags = () => {
        let num = 0;
        cardsArry.map((item, index) => num = num + item.quantity);
        return num;
    }
    const [favIsClicked, setFavIsClicked] = useState(false);
    const [BagIsClicked, setBagIsClicked] = useState(false);
    const iconContainer = <div className={styles.iconContainer}>
        <p className={styles.titleButtonTxt}>Login</p>
        <button onClick={()=>setSearchIsClicked(!searchIsClicked)}><BsSearch size={20} /></button>
        <button onClick={() => { setFavIsClicked(!favIsClicked); setClose(true); setBagIsClicked(false) }}><MdFavoriteBorder size={20} />{numOfFavs() !== 0 ? <p className={styles.numFavs}>{numOfFavs()}</p> : <></>}</button>
        <button onClick={() => { setBagIsClicked(!BagIsClicked); setClose(true); setFavIsClicked(false) }}><BsFillBagFill size={20} />{numOfBags() !== 0 ? <p className={styles.numBags}>{numOfBags()}</p> : <></>}</button>
    </div>;
    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        setClicked(!clicked);
    };
    function refreshPage() {
        setTimeout(() => {
            window.location.reload();
          }, 0);
    }
    function scrollToTop() {
        animateScroll.scrollToTop({
          duration: 500,
          smooth: true
        });
    }
    return (
        <div className={styles.navBarDiv}>
            <div className={styles.titleContainer}>
                <Link id={styles.matter} to="/" onClick={()=>{scrollToTop();refreshPage()}}>
                    <h2 id={styles.matter}>matter</h2>
                </Link>
                {
                    navBar.map((item) => {
                        return (
                            headerTitle(item)
                        )
                    })
                }
            </div>
            <div className={styles.navbarMobile}>
                <Link id={styles.matter} to="/" onClick={scrollToTop}>
                    <h2 id={styles.matter}>matter</h2>
                </Link>
                <span className={styles.faTimesIcon} onClick={() => handleClicked()}>{clicked ? <FaTimes size={30} /> : <FaBars size={30} />}</span>
                {clicked ?
                    <div className={styles.containerMobile}>
                        {
                            navBar.map((item) => {
                                return (headerTitle(item))
                            })
                        }
                    </div> : <></>}
            </div>
            {iconContainer}
            {favIsClicked && close ? <BagCard /> : <></>}
            {BagIsClicked && close ? <FavCard state={[discount, setDiscount]} /> : <></>}
            {searchIsClicked && <Search />}
        </div>
    );
}

export default Global;