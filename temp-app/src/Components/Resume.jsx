import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <h1>Resume</h1>
        <embed
          src="public/Resumev4.pdf"
          width="500"
          height="375"
        ></embed>
      </div>
    );
  }
}
