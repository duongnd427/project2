import React, { Component } from 'react';
import axios from 'axios';
// import { URL } from '..../config';
// import '..../App.css'

class Indwell extends Component {
    state = {
        provinces: [],
        districts: []
    };

    _getInfor = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    newIndwell = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .post(`http://localhost:1010/api/indwell`, {
                ward: this.state.ward,
                name: this.state.name,
                dateOfBirth: this.state.dateOfBirth,
                CMND: this.state.CMND,
                dateAllocated: this.state.dateAllocated,
                placeAllocated: this.state.placeAllocated,
                resident: this.state.resident,
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
                // console.log(res.data)
                if (res.data.success === 1) {
                    alert('Gửi đăng ký thành công')
                    this.setState({ data: res.data })
                    console.log(res.data)
                } else
                    alert('Bạn chưa nhập đủ thông tin đăng ký đơn')
            })
            .catch(err => console.error(err))
    }

    componentDidMount = (e) => {
        axios
            .get(`http://localhost:1010/api/provinces`)
            .then (res => {
                    this.setState({
                        provinces : res.data
                    })
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.newIndwell}>
                    <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                    <h3>Độc lập - Tự do - Hạnh phúc</h3>
                    <h1>------------</h1>
                    <h3>ĐƠN XIN XÁC NHẬN TẠM TRÚ </h3>
                    <h4>Kính gửi: Công an phường/xã/thị trấn <input onChange={this._getInfor} type="text" name="ward" /></h4>
                    <div>Tên tôi là: <input onChange={this._getInfor} type="text" name='name' /></div>
                    <div>Ngày sinh: <input onChange={this._getInfor} type="date" name='dateOfBirth' /></div>
                    <div>Số CMND: <input onChange={this._getInfor} type="number" name='CMND' /></div>
                    <div>Ngày cấp: <input onChange={this._getInfor} type="date" name='dateAllocated' /></div>
                    <div>Nơi cấp: <input onChange={this._getInfor} type="text" name='placeAllocated' /></div>
                    <div>Hộ khẩu thường trú tại: <input onChange={this._getInfor} type="text" name='resident' /></div>
                    <div>Nay tôi làm đơn này kính xin Ban Công an xã/phường/thị trấn cho tôi được đăng ký tạm trú tại <input
                        onChange={this._getInfor} type="text" name='shelter' /></div>
                    <div>Từ ngày<input onChange={this._getInfor} type="date" name='dateStart' /> đến ngày <input onChange={this._getInfor} type="date" name='dateEnd' /></div>
                    <div>Lý do <textarea onChange={this._getInfor} name="reason"></textarea></div>
                    <div>Trong thời gian ở địa phương tôi xin hứa thực hiện tốt các nội quy, quy định về an ninh trật tự của
                    địa phương.Nếu tôi vi phạm tôi xin chịu hoàn toàn trách nhiệm.</div>
                    <div>Tôi xin chân thành cảm ơn!</div>
                    <button class='button' className="btn btn-info fixed" type="submit">Gửi</button>
                </form>
            </div>
        );
    }
}

export default Indwell;