import React, { Component } from 'react';
import './App.css';

import Menu from './Menu'

import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
        test:'',
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    sessionStorage.setItem('isLoggedIn',false)
    this.props.callback()
  }

  render() {
    return (
        <div>
            <Menu/>
            <br/>
            <br/>
            <br/>
            <br/>
            Welcome on the App!
            <Button variant="contained" onClick={this.handleLogout}>Logout</Button>
        </div>
    );
  }
}

export default Home;

