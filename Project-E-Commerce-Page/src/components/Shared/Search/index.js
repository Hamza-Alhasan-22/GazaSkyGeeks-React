import React, { useState, useEffect, useRef, forwardRef } from 'react'
import styles from './styles.module.css'
import { products } from '../../ProductListing/data.js'
import Popup from 'reactjs-popup';
import PopOut from '../PopOut';
import { popUpData } from '../../ProductListing/data.js'

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

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [isModalOpen, setisModalOpen] = useState(false);
    const [productID, setProductID] = useState(null);
    const handleProductID = (index)=>{
        setProductID(index)
    };
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
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        const filteredProducts = products.map(section => section.map(type => type.typeProducts.filter(product =>
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )));
        let ary = [];
        filteredProducts.map(section => section.map(type => type.length !== 0 ? type.map(product => ary.push(product)) : null));
        setResults(ary);
    };
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Enter a product name to search"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map(product => (
                    <li key={product.id}>
                        <span onClick={()=>{openModal();handleProductID(product.id)}}>
                            <img src={product.image} alt={product.description} />
                            <div>
                                <p>{product.description}</p>
                                <p style={{ color: 'red' }}>{product.price}</p>
                            </div>
                        </span>
                        <Modal
                            childComponent={<PopOut {...popUpData.find(item => item.id === productID)} onClose={closeModal} />}
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            onOpen={openModal}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search