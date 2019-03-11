import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from './axios'

import StartPage from './components/StartPage';

class App extends Component {
    state = {};

    // componentDidMount() {
    //     axios
    //         .get('/api/absent')
    //         .then(data => {
    //             console.log(data.data)
    //             this.setState({ absent: data.data })
    //         })
    //         .catch(err => console.error(err))
    // }

    render() {
        return (
            <div className="App container-fluid">
                <StartPage />
            </div>
        );
    }
}

export default App;