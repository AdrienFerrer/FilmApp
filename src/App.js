import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import {NavLink} from 'react-router-dom';

import Menu from './Menu'
import Home from './Home'
import ListFilms from './Films/ListFilms'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';

import { Grid } from '@material-ui/core';

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
          <Router>
            <div>
                <Route path="/" component={Home}/>
                <Route path="/ListFilms" component={ListFilms}/>
            </div>
          </Router>
      </div>

    );
  }
}

export default App;

