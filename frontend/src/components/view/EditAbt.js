import React, { Component } from 'react';
import axios from 'axios';

class EditAbt extends Component {
    state = {};

    _getInfor = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
        this._getInfor = this._getInfor.bind(this);
    }

    editAbtsent = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
        .put(`http://localhost:1010/api/absent`, {
            idabsent: this.props.data.idabsent,
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
        console.log(this.props.data)
        var display;
        if(this.props.data.status === 'waiting') {
            display = <div>
                <form onSubmit={this.editAbtsent}>
                <div className='col-8 d-flex flex-wrap:wrap'>
                    <div className='float-left'>
                    <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                    <h3>Độc lập - Tự do - Hạnh phúc</h3>
                    <h1>------------</h1>
                    <h3>PHIẾU KHAI BÁO TẠM VẮNG </h3>
                    <h4>Kính gửi: Công an phường/xã/thị trấn <input onChange={this._getInfor} type="text" name="ward" defaultValue={this.props.data.ward}/></h4>
                    <div>Họ và tên: <input onChange={this._getInfor} type="text" name='name' defaultValue={this.props.data.name} /></div>
                    <div>Ngày, tháng, năm sinh: <input onChange={this._getInfor} type="date" name='dateOfBirth' defaultValue={this.props.data.dateOfBirth} /> Giới tính: <input onChange={this._getInfor} type='text' name='sex' defaultValue={this.props.data.sex} /> Quốc tịch: <input onChange={this._getInfor} type='text' name='nationality' defaultValue={this.props.data.nationality} /></div>
                    <div>CMND số: <input onChange={this._getInfor} type="number" name='CMND' defaultValue={this.props.data.CMND} /> Hộ chiếu số: <input onChange={this._getInfor} type='number' name='passport' defaultValue={this.props.data.passport} /></div>
                    <div>Nơi thường trú/ tạm trú: <input onChange={this._getInfor} type="text" name='shelter' defaultValue={this.props.data.shelter} /></div>
                    <div>Tạm vắng từ ngày, tháng, năm: <input onChange={this._getInfor} type='date' name='dateStart' defaultValue={this.props.data.dateStart} /> đến ngày <input onChange={this._getInfor} type='date' name='dateEnd' defaultValue={this.props.data.dateEnd} /> </div>
                    <div>Lý do tạm vắng và nơi đến: <textarea onChange={this._getInfor} name='reason' defaultValue={this.props.data.reason} /> </div>
                    </div>
                    <div className='float-right'>
                        <div className='text-light text-center bg-warning rounded'>{this.props.data.status}</div>
                        <button class='button' className="btn btn-info fixed" type="submit">Sửa đăng ký</button>
                    </div>
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

export default EditAbt;