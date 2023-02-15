import React, { useState } from 'react';
import styles from './style.module.css'
import Card from '../Shared/Card';
import { AiOutlineReload } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { products, optionsSort, productPageInfo, popUpData } from "./data"
import NavBar from './navBar.js';

function sortCards(arrayInput, value, numOfShowedProducts) {
  if (value === '1') {
    // let ary = [];
    // arrayInput.map(productType => { ary = [...ary, ...productType.typeProducts] });
    // return ary.slice(0, numOfShowedProducts).sort((a, b) => a.description.localeCompare(b.description))
    const sortedProducts = arrayInput.map(productType => {
      return {
        ...productType,
        typeProducts: productType.typeProducts.slice(0, numOfShowedProducts).sort((a, b) => a.description.localeCompare(b.description))
      }
    });
    return sortedProducts
  }
  else if (value === '2') {
    const sortedProducts = arrayInput.map(productType => {
      return {
        ...productType,
        typeProducts: productType.typeProducts.slice(0, numOfShowedProducts).sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)))
      }
    });
    return sortedProducts
  }
  else if (value === '3') {
    //else{
    const sortedProducts = arrayInput.map(productType => {
      return {
        ...productType,
        typeProducts: productType.typeProducts.slice(0, numOfShowedProducts).sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)))
      }
    });
    return sortedProducts
  }
  else return arrayInput
}

function ProductListing({ pageState }) {
  const [pageId, setPageId] = pageState;
  //const saveProducts = [...products];
  const saveProducts = JSON.parse(JSON.stringify(products));//Deep Copy
  const [selected, setSelected] = useState('defult');
  const [products1, setProducts1] = useState(saveProducts[pageId]);
  const [numOfShowedProduct, setNumOfShowedProduct] = useState(6);
  const [activeButton, setActiveButton] = useState([...Array(4).keys()].map(() => false));
  const [label, setLabel] = useState('');
  const handleSetProducts1 = (aryT) => {
    setProducts1([...aryT]);
  }
  const handleChanges = (arrayOfProducts, valueSelected) => {
    handleSetProducts1(sortCards(arrayOfProducts, valueSelected, numOfShowedProduct));
  }
  const resetFunction = () => {
    setProducts1(saveProducts[pageId]);
    setSelected('default');
    setLabel('');

  }
  const handleActiveButton = (index) => {
    const ary = [...Array(4).keys()].map(() => false);
    ary[index] = true;
    setActiveButton(ary);
  }
  const handleLabel = (string) => {
    setLabel(string)
  }
  const title = () => {
    return label !== '' ? <p>{productPageInfo[pageId].title} <BsArrowRight /> {label}</p> : <p>{productPageInfo[pageId].title}</p>;
  }
  const getLength = () => {
    let counter = 0;
    products1.map((types, key) => {
      counter = counter + types.typeProducts.length
      return true
    });
    return counter;
  }
  const handleNumOfShowedProduct = () => {
    numOfShowedProduct + 6 > getLength() ? setNumOfShowedProduct(getLength()) : setNumOfShowedProduct(numOfShowedProduct + 6);
  }
  return (
    <div>
      <div className={styles.sortSection}>
        <span>{title()}</span>
        <span className={styles.sortSpan}>
          <p>Sort By</p>
          <select id="sort" value={selected} onChange={(e) => { setSelected(e.target.value); handleChanges(products1, e.target.value) }}>
            <option value="default" disabled defaultValue>{'-- Select --'}</option>
            {optionsSort.map((option, indexOption) => (
              <option key={indexOption} value={option.value}>{option.label}</option>
            ))}
          </select>
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.headerNav}>
            <p className={styles.filter}>Filters</p>
            <p className={styles.reset} onClick={() => resetFunction()}>Reset</p>
          </div>
          <NavBar handleSetProducts1={handleSetProducts1} saveProducts={saveProducts} handleLabel={handleLabel} pageState={[pageId, setPageId]} />
          <div className={styles.sizes}>
            <p>- SIZES</p>
            <span>
              <span className={styles.buttons}>
                {
                  activeButton.map((item, ind) => {
                    return (<button key={ind} className={item ? styles.activeButtonStyle : styles.notActiveButtonStyle}
                      onClick={() => handleActiveButton(ind)}>{ind + 1}</button>)
                  })
                }
              </span>
              <p>SEE OUR SIZING GUIDE</p>
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.gridContainer}>
            {
              products1.map((types, key) => {
                return (types.typeProducts.slice(0, numOfShowedProduct).map(item => {
                  return (
                    <Card key={item.id} cardData={item} popupData={popUpData.find(dataObj => dataObj.id === item.id)} />
                  )
                })
                )
              })
            }
          </div>
          {numOfShowedProduct === getLength() ? <></> : <button className={styles.loading} onClick={() => handleNumOfShowedProduct()}><AiOutlineReload /> LOADING</button>}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;