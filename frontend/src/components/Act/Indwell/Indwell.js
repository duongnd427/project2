import React, { Component } from 'react';
import axios from 'axios';
// import { URL } from '..../config';
// import '..../App.css'


class Indwell extends Component {
    state = {};

    newIndwell = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:1010/api/indwell`, {
                ward: this.state.ward,
                name: this.state.name,
                dateOfBirth: this.state.dateOfBirth,
                CMND: this.state.CMND,
                dateAllocated: this.state.dateAllocated,
                placeAllocated: this.state.placeAllocated,
                resident: this.state.resident,
                dateStart: this.state.dateStart,
                dateEnd: this.state.dateEnd,
                reason: this.state.reason
            }, {
                    validateStatus: (status) => {
                        return status >= 200 && status < 500
                    }
                })
            .then(res => {
                if (res.data.success === 1) {
                    alert('Gửi đăng ký thành công')
                    this.setState({ data: res.data })
                } else
                    alert('Bạn chưa nhập đủ thông tin đăng ký đơn')
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.newIndwell}>
                    <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                    <h3>Độc lập - Tự do - Hạnh phúc</h3>
                    <h1>------------</h1>
                    <h3>ĐƠN XIN XÁC NHẬN TẠM TRÚ </h3>
                    <h4>Kính gửi: Công an phường/xã/thị trấn <input type="text" name="ward" /></h4>
                    <div>Tên tôi là: <input type="text" name='name' /></div>
                    <div>Ngày sinh: <input type="date" name='dateOfBirth' /></div>
                    <div>Số CMND: <input type="number" name='CMND' /></div>
                    <div>Ngày cấp: <input type="date" name='dateAllocated' /></div>
                    <div>Nơi cấp: <input type="text" name='placeAllocated' /></div>
                    <div>Hộ khẩu thường trú tại: <input type="text" name='resident' /></div>
                    <div>Nay tôi làm đơn này kính xin Ban Công an xã/phường/thị trấn cho tôi được đăng ký tạm trú tại <input
                        type="text" name='shelter' /></div>
                    <div>Từ ngày<input type="date" name='dateStart' /> đến ngày <input type="date" name='dateEnd' /></div>
                    <div>Lý do <textarea name="reason"></textarea></div>
                    <div>Trong thời gian ở địa phương tôi xin hứa thực hiện tốt các nội quy, quy định về an ninh trật tự của
                    địa phương.Nếu tôi vi phạm tôi xin chịu hoàn toàn trách nhiệm.</div>
                    <div>Tôi xin chân thành cảm ơn!</div>
                    <div>Ngày.....tháng.....năm.......</div>
                    <button class='button' className="btn btn-info fixed" type="submit">Gửi</button>
                </form>
            </div>
        );
    }
}

export default Indwell;