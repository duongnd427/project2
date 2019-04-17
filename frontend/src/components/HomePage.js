import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import Act from './Act/Act';
import Indwell from './Act/Indwell/Infor'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
                    <Switch>
                        <Route exact path='/' component={Act} />
                        <Route exact path='/indwell' component={Indwell} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default HomePage;