import React, { Component } from 'react';
import axios from 'axios';

class EditAbt extends Component {
    state = {
        provinces: [],
        districts: [],
        wards: []
    };

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
                wardp: this.state.wardp,
                name: this.state.name,
                dateOfBirth: this.state.dateOfBirth,
                sex: this.state.sex,
                nationality: this.state.nationality,
                CMND: this.state.CMND,
                passport: this.state.passport,
                province: this.state.province,
                district: this.state.district,
                ward: this.state.ward,
                provinceIn: this.state.provinceIn,
                districtIn: this.state.districtIn,
                wardIn: this.state.wardIn,
                dateStart: this.state.dateStart,
                dateEnd: this.state.dateEnd,
                reason: this.state.reason,
                status: this.state.status
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
        window.location.href = '/viewabt'
    }

    componentDidMount = (e) => {
        axios
            .get(`http://localhost:1010/api/provinces`)
            .then(res => {
                this.setState({
                    provinces: res.data
                })
            })
    }

    getDistricts = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .get(`http://localhost:1010/api/districts`)
            .then(res => {
                this.setState({
                    districts: res.data
                })
            })
    }

    getWards = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .get(`http://localhost:1010/api/wards`)
            .then(res => {
                this.setState({
                    wards: res.data
                })
            })
    }

    render() {
        var display;
        if ((this.props.cmnd != '111') && (this.props.data.status == 'Chờ xử lý')) {
            let prlist = this.state.provinces;
            let prslt = this.state.provinces.filter(pro => pro.name.includes(this.prselected.value))
            let dilist = this.state.districts.filter(dis => dis.matp.includes(prslt[0].matp))
            let dislt = this.state.districts.filter(dis => dis.name.includes(this.diselected.value))
            let wdlist = this.state.wards.filter(wd => wd.maqh.includes(dislt[0].maqh))

            let prlistIn = this.state.provinces;
            let prsltIn = this.state.provinces.filter(pro => pro.name.includes(this.prselectedIn.value));
            let dilistIn = this.state.districts.filter(dis => dis.matp.includes(prsltIn[0].matp))
            let disltIn = this.state.districts.filter(dis => dis.name.includes(this.diselectedIn.value))
            let wdlistIn = this.state.wards.filter(wd => wd.maqh.includes(disltIn[0].maqh))
            display = <div>
                <form onSubmit={this.editAbtsent}>
                    <div className='col-8 d-flex flex-wrap:wrap'>
                        <div className='float-left'>
                            <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                            <h3>Độc lập - Tự do - Hạnh phúc</h3>
                            <h1>------------</h1>
                            <h3>PHIẾU KHAI BÁO TẠM VẮNG </h3>
                            <h4>Kính gửi: Công an phường/xã/thị trấn <input onChange={this._getInfor} type="text" name="wardp" defaultValue={this.props.data.wardp} /></h4>
                            <div>Họ và tên: <input onChange={this._getInfor} type="text" name='name' defaultValue={this.props.data.name} /></div>
                            <div>Ngày, tháng, năm sinh: <input onChange={this._getInfor} type="date" name='dateOfBirth' defaultValue={this.props.data.dateOfBirth} /> Giới tính: <input onChange={this._getInfor} type='text' name='sex' defaultValue={this.props.data.sex} /> Quốc tịch: <input onChange={this._getInfor} type='text' name='nationality' defaultValue={this.props.data.nationality} /></div>
                            <div>CMND số: <input onChange={this._getInfor} type="number" name='CMND' defaultValue={this.props.data.CMND} /> Hộ chiếu số: <input onChange={this._getInfor} type='number' name='passport' defaultValue={this.props.data.passport} /></div>
                            <div>Nơi thường trú/ tạm trú:
                <div>Tỉnh</div>
                                <select onChange={this._getInfor} name='province' ref={(input) => this.prselected = input} onClick={this.getDistricts} >
                                    <option selected>{this.props.data.province}</option>
                                    {prlist.map((pro) => <option key={pro.matp} value={pro.name}>{pro.name}</option>)}
                                </select>
                                <div>Huyện/ thị trấn</div>
                                <select onChange={this._getInfor} name='district' ref={(input) => this.diselected = input} onClick={this.getWards} >
                                    <option selected>{this.props.data.district}</option>
                                    {dilist.map((di) => <option key={di.maqh} value={di.name}>{di.name}</option>)}
                                </select>
                                <div>Xã/ phường</div>
                                <select onChange={this._getInfor} name='ward' ref={(input) => this.wdselected = input} >
                                    <option selected>{this.props.data.ward}</option>
                                    {wdlist.map((wd) => <option key={wd.xaid} value={wd.name}>{wd.name}</option>)}
                                </select>
                            </div>
                            <div>Tạm vắng từ ngày, tháng, năm: <input onChange={this._getInfor} type='date' name='dateStart' defaultValue={this.props.data.dateStart} /> đến ngày <input onChange={this._getInfor} type='date' name='dateEnd' defaultValue={this.props.data.dateEnd} /> </div>
                            <div>Lý do tạm vắng: <textarea onChange={this._getInfor} name='reason' defaultValue={this.props.data.reason} /> </div>
                            <div>Nơi đến:</div>
                            <div>Tỉnh</div>
                            <select onChange={this._getInfor} name='provinceIn' ref={(input) => this.prselectedIn = input} onClick={this.getDistricts} >
                                {prlistIn.map((pro) => <option key={pro.matp} value={pro.name}>{pro.name}</option>)}
                                <option selected>{this.props.data.provinceIn}</option>
                            </select>
                            <div>Huyện/ thị trấn</div>
                            <select onChange={this._getInfor} name='districtIn' ref={(input) => this.diselectedIn = input} onClick={this.getWards} >
                                {dilistIn.map((di) => <option key={di.maqh} value={di.name}>{di.name}</option>)}
                                <option selected>{this.props.data.districtIn}</option>
                            </select>
                            <div>Xã/ phường</div>
                            <select onChange={this._getInfor} name='wardIn' ref={(input) => this.wdselectedIn = input} >
                                {wdlistIn.map((wd) => <option key={wd.xaid} value={wd.name}>{wd.name}</option>)}
                                <option selected>{this.props.data.wardIn}</option>
                            </select>
                        </div>
                        <div className='float-right'>
                            <div className='text-light text-center bg-warning rounded'>{this.props.data.status}</div>
                            <button class='button' className="btn btn-info fixed" type="submit">Sửa đăng ký</button>
                        </div>
                    </div>
                </form>
                <hr />
            </div>
        } else if (this.props.cmnd == '111') {
            display = <div>
                <form onSubmit={this.editAbtsent}>
                    <div className='col-8 d-flex flex-wrap:wrap'>
                        <div className='float-left'>
                            <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                            <h3>Độc lập - Tự do - Hạnh phúc</h3>
                            <h1>------------</h1>
                            <h3>PHIẾU KHAI BÁO TẠM VẮNG </h3>
                            <h4>Kính gửi: Công an phường/xã/thị trấn {this.props.data.wardp}</h4>
                            <div>Họ và tên: {this.props.data.name}</div>
                            <div>Ngày, tháng, năm sinh:{this.props.data.dateOfBirth}  Giới tính: {this.props.data.sex} Quốc tịch: {this.props.data.nationality} </div>
                            <div>CMND số: {this.props.data.CMND} Hộ chiếu số:{this.props.data.passport} </div>
                            <div>Nơi thường trú/ tạm trú:{this.props.data.province} - {this.props.data.district} - {this.props.data.ward}
                            </div>
                            <div>Tạm vắng từ ngày, tháng, năm: {this.props.data.dateStart} đến ngày {this.props.data.dateEnd} </div>
                            <div>Lý do tạm vắng: {this.props.data.reason} </div>
                            <div>Nơi đến: {this.props.data.province} - {this.props.data.district} - {this.props.data.ward}</div>
                        </div>
                        <div className='float-right'>
                            <select onChange={this._getInfor} name='status' ref={(input) => this.wdselectedIn = input} >
                                <option selected>{this.props.data.status}</option>
                                <option value='Đang xử lý'>Đang xử lý</option>
                                <option value='Đã xử lý'>Đã xử lý</option>
                            </select>
                            {/* <button class='button' className="btn btn-info fixed" type="submit">Sửa đăng ký</button> */}
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