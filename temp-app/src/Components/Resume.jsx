import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <h1>Resume</h1>
        <iframe src="temp-app/public/GetForm.pdf" frameborder="0"></iframe>
      </div>
    );
  }
}
