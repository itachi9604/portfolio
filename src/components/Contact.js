import React from 'react'
import BaseObject from "./BaseObject"
import '../App.css';
import Copy from "./Copy"

export default function Contact() {
    const mail_id = "pranaypatil0799@gmail.com"
    return (
        <div>
            <BaseObject name="contact" data={
                <div className="level-one-margin">
                    <BaseObject name="email" data={
                        <>
                        <br/>
                        <span className="level-one-margin">{mail_id} <Copy text={mail_id}></Copy></span><br/>
                        </>
                    }></BaseObject>
                </div>
            }></BaseObject>
        </div>
    )
}
