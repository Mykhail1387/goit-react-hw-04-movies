import React, { Component } from 'react';
import ReviewsComponent from '../../components/reviews/Reviews';
import * as apiMovies from '../../services/apiMovies';


const getIdFromProps = props => props.match.params.movieId;

class Reviews extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        const id = getIdFromProps(this.props)
        apiMovies.getReviews(id).then(reviews => this.setState({ reviews }))
    }

    render() {
        const { reviews } = this.state;
        return (
            <>
                <ReviewsComponent onReviews={reviews} />
            </>
        )
    }
}

export default Reviews;

