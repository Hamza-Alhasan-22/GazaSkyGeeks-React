import React, { useState, useContext, useEffect } from 'react';
import styles from './style.module.css'
import { NavBar } from '../../../App.js'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import Popup from 'reactjs-popup';
import PopOut from '../PopOut';
import {popUpData} from '../../ProductListing/data'

//favArryProducts: item :
//id: props.id,
//title: props.title,
//price: props.data.price,
//image: props.sideImgs,

const Modal = ({ childComponent, onClose, onOpen, isOpen }) => (
    <Popup
        modal onClose={onClose} onOpen={onOpen} open={isOpen}>
        {childComponent}
    </Popup>
)

function BagCard(props) {
    const { cards, closeState, favList } = useContext(NavBar);
    const [favArryProducts, setFavArryProducts] = favList;
    const [close, setClose] = closeState;
    const [cardsArry, setCardsArry] = cards;
    const deleteItem = (indexForRemoval) => {
        let ary2 = [...favArryProducts];
        ary2.splice(indexForRemoval, 1);
        setFavArryProducts(ary2);
    }
    const moveToBag = (stateID) => {
        if(stateID==='all'){
        let arry1 = [...cardsArry];
        favArryProducts.map((item, index) => {
            arry1.find(dataObj => dataObj.id === item.id) == undefined ?
                arry1.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1
                }) : arry1.find(dataObj => dataObj.id === item.id).quantity += 1
            return true
        })
        setCardsArry(arry1);
        setFavArryProducts([]);
        }
        else{//Inserting the id of the item
            let saveIndex;
            let arry1 = [...cardsArry];
            favArryProducts.map((item, index) => {
                if(item.id===stateID){
                saveIndex = index;
                arry1.find(dataObj => dataObj.id === item.id) == undefined ?
                    arry1.push({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        quantity: 1
                    }) : arry1.find(dataObj => dataObj.id === item.id).quantity += 1
                return true
                }
            })
            setCardsArry(arry1);
            deleteItem(saveIndex);
        }
    }
    return (
        <div className={styles.container}>
            <span className={styles.titleSpan}>
                <h1>Wish List</h1>
                <p>YOUR SAVED ITEMS: {favArryProducts.length} ITEMS</p>
                <span className={styles.closeList} onClick={() => setClose(false)}><AiOutlineCloseCircle size={40} /></span>
            </span>
            <div className={styles.carts}>
                {
                    favArryProducts.map((item, index) => {
                    return (
                        WithItem(item,index, deleteItem, moveToBag)
                    )
                    })
                }
            </div>
            <button className={styles.moveButton} onClick={() => moveToBag('all')}>Move All to Bag</button>
        </div>
    );
}

function WithItem(item,index, deleteItem, moveToBag) {
    const [isModalOpen, setisModalOpen] = useState(false);
    useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'visible';
        }
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, [isModalOpen]);

    const openModal = () => {
        setisModalOpen(true);
    }

    const closeModal = () => {
        setisModalOpen(false);
    }
    return (
        <div className={styles.cart}>
            <img src={item.image[0]} alt={'cart image ' + item.id} />
            <span className={styles.cartData}>
                <span className={styles.cartDiscription}>
                    <h2>{item.title}</h2>
                    <p>${item.price.toFixed(2)}</p>
                    <p className={styles.select} onClick={openModal}>Select to show the details</p>
                </span>
                <span className={styles.editSpan}>
                    <button onClick={()=>moveToBag(item.id)}>Move to Bag</button>
                    <span className={styles.trashIcon}><BsTrash size={25} onClick={() => deleteItem(index)} /></span>
                </span>
            </span>
            <Modal
                childComponent={<PopOut {...popUpData.find(itemPop=>itemPop.id===item.id.toString())} onClose={closeModal} />}
                isOpen={isModalOpen}
                onClose={closeModal}
                onOpen={openModal}
            />
        </div>
    )
}

export default BagCard;