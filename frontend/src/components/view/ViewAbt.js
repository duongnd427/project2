import React, { Component } from 'react';
import axios from 'axios'
import DisplayAbt from './DisplayAbt';
import EditAbt from './EditAbt';

class ViewAbt extends Component {
    state = {
        infors: []
    }

    componentDidMount = (e) => {
        axios.defaults.withCredentials = true;
        axios
            .get(`http://localhost:1010/api/absent`)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    this.setState({
                        infors: res.data,
                    })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        var displayInfors = this.state.infors.filter(dis => dis.status.includes(this.props.search) || dis.ward.includes(this.props.search))

        const done = displayInfors.map(data => <DisplayAbt data={data} cmnd={this.props.cmnd}/>);
        const ws = displayInfors.filter(ws => ws.status.includes('Chờ xử lý') || ws.status.includes('Đang xử lý'))
        const wait = ws.map(data => <EditAbt data={data} cmnd={this.props.cmnd} />);
        return (
            <div>
                {done}
                {wait}
            </div>
        );
    }
}

export default ViewAbt;