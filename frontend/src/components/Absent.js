import React, { Component } from 'react';
import axios from 'axios';

class Absent extends Component {
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
    }

    newAbsent = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .post(`http://localhost:1010/api/absent`, {
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
        let prlist = this.state.provinces;
        let prslt = this.state.provinces.filter(pro => pro.name.includes(this.prselected.value))
        let dilist = this.state.districts.filter(dis => dis.matp.includes(prslt[0].matp))
        let dislt = this.state.districts.filter(dis => dis.name.includes(this.diselected.value))
        let wdlist = this.state.wards.filter(wd => wd.maqh.includes(dislt[0].maqh))

        let prlistIn = this.state.provinces;
        let prsltIn = this.state.provinces.filter(pro => pro.name.includes(this.prselectedIn.value))
        let dilistIn = this.state.districts.filter(dis => dis.matp.includes(prsltIn[0].matp))
        let disltIn = this.state.districts.filter(dis => dis.name.includes(this.diselectedIn.value))
        let wdlistIn = this.state.wards.filter(wd => wd.maqh.includes(disltIn[0].maqh))
        return (
            <div>
                <form onSubmit={this.newAbsent}>
                    <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                    <h3>Độc lập - Tự do - Hạnh phúc</h3>
                    <h1>------------</h1>
                    <h3>PHIẾU KHAI BÁO TẠM VẮNG </h3>
                    <h4>Kính gửi: Công an phường/xã/thị trấn <input onChange={this._getInfor} type="text" name="wardp" /></h4>
                    <div>Họ và tên: <input onChange={this._getInfor} type="text" name='name' /></div>
                    <div>Ngày, tháng, năm sinh: <input onChange={this._getInfor} type="date" name='dateOfBirth' /> Giới tính: <input onChange={this._getInfor} type='text' name='sex' /> Quốc tịch: <input onChange={this._getInfor} type='text' name='nationality' /></div>
                    <div>CMND số: <input onChange={this._getInfor} type="number" name='CMND' /> Hộ chiếu số: <input onChange={this._getInfor} type='number' name='passport' /></div>
                    <div>Nơi thường trú/ tạm trú: 
                        <div>Tỉnh</div>
                        <select onChange={this._getInfor} name='province' ref = {(input)=> this.prselected = input} onClick={this.getDistricts} >
                            {prlist.map((pro) => <option key={pro.matp} value={pro.name}>{pro.name}</option>)}
                        </select>
                        <div>Huyện/ thị trấn</div>
                        <select onChange={this._getInfor} name='district' ref = {(input)=> this.diselected = input} onClick={this.getWards} >
                            {dilist.map((di) => <option key={di.maqh} value={di.name}>{di.name}</option>)}
                        </select>
                        <div>Xã/ phường</div>
                        <select onChange={this._getInfor} name='ward' ref = {(input)=> this.wdselected = input} >
                            {wdlist.map((wd) => <option key={wd.xaid} value={wd.name}>{wd.name}</option>)}
                        </select>
                    </div>
                    <div>Tạm vắng từ ngày, tháng, năm: <input onChange={this._getInfor} type='date' name='dateStart' /> đến ngày <input onChange={this._getInfor} type='date' name='dateEnd' /> </div>
                    <div>Lý do tạm vắng <textarea onChange={this._getInfor} name='reason' /> </div>
                    <div>Nơi đến: 
                    <div>Tỉnh</div>
                        <select onChange={this._getInfor} name='provinceIn' ref={(input) => this.prselectedIn = input} onClick={this.getDistricts} >
                            {prlistIn.map((pro) => <option key={pro.matp} value={pro.name}>{pro.name}</option>)}
                        </select>
                        <div>Huyện/ thị trấn</div>
                        <select onChange={this._getInfor} name='districtIn' ref={(input) => this.diselectedIn = input} onClick={this.getWards} >
                            {dilistIn.map((di) => <option key={di.maqh} value={di.name}>{di.name}</option>)}
                        </select>
                        <div>Xã/ phường</div>
                        <select onChange={this._getInfor} name='wardIn' ref={(input) => this.wdselectedIn = input} >
                            {wdlistIn.map((wd) => <option key={wd.xaid} value={wd.name}>{wd.name}</option>)}
                        </select>
                    </div>
                    <button class='button' className="btn btn-info fixed" type="submit" >Gửi</button>
                </form>
            </div >
        );
    }
}

export default Absent;