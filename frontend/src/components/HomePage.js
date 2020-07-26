import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './navbar/NavBar';
import Act from './Act';
import Indwell from './Indwell';
import Absent from './Absent';
import ViewInd from './view/ViewInd';
import ViewAbt from './view/ViewAbt';

// import { URL } from '../config';

axios.defaults.withCredentials = true;

class HomePage extends Component {
    state = {
        search: '',
    };

    onSearching = text => this.setState({ search: text })

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar onSearching={this.onSearching}
                        name={this.props.name}
                    />
                    <Switch>
                        <Route exact path='/' render={()=>(<Act cmnd={this.props.cmnd} />)} />
                        <Route exact path='/indwell' component={Indwell} />
                        <Route exact path='/absent' component={Absent} />
                        <Route exact path='/viewind' render={()=>(<ViewInd search={this.state.search} cmnd={this.props.cmnd} />)} />
                    <Route exact path='/viewabt' render={()=>(<ViewAbt search={this.state.search} cmnd={this.props.cmnd}/>)} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default HomePage;