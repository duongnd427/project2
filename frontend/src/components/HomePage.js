import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Act from './Act';
import Indwell from './Indwell/Infor';
import Absent from './Absent';
import ViewInd from './view/ViewInd';
import ViewAbt from './view/ViewAbt';
import EditInd from './view/EditInd';

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
                        <Route exact path='/absent' component={Absent} />
                        <Route exact path='/viewind' component={ViewInd} />
                        <Route exact path='/viewabt' component={ViewAbt} />
                        <Route exact path='/editind' component={EditInd} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default HomePage;