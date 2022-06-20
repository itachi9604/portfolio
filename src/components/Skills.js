import React from 'react'
import BaseObject from "./BaseObject"
import '../App.css';


function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   

export default function Skills() {
    const images = importAll(require.context('./assets', false, /\.(png)$/));
    console.log(images);
    return (
        <div className="skills">
            <BaseObject name="skills" data={
                <article className="profile-links">
                
                    <figure >
                    <div className="react-logo-spin">
                    <img src={images["react.png"]} alt="" /></div><figcaption>React</figcaption>
                    </figure>
                
                <figure >
                <img alt="" src={images["python.png"]} /><figcaption>Python</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["docker.png"]} /><figcaption>Docker</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["sql.png"]} /><figcaption>SQL</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["postman.png"]} /><figcaption>Postman</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["jenkins.png"]} /><figcaption>Jenkins</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["linux.png"]} /><figcaption>Linux</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["git.png"]} /><figcaption>Git</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["github.png"]} /><figcaption>Github</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["aws.png"]} /><figcaption>AWS</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["dart.png"]} /><figcaption>Dart</figcaption>
                </figure>
                <figure >
                    <img alt=""  src={images["c++.png"]} /><figcaption>C++</figcaption>
                </figure>
                <figure >
                    <img alt="" src={images["dsa.png"]} /><figcaption>DSA</figcaption>
                </figure>
                </article>
            }></BaseObject>
        </div>
    )
}
