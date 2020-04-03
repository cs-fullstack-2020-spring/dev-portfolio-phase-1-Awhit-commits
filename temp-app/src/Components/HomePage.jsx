import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Resume from "./Resume";
import Projects from "./Projects";
// import LeftBar from "./LeftBar";
import ContactMe from "./ContactMe";
import { BrowserRouter as Router } from "react-router-dom";

import { Link, Route } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Router>
          {/* <h1>A.Whit Development</h1> */}
          <div className="sideBarLeft">
            <p>A. Whit Development</p>
            <li>
              <Link to="/Aboutme">Home</Link>
            </li>
            <li>
              <Link to="/Aboutme">About Me</Link>{" "}
            </li>
            <li>
              <Link to="/Education">Experience</Link>
            </li>
            {/* <li>
              <Link to="/Skills">Skills</Link>{" "}
            </li> */}
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Me</Link>{" "}
            </li>
            </div>
        <div className ="mainContent">
          {/* <Route path ='/' component ={AboutMe}/> */}
            <Route path="/Aboutme" component ={AboutMe}/>
            <Route path="/Education" component = {Education}/>
            <Route path ="/Resume" component = {Resume}/>
            <Route path ="/Contact" component ={ContactMe}/>
            <Route path = "/Skills" component = {Skills}/>
            <Route path = "/Projects" component = {Projects}/>

        </div>
        {/* <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="10000">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
            </div>
             <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="sr-only">Next</span>
            </a>
        </div> */}
    
        </Router>
      </div>
    );
  }
}
