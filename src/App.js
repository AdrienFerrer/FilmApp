import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router,Route } from 'react-router-dom'

import Home from './Home'
import ListFilms from './Films/listFilms'
import Film from './Films/Film'
import Login from './Login'
import Profile from './Profile'
import Actors from './Actors/Actors'
import Actor from './Actors/Actor'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn : sessionStorage.isLoggedIn
    }
    this.callbackLogin=this.callbackLogin.bind(this)
  }

  callbackLogin = () => {
    this.setState({isLoggedIn:sessionStorage})
  }

  render(){
    if (sessionStorage.isLoggedIn==="true"){
      return(
        <div className="App">

        <Router>
          <div>
            <Home callback={this.callbackLogin.bind(this)}></Home>
            <Route exact path='/ListFilms' component={ListFilms}></Route>
            <Route exact path='/Film/:id' component={Film}></Route>
            <Route path='/Profile' component={Profile}></Route>
            <Route exact path='/Actors' component={Actors}></Route>
            <Route exact path='/Actor/:id' component={Actor}></Route>
          </div>
      </Router>
      </div>

      )
    }
    else{
      return(
        <div className="App">
          <Login callback={this.callbackLogin.bind(this)}/>
        </div>
      )
    }
  }
}

export default App;

