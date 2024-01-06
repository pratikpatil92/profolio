import Image from 'next/image'
import React from 'react'
import { Element } from 'react-scroll'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    return (
        <Element name="contact_us" className="element">
            <section id="contact">
                <p className="section__text__p1">Get In Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contatct-info-upper-container">
                    <div className="contact-info-container">
                        <Image src="/img/email.png" width="40" height="40" className="icon contact-icon email-icon" alt='mail' />
                        <p><a href="mailto:pratikpatil062@gmail.com">pratikpatil062@gmail.com</a></p>
                    </div>
                    <div className="contact-info-container">
                        <Image src="/img/linkedin.png" width="40" height="40" className="icon contact-icon" alt='linkdin' />
                        <p><a href="https://www.linkedin.com/in/pratikpatil0892/">LinkedIn</a></p>
                    </div>
                </div>
            </section>
        </Element>

    )
}
