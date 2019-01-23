import React, { Component } from 'react';
import './App.css';

import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router,Route } from 'react-router-dom'

import Home from './Home'
import ListFilms from './Films/ListFilms'
import Login from './Login'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn : false
    }
    this.callbackChild=this.callbackChild.bind(this);
  }

  callbackChild = (Log) => {
    console.log(Log)
    this.setState({isLoggedIn:Log})
  }
  
  renderRedirect(props){
    return <Home/>
    /*if (this.state.isLoggedIn===true) {
      return (
        <Home/>

      )
    }
    else{
      return (
        <Login callbackLog={this.callbackChild.bind(this)}/>
      )
    }*/
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let Content;

    if (isLoggedIn) {
      Content = <Home />;
    } else {
      Content = <Login callbackLog={this.callbackChild.bind(this)}/>;
    }
    return(
      <div>
        <Router>
        {Content}
        </Router>
      </div>
    )
  }
}

export default App;

