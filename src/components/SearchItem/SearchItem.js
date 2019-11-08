import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchItem extends Component {
    render() {
        return (
            <>
            <a href={this.props.image.images.original.url}>
                <img src={this.props.image.images.original.url} alt={this.props.image.title}/>
            </a>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SearchItem);