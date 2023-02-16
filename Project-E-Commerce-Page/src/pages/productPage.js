import React, {useEffect} from 'react';
import styles from '../App.module.css';
import Global from '../components/Nav/01-Global';
import Footer from '../components/Footer';
import HeaderImg from '../components/HeaderImg';
import TopInfo from '../components/Nav/02-Top Info';
import ProductListing from '../components/ProductListing';
import {productPageInfo} from '../components/ProductListing/data.js'

function ProductPage({pageState}) {
    const pageId = pageState[0];
    useEffect(() => {
        window.scrollTo(
          {
            top: 0,
            behavior: 'smooth',
          }
        )
      }, [pageId]);
    return (
        <>
            <div className={styles.headerContainer}>
                <TopInfo />
                <Global />
            </div>
            <HeaderImg title={productPageInfo[pageId].title} description={productPageInfo[pageId].description} img={productPageInfo[pageId].wallpaper} />
            <div className={styles.mainContainer}>
                <ProductListing pageState={pageState} />
            </div>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </>
    );
}

export default ProductPage;