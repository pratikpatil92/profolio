import Image from 'next/image'
import React from 'react'
import { Element } from 'react-scroll'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
    return (
        <Element name="heading" className="element">
            <section id="profile">
                <div className="section__pic-container">
                    <Image src="/img/profile_pic.png" width={300} height={300} alt="pratik patil profile pic"></Image>
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello I'm</p>
                    <h1 className="title">Pratik Patil</h1>
                    <p className="section__text__p2">Web Developer</p>

                    <div className="btn-container">
                        <button className="btn btn-color-2">Download CV</button>
                        <button className="btn btn-color-1">Contact me</button>
                    </div>
                    <div id="socials-container">
                        <LinkedInIcon className="icon" />
                        <GitHubIcon className="icon" />
                    </div>
                </div>
            </section>
        </Element>
    )
}
