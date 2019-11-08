import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class  SimpleMenu extends Component {
  state = {
    menuOpen: false,
  }
  toggleMenuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
    this.props.toggleState();
  }
  render(){
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true">
        Set Catagory
      </Button>
      <Menu
        id="simple-menu"
        open={this.handleMenuOpen}
      >
        <MenuItem onClick={this.toggleMenuOpen}>Profile</MenuItem>
        <MenuItem onClick={this.toggleMenuOpen}>My account</MenuItem>
        <MenuItem onClick={this.toggleMenuOpen}>Logout</MenuItem>
      </Menu>
    </div>
  );
  }
}

export default SimpleMenu;