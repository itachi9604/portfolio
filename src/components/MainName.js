import React from 'react'
import BaseObject from "./BaseObject"
import '../App.css';


export default function MainName(props) {
    return (
        <BaseObject cssProperty={props.cssProperty} className="level-one-margin" name="name" data={
            <div className="full-name">Pranay Patil</div>
        }></BaseObject>
    )
}
