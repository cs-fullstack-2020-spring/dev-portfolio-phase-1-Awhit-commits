import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeBg img-fluid">
        <div className="AboutMe container img-fluid">
          <h1>About Me</h1>
          <div className="row">
            <div className="aboutMeText img-fluid col-sm in-left">
              <p>
                First of all, welcome to my site! Let me introduce myself, my
                name is Andrew Whitmore and I'm a junior full stack web
                developer. My story begins at the age of four when I received my
                first computer. Ever since, my life has revolved around
                technology and how it interacts and operates. As I was getting
                older, my parents took note of my interest and start enrolling
                my in tech camps such as Kids-N-Technology that further
                increased my curiousity and knowledge. As I progressed through
                my young adult years, I enrolled at Mississippi State University
                and took up Computer Science where I would start my journey into
                software developement.
              </p>
            </div>
            <div className="aboutMePic img-fluid col-sm">
            <img className ="img-fluid" src="./IMG_2710.jpg" alt=""/>
            </div>
            
          </div>
          <div className="row align-self-center aboutMeBtn">
            <Link to = "/Projects"><button className ="btn" > Want to see the cool stuff I've created?</button></Link>
            <Link to = "/Experience"><button className = "btn"> Want to know more about me?</button></Link>  
            </div>
        </div>
      </div>
    );
  }
}
