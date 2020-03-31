import React from 'react';
import styles from './Cast.module.css';
import PropTypes from 'prop-types';

const baseUrlForImage = 'https://image.tmdb.org/t/p/w92'

const CastComponent = ({ cast }) => {
    console.log('cast:', cast)
    return (
        <>
            <ul className={styles.list}>
                {cast && cast.map(cas => (<li key={cas.id} >
                    <img className={styles.img} src={`${baseUrlForImage}${cas.profile_path}`} alt={cas.name}></img>
                    <p className={styles.text}>{cas.name}</p>
                    <p className={styles.text}>Character: {cas.character}</p>
                </li>))}
            </ul>
        </>
    )
}

export default CastComponent;

CastComponent.propTypes = {

    cast: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
    }))
}
