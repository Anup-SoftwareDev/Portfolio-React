import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
    return (
        <div className = {classes.NavBar} id = "navbar">
            <a className = {classes.NavBarName} href = '/' >
                <span >A</span>nup <span >K</span>uriakose
            </a>
            <MobileNavigation/>
            <Navigation/>
           
        </div>
      );
}
 
export default NavBar;