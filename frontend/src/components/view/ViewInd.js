import React, { Component } from 'react';
import axios from 'axios';

import DisplayInd from './DisplayInd';
import EditInd from './EditInd';

class View extends Component {
    state = {
        infors: [],
        search: ''
    }

    componentDidMount = (e) => {
        axios.defaults.withCredentials = true;
        axios
            .get(`http://localhost:1010/api/indwell`, {
                owner: this.props.cmnd,
                password: this.props.password
            })
            .then(res => {
                if (res.data) {
                    this.setState({
                        infors: res.data
                    })
                    // console.log(res.data)
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        var displayInfors = this.state.infors.filter(dis => dis.status.includes(this.props.search) || dis.ward.includes(this.props.search))

        const done = displayInfors.map(data => <DisplayInd data={data} cmnd={this.props.cmnd} />);
        const ws = displayInfors.filter(ws => ws.status.includes('Chờ xử lý') || ws.status.includes('Đang xử lý'))
        const wait = ws.map(data => <EditInd data={data} cmnd={this.props.cmnd} />);
        return (
            <div>
                {done}
                {wait}
            </div>
        );
    }
}

export default View;