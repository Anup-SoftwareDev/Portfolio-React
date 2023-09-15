import React from 'react';
import './Projects.css';
import SearchAPlace from './../../img/SearchAPlaceLogo.png';
import SolarSystemPlanets from './../../img/SolarSystemsPlanetsLogo.png';
import NorthernDetailing from './../../img/NorthernDetailingLogo.png';
import MyShop from './../../img/MyShopLogo.png';
import PageHeader from '../PageHeader/PageHeader';
import projects from '../Skills/projects.json';
import { useNavigate } from 'react-router-dom';
import { useUIContext } from '../../UIContext/UIContext';

const images = [MyShop, SearchAPlace, SolarSystemPlanets, NorthernDetailing]

const Projects = () => {
    const {setProjectIndex} = useUIContext();
    const navigate = useNavigate();

    function ClickHandler(index){
        setProjectIndex(index)
        navigate('./projectdetail')
    }

    return (
        <div className = "projects" id = "projects">
            <PageHeader title={'Projects'}/>
            <div className="image-collection" id = "image-collection"> 
                
                {projects.map((project, index) => (
                    <div className="image-container" key={index}>
                        <img src={images[project.image]} alt="Collection item" />
                        <div className="hover-text" >{project.name}</div>
                        <div className="hover-text-lang" >{project.languages.join(' / ')}
                        </div>
                        <button onClick={() => ClickHandler(index)} >Learn More</button>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default Projects;
