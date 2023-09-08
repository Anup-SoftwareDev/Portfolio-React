import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import SearchAPlace from './../../img/SearchAPlace.png';
import SolarSystemPlanets from './../../img/SolarSystemPlanets.png';
import NorthernDetailing from './../../img/NorthernDetailing.png';
import MyShop from './../../img/MyShop.png';
import { FaGithub} from "react-icons/fa";
import {BsGlobe} from "react-icons/bs";
import Testflight from './../../img/Testflight.png';
import Appstore  from './../../img/Appstore.png';


import projects from './projects.json';

const listTitleStyle = { fontWeight: 900, fontSize: '2rem' , color: '#9B1FE8', marginBottom: '4px'}

const array = [MyShop, SearchAPlace, SolarSystemPlanets, NorthernDetailing]
const Skills = () => {
    //console.log(projects[1].languages)

    const handleURL = (url) => {
      
        return () => window.open(url, "_blank")
    }

    return ( 
    <div className = {classes.Skills} id = "skills">
            <PageHeader title={'Projects'}/>
            <div className={classes.Container}>
                
            { /*  {totalSkills.map((skills)=>{  */}
            {projects.map((project)=>{
                    return(
                        <div className = {classes.List}>
                             <div className={classes.Heading}>
                                <ul>
                                    <li style = {listTitleStyle}>{project.number}.{project.name}</li>
                                </ul>
                            </div>
                             <div className={classes.Box}>
                                <div className={classes.ImageLink}>
                                {console.log(array[project.image])}
                                    <img src = {array[project.image]} alt = 'project'/>   
                                </div>
                                <div className={classes.Details}>
                                    <div className = {classes.Containers}>Programming Languages
                                        <ul>
                                            {project.languages.map((lan)=>{return(<li>{lan}</li>)})}
                                        </ul>
                                    </div>
                                    <div className = {classes.Description}>Description
                                        <p>{project.Description}</p>
                                    </div>
                                    <div className = {classes.Links}>
                                            Links
                                            {(project.url)&&
                                                <div className = {classes.Url}>
                                                <BsGlobe color = 'white' size='30px' style ={{padding: '0%'}} onClick={handleURL(project.url)}/>
                                                <a href={project.url} target="_blank" rel="noopener noreferrer">Website Link</a>
                                            </div>}
                                            {(project.github)&&
                                            <div className = {classes.Github}>
                                                <FaGithub color = 'white' size='30px' style ={{padding: '0%'}} onClick={handleURL(project.github)}/>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                                            </div>}  
                                            {(project.testflight)&&
                                            <div className = {classes.Testflight}>
                                                <img src={Testflight} alt="Testflight" onClick={handleURL(project.testflight)} style = {{padding: '0%', height: '30px' }} />
                                                <a href={project.testflight} target="_blank" rel="noopener noreferrer">Testflight Link</a>
                                            </div>}
                                            {(project.appstore)&&
                                            <div className = {classes.Appstore}>
                                                <img src={Appstore} alt="Appstore" onClick={handleURL(project.appstore)} style = {{padding: '0%', height: '30px' }} />
                                                <a href={project.appstore} target="_blank" rel="noopener noreferrer">Appstore Link</a>
                                            </div>} 
                            </div>   
                                    
                                </div>
                            </div> 

                           

                        </div>
                    )
                    })};
            </div>
                
    </div>
     );
}
 
export default Skills;