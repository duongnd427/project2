import React, { Component } from 'react';
import Indwell from './Indwell/Indwell'

import { Link } from 'react-router-dom'


class Act extends Component {


    render() {
        return (
            <div class='act'>                
                <a href='/indwell' class='button'>Đăng ký tạm trú</a>
                {/* <a href='/indwell'class='button'>Đăng ký tạm trú dài hạn</a> */}
                <a href='/absent' class='button'>Khai báo tạm vắng</a>
                <a href='/view' class='button'>Đơn đã đăng ký</a>
            </div>
        );
    }
}

export default Act;