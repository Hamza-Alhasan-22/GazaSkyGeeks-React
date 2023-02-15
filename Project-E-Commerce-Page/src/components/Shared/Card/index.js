import React, { useState,useEffect,useRef,forwardRef } from 'react';
import NewTag from '../NewTag';
import styles from './style.module.css'
import Popup from 'reactjs-popup';
import PopOut from '../PopOut';

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


function Card(props) {
    const { cardData, popupData } = props;

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
        <div className={styles.card}>
            <img src={cardData.image} alt={'img card ' + cardData.id} className={styles.cardImg} />
            {
                cardData.newTag === 'active' ? <NewTag /> : null
            }
            <p className={styles.cardDescription}>
                {cardData.description}
            </p>
            <p className={styles.cardPrice}>
                {cardData.price}
            </p>
            <button
                className={styles.cardButton}
                onClick={openModal}
            >QUICK VIEW</button>
            <Modal
                childComponent={<PopOut {...popupData} onClose={closeModal} />}
                isOpen={isModalOpen}
                onClose={closeModal}
                onOpen={openModal}
            />
        </div>
    );
}

export default Card;