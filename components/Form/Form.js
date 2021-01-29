import React from 'react';
import { Container } from '../Container';

// styles
import styles from "./form.module.css";


export const Form = () => {
  return (
    < Container className={styles.half}>
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label> <br />
        <input className={styles.formControl} type="text" name="name" id="yourname"  required/>
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input className={styles.formControl} type="email" name="email" id="youremail" required />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea className={styles.messageControl} name="message" id="yourmessage" rows="4"></textarea>
      </p>
      <p>
        <button className={styles.submitButton} type="submit">Send Message</button>
      </p>
    </form>
    </Container>
  );
};




