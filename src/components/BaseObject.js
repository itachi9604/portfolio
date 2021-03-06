import React, {useState} from 'react'
import '../App.css';

let randomColor = ()=>{
    let colors = ["red", "purple", "blue", "#442200", "orange","#0f3b57", "#11574a", "#985538", "#674c47"]
    let fontColor = colors[Math.floor(Math.random() * colors.length)];
    return ({ color: fontColor });
}


export default function BaseObject(props) {
    let s = randomColor();
    const [exact_value, setexact_value] = useState(props.data)
    const [endName, setendName] = useState("\\\\ " + props.name)
    let toggleData = ()=>{
        if(exact_value === props.data){
            setexact_value("...")
            setendName("")
            console.log("changed to ...")
        }
        else{
            setexact_value(props.data)
            setendName("\\\\ " + props.name)
            console.log("changed to data")
        }
    }


    return (
        <div className="base-component" >
            <span className="section-name" onClick={toggleData}>.{props.name}</span><span style={s} className="curly-braces">{"{"}</span><span className={props.cssProperty}>{exact_value}</span><span style={s} className="level-one-margin curly-braces">{"}"}</span><span className="end-brackets">{endName}</span>
        </div>
    )
}
