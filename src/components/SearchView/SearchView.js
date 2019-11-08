import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList,GridListTile } from '@material-ui/core';
import { Link } from 'react-router-dom'
import SearchItem from '../SearchItem/SearchItem';

class App extends Component {
    state = {
        newSearch: '',
    }

  componentDidMount() {
    this.searchGiphy()
  }

  handleChange = (event) => {
    this.setState({
        newSearch: event.target.value,
    });
  }

  searchGiphy = () => {
      this.props.dispatch({type: 'GET_SEARCH', payload: this.state.newSearch})
      this.setState({
          newSearch: '',
      });

  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Search Giphy API</h1>
        </header>
        <Link to="/FavoritesList">Favorites</Link>
        
        <input value={this.state.newSearch} onChange={this.handleChange} />
        <button onClick={this.searchGiphy}>Search GIPHY</button>

        <GridList
           cols={3}
          >
              {this.props.reduxStore.searchReducer.data && 
              this.props.reduxStore.searchReducer.data.map((image) => (
                  <GridListTile
                  key={image.id}
                  item
                  sm={3}
                  >
                     <SearchItem image={image}/>
                  </GridListTile>
              ))}
          </GridList>
        
        {/* <pre>{JSON.stringify(this.props,null,2)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);