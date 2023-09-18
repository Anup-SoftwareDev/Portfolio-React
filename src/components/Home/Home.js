import classes from './Home.module.css';


const Home = () => {
    return (
    <div className = {classes.Home} id = "Home">
         {/*<img src={BackgroundImg} alt="Background" className="backgroundImage"/>*/}
        <div className = {classes.Container}>
            <h1 className = {classes.Hello}>Anup Kuriakose</h1>
            <h1 className = {classes.title}><span>Web </span> & <span>iOS </span> Mobile Developer </h1>   
            <div className = {classes.Buttons}>
                <a style = {{textDecoration: "none"}} href="./about">
                    <button>About Me</button>
                </a>
                <a style = {{textDecoration: "none"}}  href="./projects">
                    <button className = {classes.ProjectsButton} >View Projects</button>
                </a>
            </div>
        </div>
        
       
    </div>  
     );
}
 
export default Home;