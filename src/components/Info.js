import React from 'react'
import BaseObject from "./BaseObject"
import '../App.css';

export default function Info(props) {
    return (
        <div>
            <BaseObject name="info" data={<article className="profile-links">I am a 24 year old computer engineer currently working full time as an Automation Engineer. Also I am doing some side projects with React and Django. I have recently started contributing to opensource. I like to eat dosa and I usually go to the same vendor since I was 15.</article>}></BaseObject>

        </div>
    )
}
