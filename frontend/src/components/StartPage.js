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
            [name]: value
        })
    }

    signUp = (e) => {
        e.preventDefault();
        axios
            .post(`${URL}/api/users`, {
                cmnd: this.state.cmnd,
                name: this.state.name,
                password: this.state.password,
                repassword: this.state.repassword
            }, {
                    validateStatus: (status) => {
                        return status >= 200 && status < 500
                    }
                })
            .then(response => {
                if (response.data.success === 1) {
                    alert('Đăng ký tài khoản thành công')
                    this.setState({ data: response.data })
                    // this.setState({
                    //     name: res.data.user[0].name
                    // }               
                } else if (response.data.success === -1) {
                    alert('Sai hoặc thiếu thông tin đăng ký')
                }
                else {
                    alert('Số điện thoại đã được đăng ký')
                }
            })
            .catch(err => console.error(err))
    }

    logIn = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .post(`${URL}/api/log/login`, {
                cmnd: this.state.cmndL,
                password: this.state.passwordL
            }, {
                    validateStatus: (status) => {
                        return status >= 200 & status < 500
                    }
                })
            .then(response => {
                if (response.data.success === 1) {
                    this.setState({ data: response.data })
                    // console.log(response.data)
                    window.location.href = '/'
                    // alert('dang nhap thanh cong')
                }
                else alert('Sai tài khoản')
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
                            <div>Số CMND <input onChange={this._getUser} name='cmndL' type='text' /></div>
                            <div>Mật khẩu <input onChange={this._getUser} name='passwordL' type='password' /></div>
                        </div>
                        <div class='button'><button className='btn btn-primary' type='submit'>Đăng nhập</button></div>
                    </form>
                </div>
                <div class='signup'>
                    <form onSubmit={this.signUp}>
                        <p class='formgr'>Số CMND</p><input onChange={this._getUser} name="cmnd" type="text" />
                        <p class='formgr'>Họ tên</p><input onChange={this._getUser} name="name" type="text" />
                        <p class='formgr'>Mật khẩu</p><input onChange={this._getUser} name="password" type='password' />
                        <p class='formgr'>Nhập lại mật khẩu</p><input onChange={this._getUser} name="repassword" type='password' />
                        <div class='button'><button className="btn btn-info fixed" type="submit">Đăng ký</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

// export default HomePage;