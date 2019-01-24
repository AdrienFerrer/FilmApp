import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';

import {NavLink} from 'react-router-dom';

class Menu extends Component {
  constructor(){
    super()
    this.state = {
      open:false
    }
  }
  toggleOpen = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
        <div className="row" >
          <AppBar>
            <Toolbar>
              <IconButton color="inherit" onClick={this.toggleOpen}>
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6" color="inherit">
              FilmApp
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.open} onClose={this.toggleOpen}>
            <List>
              <ListItem><NavLink onClick={this.toggleOpen} exact to ="/" activeClassName="selected-link">Home</NavLink></ListItem>
              <ListItem><NavLink onClick={this.toggleOpen} to ="/ListFilms" activeClassName="selected-link">Films</NavLink></ListItem>
              <ListItem><NavLink onClick={this.toggleOpen} to ="/Actors" activeClassName="selected-link">Actors</NavLink></ListItem>
              <ListItem><NavLink onClick={this.toggleOpen} to ="/Profile" activeClassName="selected-link">Profile</NavLink></ListItem>
            </List>
          </Drawer>
      </div>
    );
  }
}

export default Menu;
