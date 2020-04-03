import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <h1>Resume</h1>
        <embed src="Resumev4.pdf" width="500" height="640" 
        type="application/pdf"/>
      </div>
    );
  }
}
