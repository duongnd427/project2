import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Indwell from './Indwell/Indwell'

class Act extends Component {


    render() {
        return (
            <div class='act'>
                <Link to='/indwell'><button className='btn btn-danger'>Đăng kí tạm trú</button></Link>              
                {/* <Link to='/indwell'><button className='btn btn-danger'>Đăng kí tạm trú dài hạn</button></Link>               */}
                <Link to='/absent'><button className='btn btn-danger'>Khai báo tạm vắng</button></Link>                  
                <Link to='/view'><button className='btn btn-danger'>Các đơn đã đăng ký</button></Link>             
            </div>
        );
    }
}

export default Act;