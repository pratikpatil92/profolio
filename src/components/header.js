import Image from 'next/image'
import React, { memo, useEffect } from 'react'
import { Element, Link } from 'react-scroll'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';


function Header() {
    const { greeting, loadingGreeting } = useSelector(state => state?.data)

    return (
        <Element name="heading" className="element">
            <section id="profile">
                <div className="mycontainer header-container">
                    <div className="section__pic-container">
                        {loadingGreeting ? <Skeleton variant="circular" width={300} height={300} /> : <img src={greeting?.profileImg} width={300} height={300} alt="pratik patil profile pic"></img>}
                    </div>
                    <div className="section__text">
                        {loadingGreeting ? <Skeleton /> : <p className="section__text__p1">{greeting?.greetings}</p>}
                        {loadingGreeting ? <Skeleton /> : <h1 className="title">{greeting?.name}</h1>}
                        {loadingGreeting ? <Skeleton /> : <p className="section__text__p2">{greeting?.position}</p>}

                        <div className="btn-container">
                            {loadingGreeting ? <Skeleton variant='rectangular' /> : <button className="btn btn-color-2" onClick={() => window.open('/pdf/PratikPatil_resumenew.pdf')}>Download CV</button>}
                            {loadingGreeting ? <Skeleton variant='rectangular' /> : <button className="btn btn-color-1"><Link to="contact_us" spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}> Contact me</Link></button>}
                        </div>
                        <div id="socials-container">
                            {loadingGreeting ? <Skeleton variant='circular' /> : <LinkedInIcon className="icon" />}
                            {loadingGreeting ? <Skeleton variant='circular' /> : <GitHubIcon className="icon" />}
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default memo(Header)
