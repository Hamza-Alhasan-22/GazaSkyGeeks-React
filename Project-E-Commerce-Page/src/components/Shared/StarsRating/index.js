import React, { useState } from 'react';
import './styles.css'
import { FaStar as StarOutline } from 'react-icons/fa';
import { FaStar as StarSolid } from 'react-icons/fa';

const StarsRating = () => {
    const [rating, setRating] = useState(0);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <i className="fa fa-star" style={{color: ratingValue <= (rating) ? '#ffc107' : '#e4e5e9'}}>
                            <span className="outline-star">
                                <StarOutline />
                            </span>
                            <span className="solid-star">
                                <StarSolid />
                            </span>
                        </i>
                    </label>
                );
            })}
        </div>
    );
};

export default StarsRating;