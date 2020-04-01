import React, { Component } from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Education'
import Resume from './Resume'
import Projects from './Projects'
import LeftBar from './LeftBar'
import ContactMe from './ContactMe'
import { BrowserRouter as Router } from 'react-router-dom'

import { Link,Route} from 'react-router-dom'


export default class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <h1>A.Whit Development</h1>
                <div className ="SideBarLeft">
                
                <Router>
                 <li><Link to ="/">Home</Link></li> 
                 <li><Link to ="/Aboutme">About Me</Link> </li>  
                 <li><Link to ="/Education">Education</Link></li>
                 <li><Link to="/Skills">Skills</Link> </li>          
                 <li><Link to="/Projects">Projects</Link></li> 
                 <li><Link to ="/Resume">Resume</Link></li>
                 <li><Link to ="/Contact">Contact Me</Link> </li>
                 {/* <Route path ="/Aboutme"><AboutMe/></Route>                        */}
                </Router>

            </div>
            <Router>
                <Route path ="/Aboutme"><AboutMe/></Route>
                <Route path = "/Skills"><Skills/></Route>
                <Education/>
                <Resume/>
                <Projects/>
                {/* <LeftBar/> */}
                <ContactMe/>
            </Router>
               
                
            </div>
            
        )
    }
}
