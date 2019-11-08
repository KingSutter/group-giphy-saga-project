import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList,GridListTile } from '@material-ui/core';
import { Link } from 'react-router-dom'
import SearchItem from '../SearchItem/SearchItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

    function* columnsGen() {
      yield 1;
      yield 2;
      yield 1;
      yield 1;

      yield 1;
      yield 1;
      yield 2;
      yield 1;

      yield 2;
      yield 1;
      yield 1;
      yield 1;

      yield 1;
      yield 1;
      yield 1;
      yield 2;
    }

    return (
      <div>    
        <TextField value={this.state.newSearch} onChange={this.handleChange} />
        <Button variant="contained" onClick={this.searchGiphy}>Search GIPHY</Button>

        <GridList
           cols={5}
          >
              {this.props.reduxStore.searchReducer.data && 
              this.props.reduxStore.searchReducer.data.map((image) => (
                  <GridListTile
                  key={image.id}
                  item
                  sm={3}
                  cols={columnsGen()}
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