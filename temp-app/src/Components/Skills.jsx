import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div className="Skills">
                <h1>Skills</h1>
                {/* <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul> */}
                <div className ="skillBadges">
                    <span><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target ="_blank" rel ="noopener noreferrer"><img src="/img/iconfinder_html5_682696.png" alt="HTML5"/></a></span>
                    <span><a href="https://reactjs.org/" target ="_blank" rel ="noopener noreferrer"><img src="/img/iconfinder_react_js_1322468.png" alt="ReactJS"/></a></span>
                    <span><a href="https://www.javascript.com/"><img src="/img/iconfinder_javascript_682690.png" alt="JavaScript"/></a></span>
                    <span><a href="https://nodejs.org/en/"><img src="/img/iconfinder_node_js_682682.png" alt=""/></a></span>

                </div>
            </div>
        )
    }
}
