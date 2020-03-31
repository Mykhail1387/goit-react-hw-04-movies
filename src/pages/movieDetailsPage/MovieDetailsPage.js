import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as apiMovies from '../../services/apiMovies';
import Movie from '../../components/movie/Movie';
import NavFromMovieDetailsPage from '../../nav/NavFromMovieDetailsPage';
import styles from './movieDetailsPage.module.css';

const AsyncCast = lazy(() =>
    import('../cast/Cast' /* webpackChunkName: "Cast" */),
);

const AsyncReviews = lazy(() =>
    import('../reviews/Reviews' /* webpackChunkName: "Reviews" */),
);


const getIdFromProps = props => props.match.params.movieId;

class MovieDetailsPage extends Component {
    state = {
        film: null
    }

    componentDidMount() {
        const id = getIdFromProps(this.props)
        apiMovies.getFilmWithId(id).then(film => this.setState({ film }))
    }

    handleGoBack = () => {
        const { state } = this.props.location;
        if (state) {
            this.props.history.push(state.from);
            return;
        }
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {
        const { film } = this.state
        if (film) {
            console.log('film:', film)

        }
        return (
            <div>
                <button className={styles.btn} type="button" onClick={this.handleGoBack}>&lArr; Go back</button>
                {film && <Movie {...film} />}
                <p>Additional information</p>
                <NavFromMovieDetailsPage />
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Switch>
                        <Route path={`${this.props.match.path}/cast`} exact component={AsyncCast} />
                        <Route path={`${this.props.match.path}/reviews`} component={AsyncReviews} />
                    </Switch>
                </Suspense>

            </div >
        )
    }
}

export default MovieDetailsPage;
