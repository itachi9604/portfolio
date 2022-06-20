import React, {useState} from 'react'
import '../App.css';

export default function Copy(props) {
    const [copy_var, setCopy] = useState("copy")
    const copyClicked = ()=> {
        setCopy("copied");
        navigator.clipboard.writeText(props.text);
        setTimeout(() => {
            setCopy("copy");
        }, 700);
        
    }

    return (
        <span className={`${copy_var === "copy"?"copy-icon":"copy-icon-clicked"}`} onClick={copyClicked}>
            <span>{copy_var}</span>
        </span>
    )
}
