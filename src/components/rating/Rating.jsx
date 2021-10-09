import React from 'react';
import ReactStars from "react-rating-stars-component";

const Rating = ({ rating, showRate, edit, onChange }) => {

    return (
        <div className="d-flex align-items-center">
            <ReactStars
                count={6}
                size={30}
                activeColor="#ffd700"
                value={rating}
                edit={edit}
                onChange={onChange}
            />

            {showRate && <p className="mb-0 mx-3">{rating}/6</p>}
        </div>
    )
}

export default Rating;
