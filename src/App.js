import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import ListFilms from './Films/ListFilms'
import Login from './Login'


class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedin : false
    }
  }

  render() {
    return (
      <div className="App">
          <Router>
            <div>
            <Route exact path="/login" component={Login} />
            { this.state.isLoggedIn && 
            <Route exact path="/" component={Home} /> &&
            <Route path="/ListFilms" component={ListFilms}/>
            }
            </div>
          </Router>
          <Login/>
      </div>

    );
  }
}

export default App;

