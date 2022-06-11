import { FaGithub, FaLinkedin} from "react-icons/fa";
import classes from './Contact.module.css';
import MyForm from "./Form";
import PageHeader from './../PageHeader/PageHeader'



const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return ( 
    <div className = {classes.Contact} id = "contact"> 
    <PageHeader title={'Contact'}/>
        <MyForm/>
        <div className = {classes.ContactIcons}>
            <FaGithub color = 'white' size='30px' style ={{padding: '1%'}} onClick={handleURL("https://github.com/Anup-SoftwareDev")}/>
            <FaLinkedin color = 'white' size='30px' style ={{padding: '1%'}} onClick={handleURL("https://www.linkedin.com/in/anup-kuriakose-86201567/")}/>
        </div>
    </div>
     );
}
 
export default Contact;