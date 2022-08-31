import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import MyKidActivity from './../../img/MyKidActivity.jpeg';
import sleepingDog from './../../img/sleepingDog.jpg';
//import sports4us from './../../img/sleepingDog.jpg';
import budget from './../../img/Budget.png';
import sports4us from './../../img/sports4us.png';
import { FaGithub} from "react-icons/fa";
import {BsGlobe} from "react-icons/bs";


import projects from './projects.json';

const listTitleStyle = { fontWeight: 900, fontSize: '2rem' , color: '#9B1FE8', marginBottom: '4px'}

const array = [sports4us, MyKidActivity, sleepingDog, budget]
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
                                            {(project.website)&&
                                                <div className = {classes.Website}>
                                                <BsGlobe color = 'white' size='30px' style ={{padding: '0%'}} onClick={handleURL(project.website)}/>
                                                <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>
                                            </div>}
                                            {(project.github)&&
                                            <div className = {classes.Github}>
                                                <FaGithub color = 'white' size='30px' style ={{padding: '0%'}} onClick={handleURL(project.github)}/>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a>
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