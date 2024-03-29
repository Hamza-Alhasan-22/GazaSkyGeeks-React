import React from 'react';
import styles from './style.module.css'
import SectionTitle from '../Shared/SectionTitle';
import photo from '../../products/Logos/bitmap.png'

function AsSeenOn(props) {
    return (
        <div className={styles.AsSeenOnContainer}>
            <SectionTitle title='As Seen On' />
            <div className={styles.bitmapImg}>
                <img src={photo} alt='bitmap background' />
            </div>
        </div>
    );
}

export default AsSeenOn;