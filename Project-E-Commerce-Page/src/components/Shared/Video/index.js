import React, { useState,useEffect } from 'react';
import styles from './style.module.css';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ childComponent, onClose, onOpen, isOpen }) => (
    <Popup
        modal onClose={onClose} onOpen={onOpen} open={isOpen}>
        {childComponent}
    </Popup>
)

function vidoPlay(videoUrl, text, closeModal) {
    return (
        <div className={styles.videoDiv}>
            <span>
                <p>{text}</p>
                <FaTimes className={styles.fatimes} onClick={closeModal} />
            </span>
            <div className={styles.videoWrapper}>
            <ReactPlayer
                width='100%'
                height='100%'
                className={styles.reactPlayer}
                controls
                url={videoUrl}
                onReady={() => { }}
                onStart={() => { }}
                onPause={() => { }}
                onEnded={() => { }}
                onError={() => { }}
            />
            </div>
        </div>
    )
}

function Video(props) {
    const { id, videoName, text, videoUrl } = props;
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
        <div className={styles.video} onClick={openModal}>
            <img className={styles.videoImg} src={videoName} alt={'Video ' + id} />
            <AiOutlinePlayCircle className={styles.videoPlayIcon} size={100} />
            <p className={styles.videoText}>{text}</p>
            <Modal
                childComponent={
                    vidoPlay(videoUrl, text, closeModal)
                }
                isOpen={isModalOpen}
                onClose={closeModal}
                onOpen={openModal}
            />
        </div>
    );
}

export default Video;