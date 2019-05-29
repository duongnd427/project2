import React, { Component } from 'react';
import axios from 'axios';
// import { URL } from '..../config';
// import '..../App.css'


class Absent extends Component {
    state = {};

    _getInfor = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    
    newAbsent = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .post(`http://localhost:1010/api/absent`, {
                ward: this.state.ward,
                name: this.state.name,
                dateOfBirth: this.state.dateOfBirth,
                sex: this.state.sex,
                nationality: this.state.nationality,
                CMND: this.state.CMND,
                passport: this.state.passport,
                shelter: this.state.shelter,
                dateStart: this.state.dateStart,
                dateEnd: this.state.dateEnd,
                reason: this.state.reason,
            }, {
                    validateStatus: (status) => {
                        return status >= 200 && status < 500
                    }
                })
            .then(res => {
                if (res.data.success === 0) {
                    alert('Bạn chưa nhập đủ thông tin đăng ký đơn')                   
                } else {
                    console.log('tam vang thanh cong')                    
                    window.location.href = '/viewabt'
                }
                    
            })
            .catch(err => console.error(err))
    }

    render() {
        // const dis = (this.props.cmnd)
        return (
            <div>
                <form onSubmit={this.newAbsent}>
                    <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                    <h3>Độc lập - Tự do - Hạnh phúc</h3>
                    <h1>------------</h1>
                    <h3>PHIẾU KHAI BÁO TẠM VẮNG </h3>
                    <h4>Kính gửi: Công an phường/xã/thị trấn <input onChange={this._getInfor} type="text" name="ward" /></h4>
                    <div>Họ và tên: <input onChange={this._getInfor} type="text" name='name' /></div>
                    <div>Ngày, tháng, năm sinh: <input onChange={this._getInfor} type="date" name='dateOfBirth' /> Giới tính: <input onChange={this._getInfor} type='text' name='sex' /> Quốc tịch: <input onChange={this._getInfor} type='text' name='nationality' /></div>
                    <div>CMND số: <input onChange={this._getInfor} type="number" name='CMND' /> Hộ chiếu số: <input onChange={this._getInfor} type='number' name='passport' /></div>
                    <div>Nơi thường trú/ tạm trú: <input onChange={this._getInfor} type="text" name='shelter' /></div>
                    <div>Tạm vắng từ ngày, tháng, năm: <input onChange={this._getInfor} type='date' name='dateStart' /> đến ngày <input onChange={this._getInfor} type='date' name='dateEnd' /> </div>
                    <div>Lý do tạm vắng và nơi đến: <textarea onChange={this._getInfor} name='reason' /> </div>
                    <button class='button' className="btn btn-info fixed" type="submit" >Gửi</button>
                </form>
            </div>
        );
    }
}

export default Absent;