import React, { Component } from 'react';
// import axios from 'axios'

// import {URL} from '../config'
import Profile from './Profile';

class NavBar extends Component {
    state = {};
    
    // componentDidMount() {
    //     axios
    //     .get(`${URL}/api/log/login`)
    //     .then(res => {
    //         console.log(res.data)
    //         if(res.data.user) {
    //             this.setState({
    //                 name: res.data.user[0].name
    //             })
    //         }
    //     })
    //     .catch(err => console.log(err))
    // }

    render() {
        return (
            <div class="navbar">
                <div className="container float-md-right">
                <Profile name={this.props.name} />
                </div>
            </div>
        );
    }
}

export default NavBar;