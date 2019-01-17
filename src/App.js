import React, { Component } from 'react';
import './App.css';

import Menu from './Menu'


import {NavLink} from 'react-router-dom';

import listFilms from './Films/listFilms';

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
          <Menu/>
      </div>
    );
  }
}

export default App;
