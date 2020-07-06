import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Resume from "./Resume";
import Projects from "./Projects";
// import LeftBar from "./LeftBar";
import ContactMe from "./ContactMe";
import { BrowserRouter as Router } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { Link, Route } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div  style={{
        backgroundImage: `url("./chris-ried-ieic5Tq8YMk-unsplash.jpg")`,color:'white'
     }}>
        {/* <Image src = "./chris-ried-ieic5Tq8YMk-unsplash.jpg" fluid/>
        <p>Hello!</p> */}
        {/* style={{
         backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")`,backgroundRepeat: 'no-repeat',width:'250px',height:'250px',color:'white'
      }}> */}
        Nice Snippets
        <Router>
         
            
        <div className ="mainContent">
          {/* <img src="./chris-ried-ieic5Tq8YMk-unsplash.jpg" alt=""/> */}
          {/* <Route path ='/' component ={AboutMe}/> */}
            <Route path="/Aboutme" component ={AboutMe}/>
            <Route path="/Experience" component = {Education}/>
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
