import React, { Component } from 'react';
import './App.css';

import Menu from './Menu'

class Home extends Component {
  constructor(){
    super()
    this.state = {
        test:''
    }
  }

  render() {
    return (

        <div>
            <Menu/>
            <br/>
            <br/>
            <br/>
            Welcome on the App!
        </div>

    );
  }
}

export default Home;

