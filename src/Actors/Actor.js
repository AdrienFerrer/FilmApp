import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Actor extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
      const actorId = this.props.match.params.id
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
            name: 'Film1',
            id : 1
        },
    
        {
            name: 'Film2',
            id : 2
        },
        {
            name: 'Film3',
            id : 3
        },
        {
            name: 'Film4',
            id : 4
        },
        {
            name: 'Film5',
            id : 5
        }
    ]
    return (
        <div>
            <br/>
            <h4>Played in :</h4>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <List component="nav">
                        {theData.map((anObjectMapped, index) => {
                            const link = '/Film/'+anObjectMapped.id
                            return (
                                <ListItem key={anObjectMapped.name} button>
                                    <ListItemText primary={anObjectMapped.name} />
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

export default Actor
