import React, { Component } from 'react';
import './App.css';

import {NavLink} from 'react-router-dom';

import Menu from './Menu'
import ListFilms from './Films/ListFilms'

class Home extends Component {
  constructor(){
    super()
  }

  render() {
    return (

        <div>
            <Menu/>
            <br/>
            <br/>
            <br/>
            HEYYYEYEYY
        </div>

    );
  }
}

export default Home;

