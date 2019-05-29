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
                        infors: res.data
                    })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        const done = this.state.infors.map(data => <DisplayAbt data={data} />);
        const wait = this.state.infors.map(data => <EditAbt data={data} />);
        return (
            <div>
                {done}
                {wait}
            </div>
        );
    }
}

export default ViewAbt;