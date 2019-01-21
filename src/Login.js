import React, { Component } from 'react';
import './App.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Login extends Component {
    constructor(){
    super()
    this.state={
        name:"",
        password : "",
        isLoggedIn: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    
    handleNameChange(event){
        this.setState({name:event.target.value})
    }

    handlePasswordChange(event){
        this.setState({password:event.target.value})
    }

    handleLogin(){
        alert(this.state.name)
        this.setState({isLoggedIn:true})
    }



  render() {
    return (
        <div>
            <form>
                <div className="row">
                <TextField 
                    type="text"
                    id="standard-name"
                    label="Login 'admin'"
                    onChange = {this.handleNameChange}
                    value = {this.value}
                    margin="normal">
                </TextField>
                </div>

                <div className="row">
                <TextField 
                    type="text"
                    id="standard-name"
                    label="Password 'admin'"
                    onChange = {this.handlePasswordChange}
                    value = {this.value}
                    margin="normal">
                </TextField>
                </div>
                <br/>
                <Button variant="contained" onClick={this.handleLogin}>
                    Login
                </Button>

            </form>
        </div>
    );
  }
}

export default Login;

