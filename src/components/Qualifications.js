import React from 'react'
import BaseObject from "./BaseObject"
import Computer from "./assets/computer.png"
import '../App.css';

export default function Qualifications() {
    return (
        <div>
            <BaseObject name="qualifications" data={
                <> 
                <div className="level-one-margin">
                    <div className="mozilla-icon">
                    <a href="https://mitaoe.ac.in">
                <img src="https://mitaoe.ac.in/assets/images/logo-color-1.png" alt=""/><span> MITAOE, Pune</span></a></div><br />
                <BaseObject name="degree" data={<><div className="level-one-margin">
                    <img src={Computer} alt=""/><span> B. Tech - Computer Engineering | 2016 - 2020</span></div></>
                }></BaseObject>
                </div>
            </>
            }></BaseObject>
        </div>
    )
}
