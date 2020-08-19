import React, { Component } from "react";
import {Animated} from "react-animated-css";
export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <h1>Resume</h1>
        <Animated animationIn="pulse" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
    

        <embed src="Andrew_Whitmore_Resume_original.pdf" width="75%" height="640" 
        type="application/pdf"/>
        </Animated>
      </div>
    );
  }
}
