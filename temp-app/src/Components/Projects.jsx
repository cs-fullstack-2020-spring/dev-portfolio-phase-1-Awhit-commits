import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import {Animated} from "react-animated-css"

export default class Projects extends Component {
  render() {
    return (
      
      <div className="Projects">
        <h1>Projects</h1>
        <Animated animationIn="zoomInDown" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

        <CardDeck>
          <Card  bg  ='secondary'
          className="shadow-lg p-3 mb-5 bg-grey rounded">
            <Card.Img top width="100%" variant="top" src="/img/newshot.png" />
            <Card.Body>
              <Card.Title>Reflection App</Card.Title>
              <Card.Text>
                A basic introductory ReactJS app that utilizes forums and basic knowledge of JavaScript, CSS, and HTML5.
              </Card.Text>
              <Card.Link
                // className="card-link"
                href="https://afternoon-basin-73713.herokuapp.com/"
                target = "_blank" className= "btn btn-primary"
              >
                Check it out!
              </Card.Link>
              <Card.Link
                // className="card-link"
                href="https://github.com/cs-fullstack-2020-spring/reflections-journal-project-3-Awhit-commits"
                target = "_blank" className= "btn btn-primary"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </Card>
          <Card bg  ='secondary'
          className="shadow-lg p-3 mb-5 bg-grey rounded">
            <Card.Img variant="top" src="img/Pokidex.png" />
            <Card.Body>
              <Card.Title>Pokedex API</Card.Title>
              <Card.Text>
                An introduction to accessing and using an API in ReactJs
              </Card.Text>
              <Card.Link
                // className="card-link"
                href="https://fierce-bayou-38847.herokuapp.com/"
                target = "_blank" className= "btn btn-primary"
              >
                Check it out!
              </Card.Link>
              <Card.Link
                // className="card-link"
                href="https://github.com/cs-fullstack-2020-spring/react-fetch-pokemon-Awhit-commits"
                target="_blank" className= "btn btn-primary"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
            {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
          </Card>
          <Card bg  ='secondary'
          className="shadow-lg p-3 mb-5 bg-grey rounded">
            <Card.Img
              
              variant="top"
              src="/img/chatapp.png"
            />
            <Card.Body>
              <Card.Title>Chat App</Card.Title>
              <Card.Text>
                A personal project to introduce myself to backend
                programming that was written using ReactJS as the front-end
                framework. It includes Node.js, ExpressJs, and socket.io to
                support the backend.
              </Card.Text>
              <Card.Link
                // className="card-link"
                href="https://boiling-waters-12112.herokuapp.com/"
                target = "_blank" className= "btn btn-primary"
              >
                Check it out!
              </Card.Link>
              <Card.Link
                // className="card-link"
                href="https://github.com/Awhit-commits/Chat-app"
                target = "_blank" className= "btn btn-primary"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>
        </Animated>
        
        <CardDeck>
          <Card  bg  ='secondary'
          className="shadow-lg p-3 mb-5 bg-grey rounded ">
            <Card.Img className = "card-img-top" top width="100%" variant="top" src="/img/GetAnEdge.png" />
            <Card.Body>
              <Card.Title>Get An Edge</Card.Title>
              <Card.Text>
                A Full-stack web application utilizing a MongoDB, ExpressJs, Node.js, ReactJs, and a third-party Fortnite API. The application features a stat tracker for any Fortnite player and a registered user has the ability to create and maintain a friends list. 
              </Card.Text>
              <Card.Link
                // className="card-link"
                href="https://calm-dawn-53946.herokuapp.com/"
                target = "_blank" className= "btn btn-primary"
              >
                Check it out!
              </Card.Link>
              <Card.Link
                // className="card-link"
                href="https://github.com/Awhit-commits/Passion-Project"
                target = "_blank" className= "btn btn-primary"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
          </Card>
          <Card bg  ='secondary'
          className="shadow-lg p-3 mb-5 bg-grey rounded">
            <Card.Img variant="top" src="img/Trex.png" />
            <Card.Body>
              <Card.Title>Trex Logistics</Card.Title>
              <Card.Text>
                A full-stack logistics application created along with two other colleagues. It features a client and admin side. The admin side can only be accessed to authorized users. It features ReactJs as the front-end framework, MongoDB as the database, Node.Js and ExpressJs to support the backend. Also utilizes bcrypt.js and JSON Web Tokens (JWT) for authentication and authorization
              </Card.Text>
              <Card.Link
                // className="card-link"
                href="https://enigmatic-basin-72083.herokuapp.com/"
                target="_blank" className= "btn btn-primary"
              >
                Check it out!
              </Card.Link>
              <Card.Link
                // className="card-link"
                href="https://github.com/cs-fullstack-2020-spring/trex-1-team-bam"
                target="_blank" className= "btn btn-primary"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
            
          </Card>
          <Card bg  ='secondary'
          className="shadow-lg p-3 mb-5 bg-grey rounded">
            <Card.Img
              
              variant="top"
              src="/img/ExercTracker.png"
            />
            <Card.Body>
              <Card.Title>ExcerTracker</Card.Title>
              <Card.Text>
                A basic exercise tracker that was a personal project. It's able to create users and record the description, time, and date. It the first MERN application I created. Utilizes MongoDB, ReactJS, ExpressJs and Node.Js
              </Card.Text>
              <Card.Link
                // className="card-link"
                href="https://stormy-taiga-50313.herokuapp.com/"
                target = "_blank" className= "btn btn-primary"
              >
                Check it out!
              </Card.Link>
              <Card.Link
                // className="card-link"
                href="https://github.com/Awhit-commits/Exercise-Tracker"
                target = "_blank" className= "btn btn-primary"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>
       
       
      </div>
    );
  }
}
