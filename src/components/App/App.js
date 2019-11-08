import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import FavoritesList from '../FavoritesList/FavoritesList'
import SearchView from '../SearchView/SearchView'


class App extends Component {

  render() {
    return (
      <Router>
      <div>
      <Route path="/" exact component={SearchView} />
      <Route path="/FavoritesList" component={FavoritesList} />
      </div>
      </Router>
    );
  }
  
}

export default App;
