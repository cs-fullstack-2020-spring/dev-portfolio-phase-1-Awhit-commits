// import React, { Component } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { Link,Route } from 'react-router-dom'
// // import Sidebar from 'react-sidebar'
// import AboutMe from './AboutMe'

// export default class LeftBar extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              sidebarOpen:true,
//         }
//         this.onSetSidebarOpen =this.onSetSidebarOpen.bind(this)
//     }
//     onSetSidebarOpen(open){
//         this.setState({sidebarOpen:open})
//     }


//     render() {
//         return (
//             // <div className ="SideBarLeft">
//             //     <Sidebar
//             //     sidebar={
//             //     <Router>
//             //      <li><Link to ="/">Home</Link></li> 
//             //      <li><Link to ="/Aboutme">About Me</Link> </li>  
//             //      <li><Link to ="/Education">Education</Link></li>
//             //      <li><Link to="/Skills">Skills</Link> </li>          
//             //      <li><Link to="/Projects">Projects</Link></li> 
//             //      <li><Link to ="/Resume">Resume</Link></li>
//             //      <li><Link to ="/Contact">Contact Me</Link> </li>  
//             //      <Route path = "/Aboutme"><AboutMe/></Route>                       
//             //     </Router>}
//             //     open ={this.state.sidebarOpen}
//             //     onSetOpen = {this.onSetSidebarOpen}
//             //     styles = {{sidebar:{background:'white',padding:'30px'}}}>
//             //         <button onClick ={()=>this.onSetSidebarOpen(true)}>Open</button>

//             //     </Sidebar>
//             // </div>
//             <div className ="SideBarLeft">
                
//                 <Router>
//                  <li><Link to ="/">Home</Link></li> 
//                  <li><Link to ="/Aboutme">About Me</Link> </li>  
//                  <li><Link to ="/Education">Education</Link></li>
//                  <li><Link to="/Skills">Skills</Link> </li>          
//                  <li><Link to="/Projects">Projects</Link></li> 
//                  <li><Link to ="/Resume">Resume</Link></li>
//                  <li><Link to ="/Contact">Contact Me</Link> </li>
//                  {/* <Route path ="/Aboutme"><AboutMe/></Route>                        */}
//                 </Router>
//                 </div>
                
//         )
//     }
// }
