import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

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
        
        <input value={this.state.newSearch} onChange={this.handleChange} />
        <button onClick={this.searchGiphy}>Search GIPHY</button>

        <ul>GIPHY Search List: 
          {this.props.reduxStore.map((gif) =>{return(<li key ={gif.id}>
              <img src={this.props.reduxStore.search} alt="searched gif"></img>
              </li>)})}
          </ul>
        
        <pre>{JSON.stringify(this.props,null,2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);