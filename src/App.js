import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import ImageCollection from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail";
import NavBar from "./components/NavBar/NavBar";
import { UIProvider } from './UIContext/UIContext';


const App = () => {

    return (
        <UIProvider>
            <Router>
                <div className="App">
                    <NavBar/>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <Routes>
                            <Route path="/projectdetail" element={<ProjectDetail/>} />
                            <Route path="/projects/projectdetail" element={<ProjectDetail/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/projects" element={<ImageCollection/>} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="/" element={
                                <>
                                      <Home/>
                                     
                                    <About/>
                                    <ImageCollection/>
                                    {/*<Skills/>*/}
                                    <Contact/>
                                </>
                            } />
                        </Routes>
                    </div>
                </div>
            </Router>
        </UIProvider>
    );
}

export default App;
