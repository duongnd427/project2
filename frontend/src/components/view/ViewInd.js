import React, { Component } from 'react';
import axios from 'axios';

import DisplayInd from './DisplayInd';
import EditInd from './EditInd';

class View extends Component {
    state = {
        infors: []
    }

    componentDidMount = (e) => {
        axios.defaults.withCredentials = true;
        axios
            .get(`http://localhost:1010/api/indwell`,{
                owner: this.props.cmnd,
                password: this.props.password
            })
            .then(res => {
                // console.log(res.data)
                if (res.data) {
                    this.setState({
                        infors: res.data
                    })
                    console.log(res.data)
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        const done =  this.state.infors.map(data => <DisplayInd data={data} />);
        const wait = this.state.infors.map(data => <EditInd data={data} /> );
        return (
            <div>                
                {done}
                {wait}
            </div>
        );
    }
}

export default View;