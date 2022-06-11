import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader'
import Anup from './../../img/Anup.png';


const About = () => {
    return ( 
        <div className = {classes.AboutMe} id = "about">
            <PageHeader title={'About Me'}/>
            <div className = {classes.Container}>
                <div className = {classes.Text}>
                    <h2>Hello! I'm Anup</h2>
                    <p>
                    I am a Full Stack Web
Developer with a background in Electronic Engineering.I am passionate about making lives of people around me better through Software Development. When I am not developing software, I love spending time outdoors and playing various sports. 
                    </p>
                </div>
                <div className = {classes.Photo}>
                    <img className = {classes.Me} src={Anup} alt = "Anup"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;