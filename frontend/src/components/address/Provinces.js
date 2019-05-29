import React, { Component } from 'react';
import axios from 'axios';


class Provinces extends Component {
    state = {
        provinces:[]
    }

    componentDidMount = (e) => {
        axios.defaults.withCredentials = true;
        axios
            .get(`http://localhost:1010/api/provinces`)
            .then(res => {

            })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Provinces;