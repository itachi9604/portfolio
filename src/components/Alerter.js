import React, { useState } from 'react'

export default function Alerter() {
    
    const [alertBox, setalertBox] = useState("display");
    setTimeout(() => {
        setalertBox("un_display");
    }, 3000);
    if (alertBox === "display"){
        return (
        
            <div className="alert alert-success" role="alert">
                Click on highlighted fields to Expand or Colapse
                </div>
        )
    }
    else{
        return (<div></div>);
    }
    
}
