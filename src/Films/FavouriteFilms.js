import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

class FavouriteFilms extends Component {
  constructor(props){
    super(props)
    this.state = {}
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

