import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Actors extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
            /*
    const theData = axios.get('/').then(function (response) {
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
            lastname: 'Uisdvs',
            id : 1
        },
    
        {
            name: 'Ash',
            lastname: 'Paljkacn',
            id : 3
        }
    ]
    return (
        <div>
            <br/>
            <h4>List of actors</h4>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <List component="nav">
                        {theData.map((anObjectMapped, index) => {
                            const link = '/Actor/'+anObjectMapped.id
                            return (
                                <ListItem key={anObjectMapped.name} button>
                                    <ListItemText primary={anObjectMapped.name+' '+anObjectMapped.lastname} />
                                    <NavLink exact to ={link} activeClassName="selected-link"><Button variant="contained">Details</Button></NavLink>
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
            </Grid>
        </div>
    )
  }
}

export default Actors
