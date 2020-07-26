import React, { Component } from 'react';

export default class DisplayInd extends Component {
    render() {
        var display;
        if (((this.props.data.status != 'Chờ xử lý') && this.props.cmnd != '111') || ((this.props.data.status == 'Đang xử lý') && (this.props.cmnd !='111')) || this.props.data.status == 'Đã xử lý') {
            display = <div>
                <form className='col-8 d-flex flex-wrap:wrap margin-top: 1rem'>
                <div className='float-left'>
                    <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                    <h3>Độc lập - Tự do - Hạnh phúc</h3>
                    <h1>------------</h1>
                    <h3>ĐƠN XIN XÁC NHẬN TẠM TRÚ </h3>
                    <h4>Kính gửi: Công an phường/xã/thị trấn {this.props.data.wardp} </h4>
                    <div>Tên tôi là: {this.props.data.name}</div>
                    <div>Ngày sinh: {this.props.data.dateOfBirth}</div>
                    <div>Số CMND: {this.props.data.CMND}</div>
                    <div>Ngày cấp: {this.props.data.dateAllocated} </div>
                    <div>Nơi cấp: {this.props.data.placeAllocated} </div>
                    <div>Hộ khẩu thường trú tại: {this.props.data.province} - {this.props.data.district} - {this.props.data.ward}</div>
                    <div>Nay tôi làm đơn này kính xin Ban Công an xã/phường/thị trấn cho tôi được đăng ký tạm trú tại: {this.props.data.provinceIn} - {this.props.data.districtIn} - {this.props.data.wardIn}</div>
                    <div>Từ ngày {this.props.data.dateStart}  đến ngày {this.props.data.dateEnd} </div>
                    <div>Lý do {this.props.data.reason} </div>
                    <div>Trong thời gian ở địa phương tôi xin hứa thực hiện tốt các nội quy, quy định về an ninh trật tự của
            địa phương.Nếu tôi vi phạm tôi xin chịu hoàn toàn trách nhiệm.</div>
                    <div>Tôi xin chân thành cảm ơn!</div>
                </div>
                <div className='float-right'>
                    <div className='text-light text-center bg-warning rounded'>{this.props.data.status}</div>
                    {/* <Link to='/editind'><button class='button' className="btn btn-info fixed" >Sửa thông tin đăng ký</button></Link> */}
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