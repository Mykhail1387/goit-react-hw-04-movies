import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Nav from './nav/Nav';

const AsyncMovieDetailsPage = lazy(() =>
    import('./pages/movieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const AsyncMoviesPage = lazy(() =>
    import('./pages/moviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const App = () => (
    <div>
        <Nav />
        <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/movie/:movieId" component={AsyncMovieDetailsPage} />
                <Route path="/movie" component={AsyncMoviesPage} />
                <Route component={HomePage} />
            </Switch>
        </Suspense>
    </div>
);

export default App;