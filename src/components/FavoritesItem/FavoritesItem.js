import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoritesItem extends Component {
    render() {
        return (
            <>
            <a href={this.props.image.url}>
                <img src={this.props.image.url} alt={this.props.image.title}/>
            </a>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(FavoritesItem);