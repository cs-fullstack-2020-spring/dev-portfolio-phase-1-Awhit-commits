import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
          <a class="navbar-brand" href="/">
            Andrew Whitmore Development
          </a>
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
              <a className="nav-item nav-link active" href="/Aboutme">
               About Me <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="/Projects">
                Projects
              </a>
              <a className="nav-item nav-link" href = "/Experience">Experience</a>
              <a className = "nav-item nav-link" href="/Resume">Resume</a>
              <a className ="nav-item nav-link" href="/Contact">Contact</a>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}
