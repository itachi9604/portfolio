import React from 'react'
import BaseObject from "./BaseObject"
import Mozilla from "./assets/mozilla.png"
import '../App.css';


function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }

export default function Contributions() {
    const images = importAll(require.context('./assets', false, /\.(png)$/));
    return (
       
            <BaseObject name="contributions" data={
                <>  <div className="level-one-margin mozilla-icon">
                    <a href="https://github.com/mozilla/bedrock" target="_blank" rel="noreferrer noopener"><img class="contibution-mozilla" src={Mozilla} alt="" />
                    <span> Mozilla Bedrock</span>
                    </a></div>
                    <div className="level-two-margin">
                    <BaseObject name="languages" data={
                        <div className="level-three-margin contribution-skills">
                                
                        <figure >
                        <img src={images["html.png"]} alt="" /><figcaption>HTML</figcaption>
                        </figure>
                        <figure >
                        <img alt="" src={images["python.png"]} /><figcaption>Python</figcaption>
                        </figure>
                        <figure >
                            <img alt="" src={images["django.png"]} /><figcaption>Django</figcaption>
                        </figure>
                        <figure >
                            <img alt="" src={images["javascript.png"]} /><figcaption>JavaScript</figcaption>
                        </figure>
                </div>
                    }></BaseObject>
                    </div>
                    
                </>
            }></BaseObject>
     
    )
}
