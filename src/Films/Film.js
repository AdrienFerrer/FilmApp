import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Film extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
      const filmId = this.props.match.params.id
            /*
    const theData = axios.get('//'+actorId).then(function (response) {
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
            name: 'Detail1',
            id : 1
        },
    
        {
            name: 'Detail2',
            id : 2
        },
        {
            name: 'Detail3',
            id : 3
        },
        {
            name: 'Detail4',
            id : 4
        },
    ]
    return (
        <div>
            <br/>
            <h4>Details of the film :</h4>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <List component="nav">
                        {theData.map((anObjectMapped, index) => {
                            const link = '/Film/'+anObjectMapped.id
                            return (
                                    <ListItem key={anObjectMapped.name}>
                                        <ListItemText primary={anObjectMapped.name} />
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

export default Film
