import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader'
import Anup from './../../img/Anup.png';
import resume from './Resume.pdf';
import React from 'react';

function replaceTextBold(displayText) {return((<span style={{color: '#8C1CD1', fontWeight: 'bold'}}>{displayText}</span>))};
//color: '#8C1CD1'
const About = () => {
    return ( 
        <div className = {classes.AboutMe} id = "about">
            <PageHeader title={'About Me'}/>
            <div className = {classes.Container}>
                <div className = {classes.Text}>
                    <h2>Hello! I'm Anup 🙂</h2>
                    <p>
                    I am a {replaceTextBold('Full-Stack Web Developer')} with a background in Electronic Engineering. I am passionate about making lives of people around me better through Software Development. More specifically what drives me is a desire to produce high Quality Websites that play a part in {replaceTextBold('enhancing')} your {replaceTextBold('business/brand')} .
                    <br/><br /> Currently I make use of {replaceTextBold('React')} and {replaceTextBold('Ruby-on-Rails')} to program my Websites. My Engineering background has provided me a strong foundation on {replaceTextBold('Engineering Design principles')}, which has given me the skills to build applications that are
                    Well Designed,
                    Efficiently Coded,
                    Documented Appropriately and 
                    Tested Adequately to ensure full functionality of the product.
                    <br/><br /> When I am not developing software, I love spending time with my family or doing various fitness activities such as running or spending time in the Gym. Please feel free to explore my resume and projects, and I look forward to hearing from you. I am always eager to learn and continuously grow in delivering excellence. 
                    </p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" style={{marginTop: '10%'}}> <button>View My Resume</button></a>
                    <a href='./#skills'><button>View My Projects</button></a>

                </div>
                <div className = {classes.Photo}>
                    <img className = {classes.Me} src={Anup} alt = "Anup"></img>
                </div>

            </div>
        </div>
     );
}
 
export default About;