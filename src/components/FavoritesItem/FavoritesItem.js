import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoritesList from '../FavoritesList/FavoritesList'

class FavoritesItem extends Component {
    render() {
        return (
            <>
            <a href={image.url} /><img src={image.image_original_url} alt={image.title}/>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(FavoritesItem);