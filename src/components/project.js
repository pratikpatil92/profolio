import React from 'react'
import { Element } from 'react-scroll'
import DownArrow from './reusable/downArrow'

export default function Project() {
    return (
        <Element name="project" className="element">
            <section id="project">
                <p className="section__text__p1">Browse my recent</p>
                <h1 className="title">Projects</h1>
                <div className="project-container">
                    <p><b>Important Note:</b> Please be aware that I have worked on several projects for my current company, which are confidential and cannot be shared on this public portfolio website.
                        However, you can download my resume or visit Linkedin for detailed information about these projects, including my role, contributions, and the technologies used.
                        Feel free to contact me if you have any questions or would like to discuss these projects further.
                    </p>
                </div>
                <DownArrow to="contact_us" />
            </section>
        </Element>
    )
}
