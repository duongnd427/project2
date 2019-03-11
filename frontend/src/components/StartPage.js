import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'

import { URL } from '../config';

export default class StartPage extends Component {
    state = {};

    _getUser = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name] : value
        })
    }

    signUp = (e) => {
        e.preventDefault();
        axios
            .post(`${URL}/api/users`, {
                phone: this.state.phone,
                name: this.state.name,
                password: this.state.password
            }, {
                validateStatus: (status) => {
                    return status >= 200 && status < 500
                }
            })
            .then(response => {
                console.log(response.data.suscuss === 1)
                this.setState({ data:response.data })

                // if ( response.data.suscuss === 1) {
                //     this.props.history.push('/')
                // }
                // else {
                //     alert('Sai tai khoan')
                // }
            })
            .catch(err => console.error(err))
    }

    logIn = (e) => {
        e.preventDefault();
        // axios.defaults.withCredentials = true;
        axios
            .post(`${URL}/api/log/login`, {
                phone: this.state.phone,
                password: this.state.password
            }, {
                validateStatus: (status) => {
                    return status >= 200 & status < 500
                }
            })
            .then(response => {
                this.setState({ data: response.data })
                console.log(response.data)
                if(response.data.success === 1) {
                    window.location.href = '/home'
                    // alert('dang nhap thanh cong')
                }
                else alert ('Sai tai khoan dang nhap')
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div class='startpage'>
                <div class='welcome'>
                    Chào mừng công dân đến với trang đăng ký thường trú, tạm trú, tạm vắng
                    <form class='login' onSubmit={this.logIn}>
                        <div class='logininput'>
                            <div>Số điện thoại <input onChange={this._getUser} name='phone' type='text' /></div>
                            <div>Mật khẩu <input onChange={this._getUser} name='password' type='password' /></div>
                        </div>
                        <div class='button'><button className='btn btn-primary' type='submit'>Đăng nhập</button></div>
                    </form>
                </div>
                <div class='signup'>
                    <form onSubmit={this.signUp}>
                        <p class='formgr'>Số điện thoại</p><input onChange={this._getUser} name="phone" type="text" />
                        <p class='formgr'>Họ tên</p><input onChange={this._getUser} name="name" type="text" />
                        <p class='formgr'>Mật khẩu</p><input onChange={this._getUser} name="password" type='password'/>
                        <div class='button'><button className="btn btn-info fixed" type="submit">Đăng ký</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

// export default HomePage;