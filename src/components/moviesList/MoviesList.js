/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

class MoviesList extends Component {
    render() {
        const { films } = this.props
        return (
            <>
                <ul className={styles.list}>
                    {films.map(film => {
                        if (film.title !== 'UNdefined') {
                            return (<li key={film.id}>
                                <Link to={{
                                    pathname: `/movie/:${film.id}`,
                                    state: { from: this.props.location },
                                }} className={styles.link}>{film.title}</Link>
                            </li>)
                        }
                    })}
                </ul>
            </>
        )
    }
}

export default withRouter(MoviesList);

MoviesList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
    }))
}
