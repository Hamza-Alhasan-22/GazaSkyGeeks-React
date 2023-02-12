import React, { useState } from 'react';
import styles from './style.module.css'
import Card from '../Shared/Card';
import { AiOutlineReload } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
//import { Outlet, Link } from "react-router-dom";
//import Sidebar from './dropdown';
import { products, optionsSort, productPageInfo, popUpData } from "./data"
import NavBar from './navBar.js';
// import { popUpData } from '../NewArrivals/data.js'

function sortCards(arrayInput, value, numOfShowedProduct) {
  function sortTypes(arrayProducts) {
    if (value === 1) {
      const myData = [].concat(arrayProducts)
        .sort((a, b) => a.description > b.description ? 1 : -1)
      return myData
    }
    else if (value === 2) {
      const getValue = ({ price }) => +price.slice(1) || 0;
      arrayProducts.sort((a, b) => getValue(a) - getValue(b));
      return arrayProducts
    }
    else if (value === 3) {
      const getValue = ({ price }) => +price.slice(1) || 0;
      arrayProducts.sort((a, b) => getValue(b) - getValue(a));
      return arrayProducts
    }
  }
  function popElements(popArray){
    while(popArray.length > 0) {
      popArray.pop();
    }
  }
  let sortedArray = JSON.parse(JSON.stringify(arrayInput));//Deep Copy
  arrayInput.map((item, index) => {
    popElements(sortedArray[index].typeProducts);
    item.typeProducts.slice(0, numOfShowedProduct).map(item2 => {
      return (
        sortedArray[index].typeProducts.push(item2)
      )
    })
    sortedArray[index].typeProducts = [...sortTypes(sortedArray[index].typeProducts)];
    return true
  });
  return sortedArray;
}

function ProductListing({ pageState }) {
  const [pageId, setPageId] = pageState;
  const saveProducts = [...products];
  const [selected, setSelected] = useState(null);
  const [products1, setProducts1] = useState(saveProducts[pageId]);
  const handleSetProducts1 = (aryT) => {
    setProducts1([...aryT]);
  }
  const handleChanges = (arrayOfProducts, valueSelected) => {
    setProducts1(sortCards(arrayOfProducts, valueSelected, numOfShowedProduct));
  }
  const resetFunction = () => {
    setProducts1(saveProducts[pageId]);
    setSelected('5');
    setLabel('');

  }
  const [activeButton, setActiveButton] = useState([...Array(4).keys()].map(() => false));
  const handleActiveButton = (index) => {
    const ary = [...Array(4).keys()].map(() => false);
    ary[index] = true;
    setActiveButton(ary);
  }
  const [label, setLabel] = useState('');
  const handleLabel = (string) => {
    setLabel(string)
  }
  const title = () => {
    return label !== '' ? <p>{productPageInfo[pageId].title} <BsArrowRight /> {label}</p> : <p>{productPageInfo[pageId].title}</p>;
  }

  const [numOfShowedProduct, setNumOfShowedProduct] = useState(6);
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
            <option value="5" disabled selected>{'-- Select --'}</option>

            {optionsSort.map((option) => (
              <option value={option.value}>{option.label}</option>
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
                    return (<button className={item ? styles.activeButtonStyle : styles.notActiveButtonStyle}
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
            {products1.map((types, key) => {
              return (types.typeProducts.slice(0, numOfShowedProduct).map(item => {
                return (
                  <Card cardData={item} popupData={popUpData.find(dataObj => dataObj.id === item.id)} />
                )
              })
              )
            })}
          </div>
          {numOfShowedProduct === getLength() ? <></> : <button className={styles.loading} onClick={() => handleNumOfShowedProduct()}><AiOutlineReload /> LOADING</button>}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;