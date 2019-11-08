import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList,GridListTile } from '@material-ui/core';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

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
          <>
          <GridList
          cellHeight={160} cols={4}
          >
              {this.props.reduxState.favoritesReducer.map((image) => (
                  <GridListTile
                  key={image.id}
                  item
                  sm={3}>
                    <FavoritesItem image={image}/>
                  </GridListTile>
              ))}
          </GridList>
              {/* <pre>{JSON.stringify(this.props,null,2)}</pre> */}
          </>
      );
  }
  }

export default connect(mapStateToProps)(FavoritesList);

