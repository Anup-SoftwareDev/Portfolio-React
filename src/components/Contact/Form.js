import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import classes from './Contact.module.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjdalo");
 // if (state.succeeded) {
   //   return <p>Thanks for joining!</p>;
  //}
  return (
    <div className = {classes.MyForm} >
      <form onSubmit={handleSubmit}>
      <div className = {classes.Email}>
        <label htmlFor="email">
          Email Address
        </label>
        {state.succeeded?
        <input
          id=""
          type="" 
          name=""
          value = ""
        />:
        <input
          id="email"
          type="email" 
          name="email"
        />
        }
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
       </div> 

       <div className={classes.Message}> 
            <label htmlFor="email">
              Message
            </label>
            {state.succeeded?
            <textarea
              id=""
              name=""
              value=""
            />:
            <textarea
            id="message"
            name="message"
            />}
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
       </div> 
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      {state.succeeded&&
      <p>Thank you for the message. I will get back to you shortly!</p>}
    </form>
    </div>
  );
}

export default ContactForm;