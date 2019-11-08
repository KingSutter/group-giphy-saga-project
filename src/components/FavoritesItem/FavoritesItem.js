import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectCatagory from './SelectCategory/SelectCategory';
import {withRouter} from 'react-router-dom'

class FavoritesItem extends Component {
    state = {
        menuOpened: false,
    }
    // opens or closes menu based on conditional rendering below
    toggleMenu = () => {
        this.setState({
            menuOpened: !this.state.menuOpened,
        })
    }
    render() {
        return (
            <>
                {!this.state.menuOpened 
                ? (<img src={this.props.image.url} alt={this.props.image.title} onClick={this.toggleMenu}/>)
                : (<SelectCatagory id={this.props.image.id} toggleMenu={this.toggleMenu}/>)}
                {/* {JSON.stringify(this.state,null,2)} */}
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(FavoritesItem);