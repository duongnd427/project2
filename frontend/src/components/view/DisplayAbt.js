import React, { Component } from 'react';

export default class DisplayAbt extends Component {
    render() {
        var display;
        if (((this.props.data.status != 'Chờ xử lý') && this.props.cmnd != '111') || ((this.props.data.status == 'Đang xử lý') && (this.props.cmnd !='111')) || this.props.data.status == 'Đã xử lý') {
            display = <div>
                <form className='col-8 d-flex flex-wrap:wrap'>
                    <div className='float-left'>
                        <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                        <h3>Độc lập - Tự do - Hạnh phúc</h3>
                        <h1>------------</h1>
                        <h3>PHIẾU KHAI BÁO TẠM VẮNG </h3>
                        <h4>Kính gửi: Công an phường/xã/thị trấn {this.props.data.wardp}</h4>
                        <div>Họ và tên: {this.props.data.name}</div>
                        <div>Ngày, tháng, năm sinh: {this.props.data.dateOfBirth} Giới tính: {this.props.data.sex} Quốc tịch: {this.props.data.nationality}</div>
                        <div>CMND số: {this.props.data.CMND}  Hộ chiếu số: {this.props.data.passport}</div>
                        <div>Nơi thường trú/ tạm trú: {this.props.data.province} - {this.props.data.district} - {this.props.data.ward}</div>
                        <div>Tạm vắng từ ngày, tháng, năm: {this.props.data.dateStart} đến ngày {this.props.data.dateEnd}</div>
                        <div>Lý do tạm vắng:{this.props.data.reason}</div>
                        <div>Nơi đến: {this.props.data.provinceIn} - {this.props.data.districtIn} - {this.props.data.wardIn}</div>
                    </div>
                    <div className='float-right'>
                        <div className='text-light text-center bg-warning rounded'>{this.props.data.status}</div>
                        {/* <button class='button' className="btn btn-info fixed" type="submit">Sửa thông tin đăng ký</button> */}
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