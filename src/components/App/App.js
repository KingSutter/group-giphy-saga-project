import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import FavoritesList from '../FavoritesList/FavoritesList'
import SearchView from '../SearchView/SearchView'
import './App.css';


class App extends Component {

  render() {
    return (
      
      <Router>
        <header className="App-header">
          <h1>Giphy Finder</h1>
        </header>
        <ul id="navBar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/FavoritesList">Favorites</Link>
              </li>
        </ul>
      <div>
      <Route path="/" exact component={SearchView} />
      <Route path="/FavoritesList" component={FavoritesList} />
      </div>
      </Router>
    );
  }
  
}

export default App;
