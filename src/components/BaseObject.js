import React from 'react'
import '../App.css';

function randomColor(){
    setInterval(() => {
        
    }, 100);
    let colors = ["red", "purple", "blue", "#442200", "orange","#0f3b57", "#11574a", "#985538", "#674c47"]
    let fontColor = colors[Math.floor(Math.random() * colors.length)];
    return ({ color: fontColor });
}


export default function BaseObject(props) {
    let s = randomColor();
    return (
        <div className="base-component">
            <span className="section-name">.{props.name}</span><span style={s} className="curly-braces">{"{"}</span><span className={props.cssProperty}>{props.data}</span><span style={s} className="level-one-margin curly-braces">{"}"}</span><span className="end-brackets"> \\ {props.name}</span>
        </div>
    )
}
