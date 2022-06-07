import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
    return (
        <div className = {classes.NavBar} id = "navbar">
            <div className = {classes.NameTag}>
                <a href ='/#home'>Anup Kuriakose</a>       
            </div>
            <MobileNavigation/>
            <Navigation/>
           
        </div>
      );
}
 
export default NavBar;