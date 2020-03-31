import React from 'react';
import styles from './Reviews.module.css';
import PropTypes from 'prop-types';

const ReviewsComponent = ({ onReviews }) => {
    return (
        <>
            <ul>
                {onReviews.length > 0 ? onReviews.map(review => (<li key={review.id} >
                    <h3 className={styles.author}>Author: {review.author}</h3>
                    <p className={styles.cont}>{review.content}</p>
                </li>)) : <p className={styles.text}>We don't have any reviews for this movie</p>}
            </ul>
        </>
    )
}

export default ReviewsComponent;

ReviewsComponent.propTypes = {
    onReviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string,
    }))
}
