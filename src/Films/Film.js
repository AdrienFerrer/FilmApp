import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
//import axios from 'axios';

export default class Film extends Component {
	  constructor(){
    super()
    this.state = {
film: [],
id : "",
obj:""
    }
  }
  /* const theData = axios.get('//'+actorId).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    }).then(function () {
      // always executed
    });*/
render() {
	this.id = this.props.match.params.id
	console.log(this.id)
	 this.film =[ {
        "id": 100,
        "title": "Kingsglaive",
        "subtitle": "Final Fantasy XV",
        "description": "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
        "year": 2016,
        "imageUrl": "/images/Kingsglaive_Final_Fantasy_XV.jpg",
        "rating": 4.5
    },
    {
        "id": 200,
        "title": "Final Fantasy",
        "subtitle": "Spirits Within",
        "description": "A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",
        "year": 2001,
        "imageUrl": "./images/Final_Fantasy_Spirits_Within.jpg",
        "rating": 4.5
    },
    {
        "id": 300,
        "title": "Ghost In The Shell",
        "subtitle": "Ghost In The Shell",
        "description": "A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",
        "year": 2008,
        "imageUrl": "./images/Ghost_In_The_Shell_2_0.jpg",
        "rating": 5
    },
    {
        "id": 400,
        "title": "Appleseed Alpha",
        "subtitle": "Appleseed Alpha",
        "description": "A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",
        "year": 2014,
        "imageUrl": "./images/Appleseed_Alpha.jpg",
        "rating": 3.8
    },
    {
        "id": 500,
        "title": "Resident Evil",
        "subtitle": "Vendetta",
        "description": "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",
        "year": 2014,
        "imageUrl": "./images/Resident_Evil_Vendetta.jpg",
        "rating": 4.2
    }]
	console.log(this.film.length)
	    for(let i = 0; i < this.film.length; i++) {
			
     if (this.film[i].id==this.id)
	 {
		 this.obj=this.film[i]
	 }
    }
  return (
      <div>
            <h1>Movie : {this.obj.title} </h1>
			    <div>
        <div>
            <img  src={this.obj.imageUrl} />
            <div>
                <h4>{this.obj.title}</h4>
                <h6>{this.obj.subtitle}</h6>
                <p  style={{fontSize: '14px'}}>{this.obj.description}</p>
            </div>
            <div>
                <div>
      
                    <div >{this.obj.rating}
					</div>
                </div>
            </div>
        </div>
    </div>
	<br/>
	<br/>
	
	         <Button variant="contained" >
                    Edit
                </Button>
     
      </div>
  )
}
  
}
