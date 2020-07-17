import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Resume from "./Resume";
import Projects from "./Projects";
// import LeftBar from "./LeftBar";
import ContactMe from "./ContactMe";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Link, Route } from "react-router-dom";
import SplashPage from "./SplashPage";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryButton: false,
    };
  }
  getEntryButton = (event) => {
    event.preventDefault();
    this.setState({ entryButton: true });
    console.log(this.state);
  };
  render() {
    if (!this.state.entryButton) {
      //  return( <SplashPage getEntryButton = {this.getEntryButton}/>)
      return (
        <div>
          <Router>
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
                <Link to = "/Aboutme">
                  {" "}
                  <button
                    className="entryBtn default"
                    onClick={this.getEntryButton}
                  >
                    View Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </Router>
        </div>
      );
    }
    
    
    else if (this.state.entryButton){
    return (
      <div>
        <Router>
          {/* <Route exact path ='/' exact component ={SplashPage}/> */}

          <div className="mainContent">
            {/* <img src="./chris-ried-ieic5Tq8YMk-unsplash.jpg" alt=""/> */}
            <Route exact path="/" component={SplashPage} />
            <Navbar />
            <Route path="/Aboutme" component={AboutMe} />
            <Route path="/Experience" component={Education} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Contact" component={ContactMe} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Projects" component={Projects} />
            <Footer />
            <Redirect to = "/Aboutme"/>
           
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
}
