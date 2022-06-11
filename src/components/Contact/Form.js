import { useForm } from '@formspree/react';
import classes from './Contact.module.css';


const MyForm = () => {
  const [state, handleSubmit] = useForm('{your-form-id}');
  if (state.succeeded) {
    return <div style = {{color: 'white'}}>Thank you for signing up!</div>;
  }
  return (
    <div className={classes.MyForm}>  
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <button type="submit" disabled={state.submitting}>Sign up</button>
    </form>
    </div>
  )
}

export default MyForm;