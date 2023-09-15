import classes from './Home.module.css';


const Home = () => {
    return (
    <div className = {classes.Home} id = "Home">
         {/*<img src={BackgroundImg} alt="Background" className="backgroundImage"/>*/}
        <div className = {classes.Container}>
            <h1 className = {classes.Hello}>Anup Kuriakose</h1>
            <h1 className = {classes.title}><span>Web </span> & <span>iOS </span> Mobile Developer </h1>    
        </div>
       
    </div>  
     );
}
 
export default Home;