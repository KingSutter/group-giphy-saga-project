import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {connect} from 'react-redux';

class  SimpleMenu extends Component {
  state = {
    menuOpen: false,
  }

  componentDidMount(){
    this.getCategories();
  }

  // opens menu
  toggleMenuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
    // this.props.toggleState();
  }

  onMenuSelect = (favorite_id,category_id) => {
    // send id to redux state
    this.props.dispatch({type: 'PUT_FAVORITES', payload: {favoriteId: favorite_id, categoryId: category_id}});
    // close menu
    this.props.toggleMenu()
  }

  // gets categories from saga 
  getCategories = () => {
    this.props.dispatch({type: 'GET_CATEGORIES'})
  }
  
  render(){
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.toggleMenuOpen}>
        Set Catagory
      </Button>
      <Menu
        id="simple-menu"
        open={this.state.menuOpen}
        keepMounted
      >
        {this.props.categories.map((category) => (
          <MenuItem onClick={() => this.onMenuSelect(this.props.id, category.id)}>{category.name}</MenuItem>
        ))}
        
      </Menu>
    </div>
  );
  }
}
const mapReduxStateToProps = (reduxState) => {
  return {categories: reduxState.categoriesReducer }
}

export default connect(mapReduxStateToProps)(SimpleMenu);