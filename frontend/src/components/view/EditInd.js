import React, { Component } from 'react';
import axios from 'axios';

class EditInd extends Component {
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

    editIndwell = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .put(`http://localhost:1010/api/indwell`, {
                idindwell: this.props.data.idindwell,
                wardp: this.state.wardp,
                name: this.state.name,
                dateOfBirth: this.state.dateOfBirth,
                CMND: this.state.CMND,
                dateAllocated: this.state.dateAllocated,
                placeAllocated: this.state.placeAllocated,
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
        window.location.href = '/viewind'
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
            let prsltIn = this.state.provinces.filter(pro => pro.name.includes(this.prselectedIn.value))
            let dilistIn = this.state.districts.filter(dis => dis.matp.includes(prsltIn[0].matp))
            let disltIn = this.state.districts.filter(dis => dis.name.includes(this.diselectedIn.value))
            let wdlistIn = this.state.wards.filter(wd => wd.maqh.includes(disltIn[0].maqh))
            display = <div>
                <form onSubmit={this.editIndwell}>
                    <div className='col-8 d-flex flex-wrap:wrap'>
                        <div>
                            <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                            <h3>Độc lập - Tự do - Hạnh phúc</h3>
                            <h1>------------</h1>
                            <h3>ĐƠN XIN XÁC NHẬN TẠM TRÚ </h3>
                            <h4>Kính gửi: Công an phường/xã/thị trấn <input onChange={this._getInfor} type="text" name="wardp" defaultValue={this.props.data.wardp} /></h4>
                            <div>Tên tôi là: <input onChange={this._getInfor} type="text" name='name' defaultValue={this.props.data.name} /></div>
                            <div>Ngày sinh: <input onChange={this._getInfor} type="date" name='dateOfBirth' defaultValue={this.props.data.dateOfBirth} /></div>
                            <div>Số CMND: <input onChange={this._getInfor} type="number" name='CMND' defaultValue={this.props.data.CMND} /></div>
                            <div>Ngày cấp: <input onChange={this._getInfor} type="date" name='dateAllocated' defaultValue={this.props.data.dateAllocated} /></div>
                            <div>Nơi cấp:
                    <select onChange={this._getInfor} name='placeAllocated' ref={(input) => this.placeAllocated = input} >
                                    {prlist.map((pro) => <option key={pro.matp} value={pro.name}>{pro.name}</option>)}
                                    <option selected>{this.props.data.placeAllocated}</option>
                                </select>
                            </div>
                            <div>Hộ khẩu thường trú tại:
                    <div>Tỉnh</div>
                                <select onChange={this._getInfor} name='province' ref={(input) => this.prselected = input} onClick={this.getDistricts}>
                                    {prlist.map((pro) => <option key={pro.matp} value={pro.name}>{pro.name}</option>)}
                                    <option selected>{this.props.data.province}</option>
                                </select>
                                <div>Huyện/ thị trấn</div>
                                <select onChange={this._getInfor} name='district' ref={(input) => this.diselected = input} onClick={this.getWards}>
                                    {dilist.map((di) => <option key={di.maqh} value={di.name}>{di.name}</option>)}
                                    <option selected>{this.props.data.district}</option>
                                </select>
                                <div>Chọn xã/ phường</div>
                                <select onChange={this._getInfor} name='ward' ref={(input) => this.wdselectedIn = input} >
                                    {wdlist.map((wd) => <option key={wd.xaid} value={wd.name}>{wd.name}</option>)}
                                    <option selected>{this.props.data.ward}</option>
                                </select>
                            </div>
                            <div>Nay tôi làm đơn này kính xin Ban Công an xã/phường/thị trấn cho tôi được đăng ký tạm trú tại:
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
                    </div>
                </form>
                <hr />
            </div>
        } else if(this.props.cmnd == '111') {
            display = <div>
                <form onSubmit={this.editIndwell}>
                    <div className='col-8 d-flex flex-wrap:wrap'>
                        <div>
                            <h2>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                            <h3>Độc lập - Tự do - Hạnh phúc</h3>
                            <h1>------------</h1>
                            <h3>ĐƠN XIN XÁC NHẬN TẠM TRÚ </h3>
                            <h4>Kính gửi: Công an phường/xã/thị trấn {this.props.data.wardp}</h4>
                            <div>Tên tôi là:  {this.props.data.name} </div>
                            <div>Ngày sinh: {this.props.data.dateOfBirth} </div>
                            <div>Số CMND: {this.props.data.CMND}</div>
                            <div>Ngày cấp: {this.props.data.dateAllocated} </div>
                            <div>Nơi cấp:{this.props.data.placeAllocated}
                            </div>
                            <div>Hộ khẩu thường trú tại:{this.props.data.province} - {this.props.data.district} - {this.props.data.ward}
                            </div>
                            <div>Nay tôi làm đơn này kính xin Ban Công an xã/phường/thị trấn cho tôi được đăng ký tạm trú tại:
                            {this.props.data.provinceIn} - {this.props.data.districtIn} - {this.props.data.wardIn}
                            </div>
                            <div>Từ ngày{this.props.data.dateStart} đến ngày {this.props.data.dateEnd} </div>
                            <div>Lý do {this.props.data.reason}></div>
                            <div>Trong thời gian ở địa phương tôi xin hứa thực hiện tốt các nội quy, quy định về an ninh trật tự của
            địa phương.Nếu tôi vi phạm tôi xin chịu hoàn toàn trách nhiệm.</div>
                            <div>Tôi xin chân thành cảm ơn!</div>
                        </div>
                        <div>
                            <select onChange={this._getInfor} name='status' ref={(input) => this.wdselectedIn = input} >
                                <option selected>{this.props.data.status}</option>
                                <option value='Đang xử lý'>Đang xử lý</option>
                                <option value='Đã xử lý'>Đã xử lý</option>
                            </select>'
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

export default EditInd;