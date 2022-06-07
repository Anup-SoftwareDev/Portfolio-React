import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import project from './../../img/projects.jpg';

const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}

const backendSkills = 
<ul>
    <li style = {listTitleStyle}>BACKEND</li>
    <li>Scala - Java - SQL</li>
    <li>AKKA - Spring Boot - Slick</li>
</ul>
const frontEndSkills = 
<ul>
    <li style = {listTitleStyle}>FRONTEND</li>
    <li>ReactJS - HTML - CSS - Redux</li>
</ul>

const messagingSkills = 
<ul>
    <li style = {listTitleStyle}>MESSAGING</li>
    <li>ActiveMQ</li>

</ul>

const dataScienceSkills = 
<ul>
    <li style = {listTitleStyle}>DATA SCIENCE TOOLS</li>
    <li>ELK Stack - Apache Spark</li>
</ul>
const buildToolsSkills = 
<ul>
    <li style = {listTitleStyle}>BUILD TOOLS</li>
    <li>Maven - SBT</li>
</ul>
const otherSkills = 
<ul>
    <li style = {listTitleStyle}>OTHER</li>
    <li>Git - Docker - Jenkins - Json - XML</li>
</ul>
const totalSkills = [backendSkills, frontEndSkills, messagingSkills, dataScienceSkills, buildToolsSkills,otherSkills  ]

const Skills = () => {
    return ( 
    <div className = {classes.Skills} id = "skills">
         <PageHeader title={'What about Projects?'}/>
         <img src={project} alt = "project"></img>
        <div className={classes.Container}>
            {totalSkills.map((skills)=>{
                return(
                    <div className = {classes.List}>
                        {skills}
                    </div>
                )
                })};
        </div>
    
    </div>
     );
}
 
export default Skills;