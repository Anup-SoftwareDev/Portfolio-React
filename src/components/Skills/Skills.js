import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import project from './../../img/projects.jpg';

const listTitleStyle = {fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}

const myKidActivity = 
<ul>
    <li style = {listTitleStyle}>My-Kid-Activity App</li>
    <li></li>
    <li></li>
</ul>
const canineWisdom = 
<ul>
    <li style = {listTitleStyle}>Canine Wisdom</li>
    <li></li>
</ul>


const budgetSolutions = 
<ul>
    <li style = {listTitleStyle}>Budget Solutions</li>
    <li></li>
</ul>


const totalSkills = [myKidActivity, canineWisdom, budgetSolutions  ]

const Skills = () => {
    return ( 
    <div className = {classes.Skills} id = "skills">
         <PageHeader title={'Projects'}/>
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