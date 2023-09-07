import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader'
import Anup from './../../img/Anup.png';
import resume from './Resume.pdf';
import React from 'react';

const About = () => {
    return ( 
        <div className = {classes.AboutMe} id = "about">
            <PageHeader title={'About Me'}/>
            <div className = {classes.Container}>
                <div className = {classes.Text}>
                    <h2>Hello! I'm Anup 🙂</h2>
                    <p>
                    I am an aspiring IOS/Full Stack Web developer with a background in Electronic Engineering.
When it comes to Mobile IOS Front-End Development, I possess expertise in Swift programming language and UIKit framework. I also make use of Express and Firestore to produce backend applications to serve the IOS Front-End.
In terms of Front-End Web Applications, I possess expertise in JavaScript and the React library. Similarly, in building Back-End Applications my expertise revolves around Express and Ruby-on-Rails. 
 When I am not developing software, I love spending time outdoors and playing various sports. 
                    </p>
                    <a href={resume} target="_blank" rel="noopener noreferrer"> <button>View My Resume</button></a>
                    <a href='./#skills'> <button>View My Projects</button></a>

                </div>
                <div className = {classes.Photo}>
                    <img className = {classes.Me} src={Anup} alt = "Anup"></img>
                </div>

            </div>
        </div>
     );
}
 
export default About;