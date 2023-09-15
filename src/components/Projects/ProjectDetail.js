import React from 'react';
import './ProjectDetail.css';
import SearchAPlace from './../../img/SearchAPlaceLogo.png';
import SolarSystemPlanets from './../../img/SolarSystemsPlanetsLogo.png';
import NorthernDetailing from './../../img/NorthernDetailingLogo.png';
import NorthernDetailingScreen from './../../img/NorthernDetailingScreen.jpg';
import SolarSystemPlanetsScreen from './../../img/SolarSystemScreen.jpg';
import SearchAPlaceScreen from './../../img/SearchAPlaceScreen.jpg';
import MyShop from './../../img/MyShopLogo.png';
import MyShopScreen from './../../img/MyShopScreen.jpg';
import PageHeader from '../PageHeader/PageHeader';
import projects from '../Skills/projects.json';
import { useUIContext } from '../../UIContext/UIContext';
import ScrollToTop from './ScrollToTop';
import { FaGithub} from "react-icons/fa";
import {BsGlobe} from "react-icons/bs";
import Testflight from './../../img/Testflight.png';
import Appstore  from './../../img/Appstore.png';


const ProjectDetail = () => {
    const projectIcons = {
        "SearchAPlace": SearchAPlace,
        "SolarSystemPlanets": SolarSystemPlanets,
        "Northern Detailing": NorthernDetailing,
        "MyShop": MyShop,
        // ... add more mappings as needed
      };

      const projectImages = {
        "SearchAPlace": SearchAPlaceScreen,
        "SolarSystemPlanets": SolarSystemPlanetsScreen,
        "Northern Detailing": NorthernDetailingScreen,
        "MyShop": MyShopScreen,
        // ... add more mappings as needed
      };

    const {projectIndex} = useUIContext();

    console.log(projectIndex)

    const handleURL = (url) => {
        return () => window.open(url, "_blank")
    }

    return (
    <> 
        <ScrollToTop />
         <PageHeader title={'Project Detail'}/>
         <div className='project-detail-box'>
            <div className = "logo-box">
                    <img src={projectIcons[projects[projectIndex].name]} alt="img"/>
                    <div className= 'project-title'>{projects[projectIndex].name}</div>
            </div>
            <div className = "image-detail-box">
                
                <div className="image-box">   
                            <img src = {projectImages[projects[projectIndex].name]} alt = "img"/>
                </div>
            

                <div className = "detail-box"> 
                    
                        <div className = "detail-title">ApplicationType:</div>
                        <div className = "detail-content">{projects[projectIndex].type}</div>
                        <br />
                        <div className = "detail-title">Languages & Frameworks:</div>
                        <div className = "detail-content">{projects[projectIndex].languages.join(' / ')}</div>
                        <br />
                        <div className = "detail-title">Description:</div>
                        <div className = "detail-content" style = {{marginBottom: '1em', marginRight: '2em'}}>{projects[projectIndex].Description}</div>
                        <div className = "detail-title" style = {{marginBottom: '0.3em'}}>Links:</div>
                        {(projects[projectIndex].url)&&
                        <div className= 'url-icon'>
                            <BsGlobe color = 'blue' size='25px' onClick={handleURL(projects[projectIndex].url)} style={{ flexShrink: 0 }}/>
                            <a href={projects[projectIndex].url} target="_blank" rel="noopener noreferrer">{projects[projectIndex].url}</a>
                        </div>}
                        {(projects[projectIndex].testflight)&&
                            <div className = 'url-icon'>
                            <img src={Testflight} alt="Testflight" onClick={handleURL(projects[projectIndex].testflight)} />
                            <a href={projects[projectIndex].testflight} target="_blank" rel="noopener noreferrer" >{projects[projectIndex].testflight}</a>
                        </div>}                  
                        {(projects[projectIndex].appstore)&&
                            <div className = 'url-icon'>
                            <img src={Appstore} alt="Appstore" onClick={handleURL(projects[projectIndex].appstore)} />
                            <a href={projects[projectIndex].appstore} target="_blank" rel="noopener noreferrer">{projects[projectIndex].appstore}</a>
                        </div>}
                        {(projects[projectIndex].github)&&
                            <div className = 'url-icon'>
                                <FaGithub color = 'blue' size='25px' onClick={handleURL(projects[projectIndex].github)} style={{ flexShrink: 0 }}/>
                                <a href={projects[projectIndex].github} target="_blank" rel="noopener noreferrer">{projects[projectIndex].github}</a>
                        </div>}
                </div>
            </div>
        </div>
    </>
    );
}

export default ProjectDetail;