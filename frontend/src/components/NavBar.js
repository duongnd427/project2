import React, { Component } from 'react';

import Profile from './Profile';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                <Profile/>
                </div>
            </div>
        );
    }
}

export default NavBar;