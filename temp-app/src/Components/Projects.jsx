import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h1>Projects</h1>

        <CardDeck>
          <Card bg  ='secondary'
          className="shadow-lg p-3 mb-5 bg-grey rounded">
            <Card.Img variant="top" src="/img/Screen Shot 2020-04-03 at 10.40.55 AM.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Link
                className="card-link"
                href="https://github.com/Awhit-commits/Chat-app"
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
            <Card.Img variant="top" src="img/Screen Shot 2020-04-03 at 10.39.28 AM.png" />
            <Card.Body>
              <Card.Title>Pokedex Api</Card.Title>
              <Card.Text>
                An introduction to accesing and using an API in ReactJs
              </Card.Text>
              <Card.Link
                className="card-link"
                href="https://github.com/Awhit-commits/Chat-app"
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
              src="/img/Project1.png"
            />
            <Card.Body>
              <Card.Title>Chat App</Card.Title>
              <Card.Text>
                A personal fullstack project to introduce myself to backend
                programming that was written using ReactJS as the basic
                framework. It includes nodejs,expressjs, and socket.io to
                support the backend.
              </Card.Text>
              <Card.Link
                className="card-link"
                href="https://github.com/Awhit-commits/Chat-app"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>
        {/* <div className="projectBorder"> */}
        {/* <div className="Project1"><img src="/img/Project2.png" alt="Chat app" sizes="" srcset="" />
          <p><a href="https://github.com/Awhit-commits/Chat-app">Chat App</a></p></div>
           */}
        {/* <div className="Project1utilites">
            <ul>
              Utilizes:
              <li>NodeJs</li>
              <li>ReactJs</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SocketIo</li>
              <li>ExpressJs</li>

            </ul>
          </div> */}
      </div>
    );
  }
}
