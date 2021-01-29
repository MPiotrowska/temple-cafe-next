import React from 'react';
import { Container } from '../Container';

// styles
import styles from "./form.module.css";


export const Form = () => {
  return (
    < Container className="contactForm">
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label> <br />
        <input className={styles.formControl}type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input className={styles.formControl} type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    </Container>
  );
};


{/* <div class="contact-form">
<form id="contact-form" method="post" action="contact-form-handler.php"></form>
<input name="name" type="text" class="form-control" placeholder="Your Name" required><br>
<input name="email" type="email" class="form-control" placeholder="Your Email" required><br>
<textarea name="message" class="form-control" placeholder="Message" rows="4"></textarea><br>
<input type="submit" class="form-control submit" value="SEND MESSAGE"><br>

</div> */}


