import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Act from './Act/Act';

import { BrowserRouter, Route } from 'react-router-dom';

// import { URL } from '../config';

axios.defaults.withCredentials = true;

class HomePage extends Component {
    state = {};

    // componentDidMount() {
    //     axios
    //     .get(`${URL}/api/log/login`)
    //     .then(res => {
    //         console.log(res.data)
    //         if(res.data.user) {
    //             this.setState({
    //                 name: res.data.user[0].name
    //             })
    //         }
    //     })
    //     .catch(err => console.log(err))
    // }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar name={this.props.name} />
                    <Route path="/" exact component={Act} />                </div>
                </BrowserRouter>
                );
            }
        }
        
export default HomePage;