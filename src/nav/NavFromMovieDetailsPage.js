import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Nav.module.css';

class NavFromMovieDetailsPage extends Component {

    render() {
        const movieId = this.props.match.params.movieId

        return (
            <>
                <ul className={styles.box}>
                    <li>
                        <Link to={{
                            pathname: `/movie/${movieId}/cast`,
                            state: { from: this.props.location },
                        }}
                            className={styles.linkTwo}>Cast</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: `/movie/${movieId}/reviews`,
                            state: { from: this.props.location },
                        }}
                            className={styles.linkTwo}>Reviews</Link>
                    </li>
                </ul>
            </>
        )
    }
}





export default withRouter(NavFromMovieDetailsPage);