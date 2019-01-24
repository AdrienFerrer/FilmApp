import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class FavouriteFilms extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
      /*
    const theData = axios.get('/user?ID=12345').then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    }).then(function () {
      // always executed
    });*/
}

  render() {
    const theData = [
        {
            name: 'Sam',
            email: 'somewhere@gmail.com'
        },
    
        {
            name: 'Ash',
            email: 'something@gmail.com'
        }
    ]

    return (
        <div>
            <br/>
            <h4>Films you loved</h4>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <List component="nav">
                        {theData.map((anObjectMapped, index) => {
                            return (
                                <ListItem key={anObjectMapped.name} button>
                                    <ListItemText primary={anObjectMapped.name+' '+anObjectMapped.email} />
                                    <NavLink exact to ="/Film" activeClassName="selected-link"><Button variant="contained">Details</Button></NavLink>
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
  }
}

export default FavouriteFilms;

