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

	 const film =[ {
        "id": 100,
        "title": "Kingsglaive",
        "subtitle": "Final Fantasy XV",
        "description": "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
        "year": 2016,
        "imageUrl": "./images/Kingsglaive_Final_Fantasy_XV.jpg",
        "rating": 4.5,
		"actorID": 1
    },
    {
        "id": 200,
        "title": "Final Fantasy",
        "subtitle": "Spirits Within",
        "description": "A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",
        "year": 2001,
        "imageUrl": "./images/Final_Fantasy_Spirits_Within.jpg",
        "rating": 4.5,
		"actorID": 1
    },
    {
        "id": 300,
        "title": "Ghost In The Shell",
        "subtitle": "Ghost In The Shell",
        "description": "A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",
        "year": 2008,
        "imageUrl": "./images/Ghost_In_The_Shell_2_0.jpg",
        "rating": 5,
    	"actorID": 1
    },
    {
        "id": 400,
        "title": "Appleseed Alpha",
        "subtitle": "Appleseed Alpha",
        "description": "A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",
        "year": 2014,
        "imageUrl": "./images/Appleseed_Alpha.jpg",
        "rating": 3.8,
		"actorID": 3
    },
    {
        "id": 500,
        "title": "Resident Evil",
        "subtitle": "Vendetta",
        "description": "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",
        "year": 2014,
        "imageUrl": "./images/Resident_Evil_Vendetta.jpg",
        "rating": 4.2,
		"actorID": 3
    }]
	var TheData=[];
	  	    for(let i = 0; i < film.length; i++) {
			
     if (film[i].actorID==this.props.match.params.id)
	 {
		TheData[i]=film[i]
	 }
    }
	
    return (
        <div>
            <br/>
            <h4>Played in :</h4>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <List component="nav">
                        {TheData.map((anObjectMapped, index) => {
                            const link = '/Film/'+anObjectMapped.id
                            return (
                                <ListItem key={anObjectMapped.name} button>
                                    <ListItemText primary={anObjectMapped.title} />
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
