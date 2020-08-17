import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Animated } from "react-animated-css";

export default class Education extends Component {
  render() {
    return (
      <div className="Experience container">
        <h1>Experience</h1>
        <div className="row">
         
            <div className="Education col">
            <Animated
            animationIn="lightSpeedIn"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
              <h2>Education</h2>
              {/* <ul>
                    <li>Mississippi State University</li>
                    <li>Code Crew's Code School</li>
                </ul> */}
              <CardDeck>
                <Card
                  className="shadow-lg p-3 mb-5 bg-secondary rounded"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>Mississippi State University</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Aug. 2013 - Dec. 2017
                    </Card.Subtitle>
                    <Card.Text>
                      During my enrollment at Mississippi State University I was
                      taking up computer science classes in the Bagley College
                      of Engineering were I was introduced to a few programming
                      languages such as Python, C, C++. I also scratch the
                      surface in Verilog hardware langauge.
                    </Card.Text>
                    <Card.Link href="https://msstate.edu" target="_blank">
                      Hail State!
                    </Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                  </Card.Body>
                </Card>
                <Card
                  bg="secondary"
                  className="shadow-lg p-3 mb-5 bg-secondary rounded"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>Code Crew's Code School</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Feb. 2020 - Current
                    </Card.Subtitle>
                    <Card.Text>
                      Six month hands-on program that teaches adults the tools
                      and skills to become an entry level full stack web
                      developer. It's goal to ensure that every graduate has the
                      tool and qualties to become a successful developer in the
                      tech world.
                    </Card.Text>
                    <Card.Link
                      href="https://www.code-crew.org/codeschool"
                      target="_blank"
                    >
                      CodeSchool{" "}
                    </Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                  </Card.Body>
                </Card>
              </CardDeck>
              </Animated>
            </div>
          
          
          <div className="Skills col-sm-4">
          <Animated
            animationIn="lightSpeedIn"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <h2>Skills</h2>
            {/* <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul> */}
            <div className="skillBadges ">
           
              {/* <h2>Skills</h2> */}
              <span>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/iconfinder_html5_682696.png" alt="HTML5" />
                </a>
              </span>
              <span>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/iconfinder_react_js_1322468.png"
                    alt="ReactJS"
                  />
                </a>
              </span>
              <span>
                <a href="https://www.javascript.com/" target = "_blank" rel="noopener noreferrer" >
                  <img
                    src="/img/iconfinder_javascript_682690.png"
                    alt="JavaScript"
                  />
                </a>
              </span>
              <span>
                <a href="https://nodejs.org/en/" target = "_blank" rel="noopener noreferrer" >
                  <img src="/img/iconfinder_node_js_682682.png" alt="Node.JS" />
                </a>
              </span>
          
              <div className="secondRow">
              <span>
                <a href="https://www.apple.com/macos/catalina/" target = "_blank" rel="noopener noreferrer" >
                  <img src="/img/iconfinder_mac_os_337129.png" alt="Mac OS X" />
                </a>
              </span>
              <span>
                <a href="https://www.microsoft.com/en-us/windows/" target = "_blank" rel="noopener noreferrer">
                  <img src="/img/iconfinder_windows_337157.png" alt="Microsoft Windows" />
                </a>
              </span>
              <span>
                <a href="https://ubuntu.com/" target = "_blank" rel="noopener noreferrer">
                  <img src="/img/iconfinder_ubuntu_337155.png" alt="Ubuntu" />
                </a>
              </span>
              <span>
                <a href="https://www.postman.com/" target = "_blank" rel="noopener noreferrer">
                  <img src="/img/iconfinder_postman_4691397.png" alt="Postman" />
                </a>
              </span>

              </div>
             
            </div>
            </Animated>
          </div>
          
        </div>
      </div>
    );
  }
}
