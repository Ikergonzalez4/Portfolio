import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Ok from '../components/Form/ReplyForm/ok/Ok';
import Error from '../components/Form/ReplyForm/error/Error';
import '../styles/Contact.css';

function Contact() {
    const [emailSent, setEmailSent] = useState(null);
    const [isOkOpen, setIsOkOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('alreadyReloaded')) {
            localStorage.setItem('alreadyReloaded', true);
            window.location.reload();
        }
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_goedhaa', 'template_5t3kvxs', e.target, '9uKxY3sDB_Y3cwPLW')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
                setIsOkOpen(true);
            }, (error) => {
                console.log(error.text);
                setEmailSent(false);
            });
    }

    const handleClose = () => {
        setIsOkOpen(false);
    }

    return (
        <div className="contact-container">
            {emailSent === true && isOkOpen && <Ok onClose={handleClose} />}
            {emailSent === false && <Error />}
            <form className="contact-form" onSubmit={sendEmail}>
                <h1>Contact Form</h1>
                <div className="input-field">
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="email">Email:</label>
                </div>
                <div className="input-field">
                    <textarea id="message" name="message" required />
                    <label htmlFor="message">Message:</label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;