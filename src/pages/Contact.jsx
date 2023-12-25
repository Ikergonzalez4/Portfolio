import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Ok from '../components/Form/ReplyForm/ok/Ok';
import Error from '../components/Form/ReplyForm/error/Error';
import '../styles/Contact.css';

function Contact() {
    const [emailSent, setEmailSent] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_goedhaa', 'template_5t3kvxs', e.target, '9uKxY3sDB_Y3cwPLW')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
            }, (error) => {
                console.log(error.text);
                setEmailSent(false);
            });
    }

    return (
        <div className="contact-container">
            {emailSent === true && <Ok />}
            {emailSent === false && <Error />}
            <form className="contact-form" onSubmit={sendEmail}>
                <h1>Contact Form</h1>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;