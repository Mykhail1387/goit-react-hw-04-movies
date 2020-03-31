import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as apiMovies from '../../services/apiMovies';
import SearchForm from '../../components/searchForm/SearchForm';
import MoviesList from '../../components/moviesList/MoviesList';
import queryString from 'query-string';


class MoviesPage extends Component {
    state = {
        films: [],
        query: ''
    }

    onSubmitForm = ({ name }) => {
        this.setState({
            query: name
        })
    }

    onQueryChange = query => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
        });
    };

    componentDidMount() {
        const thisProp = queryString.parse(this.props.location.search)

        if (thisProp.query !== undefined) {

            this.setState({ query: thisProp.query })

            apiMovies
                .fetchMovieByQuery(thisProp.query).then(results => this.setState({ films: results }))
        }
    }

    componentDidUpdate(prevProps, prevState) {

        const prevProp = queryString.parse(prevProps.location.search)
        const thisProp = queryString.parse(this.props.location.search)

        if (prevProp.query !== thisProp.query) {

            apiMovies
                .fetchMovieByQuery(thisProp.query).then(results => this.setState({ films: results }))
        }

        if (prevState.query !== this.state.query) {

            const query = this.state.query;
            this.onQueryChange(query)
            apiMovies
                .fetchMovieByQuery(query).then(results => this.setState({ films: results }))
        }
    }

    render() {
        const { films, query } = this.state;

        return (
            <>
                <Route path={`${this.props.match.path}/query=${query}`} component={MoviesList} />
                <SearchForm onSubmit={this.onSubmitForm} />
                <MoviesList films={films} />
            </>
        )
    }
}

export default MoviesPage;

