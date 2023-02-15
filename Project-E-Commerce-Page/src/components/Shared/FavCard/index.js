import React, { useContext, useEffect, useState, useRef, forwardRef } from 'react';
import styles from './style.module.css'
import { NavBar } from '../../../App.js'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { coupons } from '../../../products/coupons.js'
import Popup from 'reactjs-popup';
import PopOut from '../PopOut';
import {popUpData} from '../../ProductListing/data.js'

const Modal = ({ childComponent, onClose, onOpen, isOpen }) => (
    <Popup
        modal onClose={onClose} onOpen={onOpen} open={isOpen}>
        {childComponent}
    </Popup>
)

const Modal2 = forwardRef(({ childComponent, onClose, onOpen, isOpen }, ref) => {
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

function FavCard({ state }) {
    const { cards, closeState } = useContext(NavBar);//const { cards, closeState, favList } = useContext(NavBar);
    const [cardsArry, setCardsArry] = cards;
    const setClose = closeState[1];//const [close, setClose] = closeState;
    const [quantity, setQuantity] = useState(cardsArry.map(i => i.quantity));
    const [couponInput, setCouponInput] = useState("");
    const [isModalOpen, setisModalOpen] = useState(false);
    const [isModalOpen2, setisModalOpen2] = useState(false);
    const [discount, setDiscount] = state;
    const [error, setError] = useState(null);
    const [productID, setProductID] = useState(null);
    const handleProductID = (index)=>{
        setProductID(index)
    }
    useEffect(() => {
        let arry = [...cardsArry];
        arry.map((item, index) => item.quantity = quantity[index]);
        setCardsArry(arry);
    }, [quantity]);
    useEffect(() => {
        if (isModalOpen || isModalOpen2) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isModalOpen, isModalOpen2]);
    const handleCouponInput = (event) => {
        setCouponInput(event.target.value);
    }
    const openModal = () => {
        setisModalOpen(true);
    }
    const openModal2 = () => {
        setisModalOpen2(true);
    }
    const closeModal = () => {
        setisModalOpen(false);
    }
    const closeModal2 = () => {
        setisModalOpen2(false);
    }
    const handleQuantity = (check, ind) => {
        let ary = [...quantity];
        check === '+' ? ary[ind] = ary[ind] + 1 :
            ary[ind] === 1 && check === '-' ? ary[ind] = 1 :
                ary[ind] = ary[ind] - 1;
        setQuantity(ary);
    };
    const totalPrice = () => {
        let sum = 0;
        cardsArry.map((item, index) => {
            return (
                sum = sum + (item.price * quantity[index])
            )
        })
        return sum;
    }
    const deleteItem = (indexForRemoval) => {
        let ary2 = [...cardsArry];
        ary2.splice(indexForRemoval, 1);
        setCardsArry(ary2);
    };
    const enterCoupon = () => {
        let foundCoupon = coupons.find(coupon => coupon.code === couponInput.toString());
        if (foundCoupon === undefined) {
            //error in finding coupon
            setError('This coupon is not found');
        }
        else {
            if (discount.find(item => item.id === foundCoupon.id) === undefined) {
                setDiscount([[...discount, foundCoupon].find(item => item.discount >= foundCoupon.discount)]);
                setError('The coupon is added successfully!');
            }
            else {
                //show that your coupon is already activated
                setError('This coupun is already activated');
            }
        }
    }
    const calculateDiscount = () => {
        let sum = 0;
        discount.map(item => sum += item.discount)
        return sum
    }
    const grandTotal = () => {
        return (totalPrice() - totalPrice() * calculateDiscount())
    }
    const couponPopup = () => {
        return (
            <div className={styles.couponPopup}>
                <input type="text" placeholder="Defult Coupon: 'defult'" value={couponInput} className={error === null || error === 'The coupon is added successfully!' ? null : styles.invalid} onChange={handleCouponInput} />
                <div>
                    <button onClick={() => enterCoupon()}>Enter Coupon</button>
                    <button onClick={closeModal}>Close</button>
                </div>
                <span onClick={closeModal}><AiOutlineCloseCircle size={30} /></span>
                <p style={error === 'The coupon is added successfully!' ? { color: 'green', fontWeight: 'bold' } : null}>{error}</p>
            </div>
        )
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Your Cart ({cardsArry.length} items)</h1>
            <span className={styles.closeList} onClick={() => setClose(false)}><AiOutlineCloseCircle size={40} /></span>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td className={styles.tdItem}>Item</td>
                        <td className={styles.price}>Price</td>
                        <td className={styles.quantity}>Quantity</td>
                        <td className={styles.tdTotal}>Total</td>
                    </tr>
                    {
                        cardsArry.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className={styles.tdItem}>
                                        <span className={styles.item} onClick={()=>{openModal2();handleProductID(item.id)}}>
                                            <img src={item.image[0]} alt='cart img' />
                                            <h2>{item.title}</h2>
                                        </span>
                                    </td>
                                    <td className={styles.price}>
                                        <p>${item.price.toFixed(2)}</p>
                                    </td>
                                    <td className={styles.quantity}>
                                        <span className={styles.adjustSpan}>
                                            <button className={styles.adjustButton} onClick={() => { handleQuantity('-', index) }}>-</button>
                                            <button className={styles.qButton}>{quantity[index]}</button>
                                            <button className={styles.adjustButton} onClick={() => { handleQuantity('+', index) }}>+</button>
                                        </span>
                                    </td>
                                    <td className={styles.tdTotal}>
                                        <span className={styles.priceSpan}>
                                            <p style={{ fontWeight: 'bold' }}>${(item.price * quantity[index]).toFixed(2)}</p>
                                            <AiOutlineCloseCircle className={styles.deleteIcon} onClick={() => deleteItem(index)} />
                                        </span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={styles.total}>
                <span>
                    <p style={{ fontWeight: 'bold' }}>Subtotal:</p>
                    <p>${totalPrice().toFixed(2)}</p>
                </span>
                <span>
                    <p style={{ fontWeight: 'bold' }}>Discount:</p>
                    <p>{calculateDiscount().toFixed(2) * 100}%</p>
                </span>
                <span>
                    <p style={{ fontWeight: 'bold' }}>Coupon Code:</p>
                    {discount.length === 0 ? <p className={styles.addCoupon} onClick={openModal}>Add Coupon</p> : <p className={styles.discountName} onClick={openModal}>{discount[0].name}</p>}
                </span>
                <span>
                    <p style={{ fontWeight: 'bold' }}>Grand total:</p>
                    <p>${grandTotal().toFixed(2)}</p>
                </span>
                <button className={styles.checkOut}>Check Out</button>
            </div>
            <Modal
                childComponent={couponPopup()}
                isOpen={isModalOpen}
                onClose={closeModal}
                onOpen={openModal}
            />
            <Modal2
                childComponent={<PopOut {...popUpData.find(item => item.id === productID)} onClose={closeModal2} />}
                isOpen={isModalOpen2}
                onClose={closeModal2}
                onOpen={openModal2}
            />
        </div>
    );
}

export default FavCard;