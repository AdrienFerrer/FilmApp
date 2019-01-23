import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './Menu'
import ListFilms from './Films/ListFilms'
import Login from './Login'

import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor(){
    super()
    this.state = {
        test:'',
        isLoggedIn : true
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    //this.setState({isLoggedIn:false})
  }

  render() {
    return (

        <div>
            <Menu/>
            <Router>
            <div>
                <Route path="/ListFilms" component={ListFilms}/>
            </div>
            </Router>
            <br/>
            <br/>
            <br/>
            Welcome on the App!
            <Button variant="contained" onClick={this.handleLogout}>
                    Logout
            </Button>
        </div>

    );
  }
}

export default Home;

