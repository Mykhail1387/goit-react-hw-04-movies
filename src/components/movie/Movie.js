import React from 'react';
import styles from './Movie.module.css';
import PropTypes from 'prop-types';


const baseUrlForImage = 'https://image.tmdb.org/t/p/w185'

const Movie = ({ poster_path, title, overview, genres, vote_average, release_date }) => {
    const percentage = vote_average * 10;
    const date = release_date.slice(0, 4)

    return (
        <>
            <div className={styles.wrap}>
                <img className={styles.img} src={`${baseUrlForImage}${poster_path}`} alt={title} />
                <div>
                    <h3 className={styles.text}>{title} ({date})</h3>
                    <p>User Score: {percentage}%</p>
                    <h3 className={styles.text}>Overview</h3>
                    <p>{overview}</p>
                    <h3 className={styles.text}>Genres</h3>
                    {genres.map(genre => (<p key={genre.id} className={styles.list}>  {genre.name}</p>))}

                </div>
            </div>
        </>
    )
}

export default Movie;

Movie.propTypes = {
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })),
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired
}
