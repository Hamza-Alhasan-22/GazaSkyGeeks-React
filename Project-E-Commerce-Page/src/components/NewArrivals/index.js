import React from 'react';
import styles from './style.module.css'
import Card from '../Shared/Card';
import SectionTitle from '../Shared/SectionTitle';
import { products, popUpData } from '../ProductListing/data.js'

function NewArrivals(props) {
    let counter = 0;
    return (
        <div className={styles.container}>
            <SectionTitle title='New Featured' />
            <div className={styles.gridContainer}>
                {products.map(prods => {
                    return (
                        prods.map((types, key) => {
                            return (types.typeProducts.map(item => {
                                if (item.newTag === 'active' && counter < 8) {
                                    counter += 1;
                                    return (
                                        <Card key={item.id} cardData={item} popupData={popUpData.find(dataObj => dataObj.id === item.id)} />
                                    )
                                }
                                else return true
                            }))
                        })
                    )
                })
                }


            </div>
        </div>
    );
}

export default NewArrivals;