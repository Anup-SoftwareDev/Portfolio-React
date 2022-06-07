import classes from './Home.module.css';
import Openimg from './../../img/Openimg.jpg';

const Home = () => {
    return (
    <div className = {classes.Home} id = "Home">  
        <div className = {classes.Container}>
            <h1 className = {classes.Hello}>Anup Kuriakose</h1>
            <h1 className = {classes.title}>Full-Stack Developer</h1>
        </div>
        <img className = {classes.Openimg} src={Openimg} alt='Openimg'></img>
    </div>  
     );
}
 
export default Home;