import React, { Component } from 'react';
// import axios from 'axios'

// import {URL} from '../config'
import Profile from './Profile';
import Search from './Search';

class NavBar extends Component {
    state = {};

    render() {
        return (
            <div className="navbar">
                <div className="container"> {/*fixed-top*/}
                    <Search onSearching={this.props.onSearching} />
                    <Profile name={this.props.name} />
                </div>
            </div>
        );
    }
}

export default NavBar;