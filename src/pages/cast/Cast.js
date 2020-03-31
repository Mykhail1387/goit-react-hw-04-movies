import React, { Component } from 'react';
import CastComponent from '../../components/cast/Cast';
import * as apiMovies from '../../services/apiMovies';

const getIdFromProps = props => props.match.params.movieId;

class Cast extends Component {

    state = {
        credits: null,
    }

    componentDidMount() {
        const id = getIdFromProps(this.props)
        apiMovies.getCredits(id).then(credits => this.setState({ credits }))
    }

    render() {
        const { credits } = this.state

        return (
            <>
                <CastComponent {...credits} />
            </>
        )
    }
}

export default Cast;