import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


export default class SplashPage extends Component {
  constructor(props) {
    super(props);

    this.state = { entryButton: true,redirect:true };
  }
  entryButton = (event) => {
    // event.preventDefault();
    // this.setState({ entryButton: true,redirect:true });
    // this.props.getEntryButton(this.state.entryButton);
    // console.log(this.state);
    window.location = "/Resume"
  };

  render() {
    
    return (
      <div>
        <div className="bg splashPage">
          <div className="splashTextContainer">
            <div className="splashText">
              <p>Hello! I welcome you to my site!</p>
              {/* <p>My name is Andrew Whitmore</p> */}
            </div>
            <div className=" animated animatedFadeInUp fadeInUp">
              <p>
                My name is Andrew Whitmore and I'm a Full-Stack Web Developer
              </p>
            </div>
            <div>
              <a href="/Aboutme">
                {" "}
                <button className="entryBtn default" onClick={this.entryButton}>
                  View Portfolio
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
