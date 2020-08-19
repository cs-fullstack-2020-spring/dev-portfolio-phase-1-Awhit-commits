import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NewNavbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link class="navbar-brand" to ="/Aboutme">Andrew Whitmore Development</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
        <ul class="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to = "/Aboutme" className="nav-item nav-link ">
               About Me <span className="sr-only">(current)</span>
              </Link></li>
              <li className="navbar-item">
              <Link to ="/Projects" className="nav-item nav-link">
                Projects
              </Link></li>
              <Link to = "/Experience" className="nav-item nav-link">Experience</Link>
              <Link to = "/Resume" className = "nav-item nav-link">Resume</Link>
              <Link to = "/Contact"className ="nav-item nav-link">Contact</Link>

            </ul>
        <ul class="navbar-nav ml-auto nav-flex-icons">
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="https://twitter.com/AWhitCommits" rel="noopener noreferrer" target ="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="https://github.com/Awhit-commits" rel="noopener noreferrer" target = "_blank" >
            <i class="fa fa-github"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="https://www.linkedin.com/in/andrew-whitmore-9601401b0/" rel="noopener noreferrer" target = "_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <i class="fa fa-google-plus-g"></i>
            </a>
          </li> */}
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Another action</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
            </div>
        )
    }
}
