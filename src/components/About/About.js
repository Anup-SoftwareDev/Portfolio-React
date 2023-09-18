import classes from './About.module.css';
import PageHeader from '../PageHeader/PageHeader';
import Anup from './../../img/Anup.png';
import resume from './Resume.pdf';
import React from 'react';

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={'About Me'} />
      <div className={classes.Container}>
        <div className={classes.Text}>
            {/*<h2>Hello! I'm Anup 🙂</h2>*/}
              <p>
                I am an aspiring <span style={{color: '#45d4d9'}}>iOS Mobile</span> / <span style={{color: '#45d4d9'}}>Full-Stack Web </span> developer  with a background in
                Electronic Engineering. I am passionate about creating highly aesthetic and smooth flowing software applications that are not only user-friendly, but also ensure a <span style={{color: '#45d4d9'}}>delightful experience</span>. When I am not developing software, I love spending time outdoors, either with family or taking part in various fitness activities. 
              </p>
              <div className = {classes.SkillsContainer}>
                  <div className = {classes.SkillsHeading}> My Skills:</div>
                  <div className = {classes.Skillslist}>
                      <div className={classes.LanguageList}>
                            <h2>iOS Mobile</h2>
                            <ul>
                              <li>Swift</li>
                              <li>UiKit</li>
                            </ul>
                      </div>
                      <div className={classes.LanguageList}>
                            <h2>FrontEnd Web</h2>
                            <ul >
                              <li>React</li>
                              <li>JavaScript</li>
                              <li>Html</li>
                              <li>Css</li>
                            </ul>
                      </div>
                      <div className={classes.LanguageList}>
                            <h2>Backend Web</h2>
                            <ul>
                              <li>Express</li>
                              <li>Ruby-on-Rails</li>
                              <li>FireStore</li>
                              <li>MongoDb</li>
                              <li>PostgreSQL</li>
                            </ul>
                      </div>
                    
                  </div>

              </div>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button>View My Resume</button>
              </a>
              <a href="./projects">
                <button>View My Projects</button>
              </a>
             
        </div>
        <div className={classes.Photo}>
              <img className={classes.Me} src={Anup} alt="Anup"></img>
        </div>
        
      </div>
    </div>
  );
};

export default About;
