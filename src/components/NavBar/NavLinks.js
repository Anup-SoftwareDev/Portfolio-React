import {motion} from 'framer-motion'
import NameLogo from './../../img/NameLogo.jpg'

const NavLinks = (props) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        
            <ul> 
                {/*<motion.li 
                initial = {animateFrom}
                animate = {animateTo}
                transition = {{delay: 0.05}}
                onClick = {() => props.isMobile && props.closeMobileMenu()}>
                    <a style={{display: 'flex', fontSize: '2em', position: 'absolute', left: '1em', top: '0.95em'}} href ='/'>*/
                       
                        
                       /* </ul><div style={{backgroundColor: 'black', marginLeft: '0.5em',marginBottom: 'auto',  marginTop: 'auto'}}><span style={{color: '#18898f' }}>A</span>nup <span style={{color: '#18898f' }}>K</span>uriakose</div>
                        
                    </a>
                </motion.li>*/}       
                <motion.li 
                initial = {animateFrom}
                animate = {animateTo}
                transition = {{delay: 0.05}}
                onClick = {() => props.isMobile && props.closeMobileMenu()}>
                    <a href ='/'>Home</a>
                </motion.li>
                <motion.li 
                initial = {animateFrom}
                animate = {animateTo}
                transition = {{delay: 0.10}}
                onClick = {() => props.isMobile && props.closeMobileMenu()}>
                    <a href ='/about'>About Me</a>
                </motion.li>
                <motion.li 
                initial = {animateFrom}
                animate = {animateTo}
                transition = {{delay: 0.20}}
                onClick = {() => props.isMobile && props.closeMobileMenu()}>
                    <a href ='/projects'>Projects</a>
                </motion.li>
            
                <motion.li 
                initial = {animateFrom}
                animate = {animateTo}
                transition = {{delay: 0.30}}
                onClick = {() => props.isMobile && props.closeMobileMenu()}>
                    <a href ='/contact'>Contact</a>
                </motion.li>
            </ul>

      );
}
 
export default NavLinks;