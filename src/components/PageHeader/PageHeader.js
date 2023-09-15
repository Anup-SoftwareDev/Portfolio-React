import classes from './PageHeader.module.css';

const PageHeader = (props) => {
    return ( 
        <div className ={classes.Container}>
            <hr/>
            <div className = {classes.Pageheader}>{props.title}</div>
        </div>

     );
}
 
export default PageHeader;