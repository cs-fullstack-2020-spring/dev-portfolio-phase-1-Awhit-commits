import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Education extends Component {
  render() {
    return (
      <div className="Education">
        <h1>Education</h1>
        {/* <ul>
                    <li>Mississippi State University</li>
                    <li>Code Crew's Code School</li>
                </ul> */}

        <Card className="MSU" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Mississippi State University</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Aug. 2013 - Dec. 2017
            </Card.Subtitle>
            <Card.Text>
              During my enrollment at Mississippi State University I was taking
              up computer science classes in the Bagley College of Engineering
              were I was introduced to a few programming languages such as
              Python, C, C++. I also scratch the surface in Verilog hardware langauge. 
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link> */}
            {/* <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
        
      </div>
    );
  }
}
