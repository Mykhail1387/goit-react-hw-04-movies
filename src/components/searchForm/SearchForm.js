import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import styles from './searchForm.module.css';

class SearchForm extends Component {
    state = {
        name: ''
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({ ...this.state })

        this.reset()
    }

    reset = () => {
        this.setState({
            name: ''
        })
    }

    render() {
        const { name } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        autoComplete="off"
                        autoFocus
                        onChange={this.handleChange}
                        placeholder="Search movies"
                        className={styles.input}

                    />
                    <button type="submit">Search</button>
                </form>
            </>
        )
    }
}

export default withRouter(SearchForm);

