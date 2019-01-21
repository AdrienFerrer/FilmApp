import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './Menu'
import App from './App'
import ListFilms from './Films/ListFilms';

const Layout = () =>

    <Router>
        <div>
            <Route exact path="" component={App}/>
            <Route path="/ListFilms" component={ListFilms}/>
        </div>
    </Router>





export default Layout;

