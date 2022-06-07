import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";


const App = () => {
    return (
    <div className = "App">
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
   
        <Contact/>
    </div>
     );
}
export default App;