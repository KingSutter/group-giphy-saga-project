import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList } from '@material-ui/core';

const mapStateToProps = reduxState => ({
    reduxState,
});

class FavoritesList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.props.dispatch({type: 'GET_FAVORITES'})
    }

    render() {
        return (
            <GridList
            cellHeight={160} className={classes.gridList} cols={3}
            >
                {this.props.reduxState.favoritesList.map((image) => (
                    <GridListTile
                    key={image.id}
                    item
                    sm={3}
                    >x
                       <FavoritesItem></FavoritesItem>
                    </GridListTile>
                ))}
            </GridList>
        );
    }
}

export default connect(mapStateToProps)(FavoritesList);
