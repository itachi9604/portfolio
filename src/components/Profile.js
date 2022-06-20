import React from 'react'
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"
import BaseObject from "./BaseObject"
export default function Profile(props) {
    return (
      
            <BaseObject name="profile" data={
             <> <div className={`${props.cssProperty} profile-links`}>
                <a href="https://www.linkedin.com/in/itachi9604/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedIn logo"/> LinkedIn - itachi9604</a>
                <br />
                <a href="https://github.com/itachi9604" target="_blank" rel="noreferrer"><img src={github} alt="github logo"/> Github - itachi9604</a>
            </div> </>
            }></BaseObject>

            
    
    )
}
