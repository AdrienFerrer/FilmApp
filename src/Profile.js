import React, { Component } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import FavouriteFilms from './Films/FavouriteFilms'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
        name:'',
        lastname:''
    }
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handleLastNameChange=this.handleLastNameChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

  componentDidMount = () => {
      this.setState({
          name: sessionStorage.getItem('name'),
          lastname: sessionStorage.getItem('lastname')
      })
  }
  handleClick(event){
      sessionStorage.setItem('name',this.state.name)
      sessionStorage.setItem('lastname',this.state.lastname)
      console.log('hey')
  }

  handleNameChange(event){
    this.setState({name:event.target.value})
  }

  handleLastNameChange(event){
    this.setState({lastname:event.target.value})
}



  render() {
    return (
        <div>
            <br/>
            <h4>Your informations</h4>
            <div>
                <TextField 
                    type="text"
                    id="standard-name"
                    label="Name"
                    defaultValue = {sessionStorage.getItem('name')}
                    onChange = {this.handleNameChange}
                    value = {this.value}
                    margin="normal">
                </TextField>
            </div>

            <div className="row">
                <TextField 
                    type="text"
                    id="standard-name"
                    label="Name"
                    defaultValue = {sessionStorage.getItem('lastname')}
                    onChange = {this.handleLastNameChange}
                    value = {this.value}
                    margin="normal">
                </TextField>
        </div>
                <Button variant="contained" onClick={this.handleClick}>
                    Save
                </Button>
                <FavouriteFilms/>

        </div>

    );
  }
}

export default Profile;

