import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import Indwell from './Indwell/Indwell'

class Act extends Component {


    render() {
        var display;
        console.log(this.props.cmnd)
        if (this.props.cmnd == '111') {
            display = <div>
                <Link to='/viewind'><button className='btn btn-danger'>Các đơn tạm trú đã đăng ký</button></Link>
                <Link to='/viewabt'><button className='btn btn-danger'>Các đơn tạm vắng đã đăng ký</button></Link>
            </div>
        }
        else {
            display = <div>
                <Link to='/indwell'><button className='btn btn-danger'>Đăng kí tạm trú</button></Link>
                <Link to='/absent'><button className='btn btn-danger'>Khai báo tạm vắng</button></Link>
                <Link to='/viewind'><button className='btn btn-danger'>Các đơn tạm trú đã đăng ký</button></Link>
                <Link to='/viewabt'><button className='btn btn-danger'>Các đơn tạm vắng đã đăng ký</button></Link>
            </div>
        }
        return (
            <div class='act'>
                {display}
            </div>
        );
    }
}

export default Act;