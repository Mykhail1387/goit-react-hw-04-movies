import React, { Component } from 'react';
import * as apiMovies from '../../services/apiMovies';
import MoviesList from '../../components/moviesList/MoviesList';
import styles from './HomePage.module.css';

class HomePage extends Component {
    state = { films: [] }

    componentDidMount() {
        apiMovies.getTrendingFilm().then(results => this.setState({ films: results }))
    }

    render() {
        const { films } = this.state;
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.text}>Trending today</h2>
                <MoviesList films={films} />

            </div>
        )
    }

}

export default HomePage;