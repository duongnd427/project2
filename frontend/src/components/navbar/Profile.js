import axios from 'axios';
import React, { Component } from 'react'

import { URL } from '../../config';

export default class Profile extends Component {

    logOut = () => {
        axios
            .get(`${URL}/api/log/logout`)
            .then(res => {
                console.log(res.data)
                window.location.href = '/'
            })
            .catch(err => console.error(err))
    }

    render() {

        return (
            <div className="container col-6">
                <div>
                    <div class='navbar-text'>Xin chào, {this.props.name}</div>
                    <div class='logout'>
                        <button className='btn btn-success' onClick={this.logOut} >Đăng xuất</button>
                    </div>
                </div>
            </div>
        )
    }
}

// export default Profile;