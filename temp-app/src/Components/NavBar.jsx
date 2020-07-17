import React, { Component } from "react";
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
          <Link to = "/Aboutme" class="navbar-brand">
            Andrew Whitmore Development
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to = "/Aboutme" className="nav-item nav-link active">
               About Me <span className="sr-only">(current)</span>
              </Link>
              <Link to ="/Projects" className="nav-item nav-link">
                Projects
              </Link>
              <Link to = "/Experience" className="nav-item nav-link">Experience</Link>
              <Link to = "/Resume" className = "nav-item nav-link">Resume</Link>
              <Link to = "/Contact"className ="nav-item nav-link">Contact</Link>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}
