import React from 'react'
import BaseObject from "./BaseObject"
import react_logo from "./assets/react.png"
import python_logo from "./assets/python.png"
import '../App.css';

export default function Projects() {
    return (
        <div>
            <BaseObject name="projects" data={
                <>  <div className="level-one-margin"></div>
                    <ul>
                        <li>
                            <span className="roles">Invoice Application For Govt. Documents</span><br />
                            <span>Invoice generator for public. It was an ondemand project from a banking and adhar service centre based in a village Kuhi. It is now being used to register 10-20 Adhar / PAN documents per day.</span><br />
                            <BaseObject name="technologies" data={
                                <div className="level-two-margin">
                                    <figure>
                                        <img src={react_logo} alt=""/>
                                        <figcaption>React</figcaption></figure></div>
                            }></BaseObject>
                        </li>
                        <li>
                            <span className="roles">HealthCare Chatbot</span><br />
                            <span>This Chatbot based on decision tree algorithm from Machine Learning, accepts input from user about symptoms and predicts the disease they might have and provides first aid kind of instruction.</span><br />
                            <span> The Dataset for this project is now helping thousands of people. 
                        <ul>
                            <li>13,000 Downloads</li>
                            <li>93,000 Views</li>
                            <li>29 Contributors</li>
                            <li>18 Notebooks</li>
                            <li>220 upvotes</li>
                        </ul>
                            </span>
                            <BaseObject name="technologies" data={
                                    <div className="level-two-margin" >
                                        <figure><img src={python_logo} alt=""/><figcaption>Python</figcaption></figure>
                                    </div>
                            }></BaseObject>
                        </li>
                    </ul>
                </>
            }></BaseObject>
            
        </div>
    )
}
