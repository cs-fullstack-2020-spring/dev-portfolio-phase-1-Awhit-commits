import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
export default class Education extends Component {
  render() {
    return (
      <div>
        <div className="Education">
          <h1>Education</h1>
          {/* <ul>
                    <li>Mississippi State University</li>
                    <li>Code Crew's Code School</li>
                </ul> */}
          <CardDeck>
            <Card
              className="shadow-lg p-3 mb-5 bg-info rounded"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>Mississippi State University</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Aug. 2013 - Dec. 2017
                </Card.Subtitle>
                <Card.Text>
                  During my enrollment at Mississippi State University I was
                  taking up computer science classes in the Bagley College of
                  Engineering were I was introduced to a few programming
                  languages such as Python, C, C++. I also scratch the surface
                  in Verilog hardware langauge.
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link> */}
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
            <Card
              className="shadow-lg p-3 mb-5 bg-info rounded"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>Mississippi State University</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Aug. 2013 - Dec. 2017
                </Card.Subtitle>
                <Card.Text>
                  During my enrollment at Mississippi State University I was
                  taking up computer science classes in the Bagley College of
                  Engineering were I was introduced to a few programming
                  languages such as Python, C, C++. I also scratch the surface
                  in Verilog hardware langauge.
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link> */}
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <div className="Skills">
          <h1>Skills</h1>
          {/* <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul> */}
          <div className="skillBadges">
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
                <img src="/img/iconfinder_react_js_1322468.png" alt="ReactJS" />
              </a>
            </span>
            <span>
              <a href="https://www.javascript.com/">
                <img
                  src="/img/iconfinder_javascript_682690.png"
                  alt="JavaScript"
                />
              </a>
            </span>
            <span>
              <a href="https://nodejs.org/en/">
                <img src="/img/iconfinder_node_js_682682.png" alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
