import React, { Component } from 'react';
import axios from 'axios';

class EditInd extends Component {
    state = {};

    _getInfor = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
        this._getInfor = this._getInfor.bind(this);
    }

    editIndwell = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .put(`http://localhost:1010/api/indwell`, {
                idindwell: this.props.data.idindwell,
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
                if (res.data.success === 1) {
                    alert('Gửi đăng ký thành công')
                    this.setState({ data: res.data })
                    console.log(res.data)
                } else
                    alert('Bạn chưa nhập đủ thông tin đăng ký đơn')
            })
            .catch(err => console.error(err))
    }

    render() {
        var display;
        if (this.props.data.status === 'waiting') {
            display = <div>
                <form onSubmit={this.editIndwell}>
                    <div>
                        <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                        <h3>Độc lập - Tự do - Hạnh phúc</h3>
                        <h1>------------</h1>
                        <h3>ĐƠN XIN XÁC NHẬN TẠM TRÚ </h3>
                        <h4>Kính gửi: Công an phường/xã/thị trấn <input onChange={this._getInfor} type="text" name="ward" defaultValue={this.props.data.ward} /></h4>
                        <div>Tên tôi là: <input onChange={this._getInfor} type="text" name='name' defaultValue={this.props.data.name} /></div>
                        <div>Ngày sinh: <input onChange={this._getInfor} type="date" name='dateOfBirth' defaultValue={this.props.data.dateOfBirth} /></div>
                        <div>Số CMND: <input onChange={this._getInfor} type="number" name='CMND' defaultValue={this.props.data.CMND} /></div>
                        <div>Ngày cấp: <input onChange={this._getInfor} type="date" name='dateAllocated' defaultValue={this.props.data.dateAllocated} /></div>
                        <div>Nơi cấp: <input onChange={this._getInfor} type="text" name='placeAllocated' defaultValue={this.props.data.placeAllocated} /></div>
                        <div>Hộ khẩu thường trú tại: <input onChange={this._getInfor} type="text" name='resident' defaultValue={this.props.data.resident} /></div>
                        <div>Nay tôi làm đơn này kính xin Ban Công an xã/phường/thị trấn cho tôi được đăng ký tạm trú tại <input
                            onChange={this._getInfor} type="text" name='shelter' defaultValue={this.props.data.shelter} /></div>
                        <div>Từ ngày<input onChange={this._getInfor} type="date" name='dateStart' defaultValue={this.props.data.dateStart} /> đến ngày <input onChange={this._getInfor} type="date" name='dateEnd' defaultValue={this.props.data.dateEnd} /></div>
                        <div>Lý do <textarea onChange={this._getInfor} name="reason" defaultValue={this.props.data.reason}></textarea></div>
                        <div>Trong thời gian ở địa phương tôi xin hứa thực hiện tốt các nội quy, quy định về an ninh trật tự của
                    địa phương.Nếu tôi vi phạm tôi xin chịu hoàn toàn trách nhiệm.</div>
                        <div>Tôi xin chân thành cảm ơn!</div>
                    </div>
                    <div>
                        <div className='text-light text-center bg-warning rounded'>{this.props.data.status}</div>
                        <button class='button' className="btn btn-info fixed" type="submit">Sửa đăng ký</button>
                    </div>
                </form>
                <hr />
            </div>
        }
        return (
            <div>
                {display}
            </div>
        );
    }
}

export default EditInd;