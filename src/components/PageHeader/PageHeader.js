import classes from './PageHeader.module.css';

const PageHeader = (props) => {
    return ( 
        <div className ={classes.Container}>
            {/*<hr/>*/}
            <div className = {classes.Pageheader}>
                <div>{props.title}</div>
            </div>
        </div>

     );
}
 
export default PageHeader;