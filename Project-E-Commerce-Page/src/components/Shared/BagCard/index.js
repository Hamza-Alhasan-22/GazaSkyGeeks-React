import React, { useState, useContext, useEffect, useRef, forwardRef } from 'react';
import styles from './style.module.css'
import { NavBar } from '../../../App.js'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import Popup from 'reactjs-popup';
import PopOut from '../PopOut';
import {popUpData} from '../../ProductListing/data'

const Modal = forwardRef(({ childComponent, onClose, onOpen, isOpen }, ref) => {
    const popupRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (isOpen && popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);
    return (
        <Popup
            ref={(node) => {
                popupRef.current = node && node.contentWrapper;
                if (ref) {
                    ref.current = popupRef.current;
                }
            }}
            onClose={onClose}
            onOpen={onOpen}
            open={isOpen}
            closeOnDocumentClick={false}
            modal
        >
            {childComponent}
        </Popup>
    );
});

function BagCard(props) {
    const { cards, closeState, favList } = useContext(NavBar);
    const [favArryProducts, setFavArryProducts] = favList;
    const [indexOpened, setIndexOpened] = useState(null);
    const setClose = closeState[1];
    const [cardsArry, setCardsArry] = cards;
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
    const handleIndex =(id)=>{
        setIndexOpened(indexOpened===id?null:id);
    }
    const deleteItem = (indexForRemoval) => {
        let ary2 = JSON.parse(JSON.stringify(favArryProducts));
        ary2.splice(indexForRemoval, 1);
        setFavArryProducts(ary2);
    }
    const moveToBag = (stateID) => {
        let arry1;
        if(stateID==='all'){
        arry1 = [...cardsArry];
        favArryProducts.map((item, index) => {
            arry1.find(dataObj => dataObj.id === item.id) === undefined ?
                arry1.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1
                }) : arry1.find(dataObj => dataObj.id === item.id).quantity += 1
            return true
        })
        setFavArryProducts([]);
        }
        else{//Inserting the id of the item
            let saveIndex;
            arry1 = JSON.parse(JSON.stringify(cardsArry));
            favArryProducts.map((item, index) => {
                if(item.id===stateID){
                saveIndex = index;
                arry1.find(dataObj => dataObj.id === item.id) === undefined ?
                    arry1.push({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        quantity: 1
                    }) : arry1.find(dataObj => dataObj.id === item.id).quantity += 1
                return true
                }
                else return true
            })
            deleteItem(saveIndex);
        }
        setCardsArry(arry1);
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
                        <WithItem key={index} item={item} index={index} deleteItem={deleteItem} moveToBag={moveToBag} isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} handleIndex={handleIndex} indexOpened={indexOpened} />
                    )
                    })
                }
            </div>
            <button className={styles.moveButton} onClick={() => moveToBag('all')}>Move All to Bag</button>
        </div>
    );
}

function WithItem({item,index, deleteItem, moveToBag, isModalOpen, setisModalOpen, handleIndex, indexOpened}) {
    const openModal = () => {
        setisModalOpen(true);
    }

    const closeModal = () => {
        setisModalOpen(false);
    }
    return (
        <div key={index} className={styles.cart}>
            <img src={item.image[0]} alt={'cart image ' + item.id} />
            <span className={styles.cartData}>
                <span className={styles.cartDiscription}>
                    <h2>{item.title}</h2>
                    <p>${item.price.toFixed(2)}</p>
                    <p className={styles.select} onClick={()=>{openModal();handleIndex(item.id)}}>
                        Select to show the details</p>
                </span>
                <span className={styles.editSpan}>
                    <button onClick={()=>moveToBag(item.id)}>Move to Bag</button>
                    <span className={styles.trashIcon}><BsTrash size={25} onClick={() => deleteItem(index)} /></span>
                </span>
            </span>
            <Modal
                childComponent={<PopOut {...popUpData.find(itemPop=>itemPop.id===indexOpened)} onClose={closeModal} />}
                isOpen={isModalOpen}
                // onClose={closeModal}
                onOpen={openModal}
            />
        </div>
    )
}

export default BagCard;