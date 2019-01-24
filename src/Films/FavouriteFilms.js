import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
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
    return (
        <div>
            <br/>
            <h4>Films you loved</h4>
            <List component="nav">
                <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
                <ListItem button>
                <ListItemText primary="Trash" />
                </ListItem>
                <ListItemLink href="#simple-list">
                <ListItemText primary="Spam" />
                </ListItemLink>
            </List>

        </div>

    );
  }
}

export default FavouriteFilms;

