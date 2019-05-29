import axios from 'axios';
import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

import { URL } from '../config';

export default class Profile extends Component {

    logOut = () => {
        axios
            .get(`${URL}/api/log/logout`)
            .then(res => {
                console.log(res.data)
                window.location.href='/'
            })
            .catch(err => console.error(err))
    }

    render() {

        return (
            <div className="profile-panel float-md-right">
                <div>
                    <span className='navbar-text text-warning mx-auto'>Welcome, {this.props.name}</span>
                    <button className='btn btn-success' onClick={this.logOut} >Đăng xuất</button>
                </div>
            </div>
        )
    }
}

// export default Profile;