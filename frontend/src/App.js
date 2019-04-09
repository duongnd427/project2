import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios'
import { URL } from './config'

import StartPage from './components/StartPage';
import HomePage from './components/HomePage';

class App extends Component {
    state = {};

    componentDidMount() {
        axios
            .get(`${URL}/api/log/login`)
            .then(res => {
                console.log(res.data)
                if (res.data.user) {
                    this.setState({
                        name: res.data.user[0].name,
                        cmnd: res.data.user[0].cmnd,
                    })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        const display = (this.state.name) ? <HomePage name={this.state.name} />
            : <StartPage />
        return (
                <div className="App container-fluid">
                     {/* <BrowserRouter>
                     <Route exact path="/" component={display} />
                     </BrowserRouter> */}
                     {display}
                </div>
                );
            }
        }
        
export default App;