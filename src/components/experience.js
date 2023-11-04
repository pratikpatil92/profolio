import Image from 'next/image'
import React from 'react'
import { Element, Link } from 'react-scroll'
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import DownArrow from './reusable/downArrow';
export default function Experience() {
    const data = [
        { name: "Speridian Technology", details: "Software Engineer :-  Jan 2023 - Present" },
        { name: "Nimap Infotech", details: "Software Developer :- Jan 2021 - Dec 2022" },
        { name: "Taxgenie", details: "Software Developer :- Jan 2020 - July 2020" },
        { name: "Hudl", details: "Sport Analyst :- June 2018 - Nov 2019" },
    ]
    return (
        <Element name="experience" className="element">
            <section id="experience">
                <p className="section__text__p1">Explore my</p>
                <h1 className="title">Experience</h1>
                <div className="experience-container">
                    {data.map((ele, id) => (
                        <div className="item" key={id}>
                            <WorkRoundedIcon fontSize="large" />
                            <div className="item-details">
                                <h3>{ele.name}</h3>
                                <p >{ele.details}</p>
                            </div>
                        </div>
                    ))}


                </div>
                <DownArrow to="project" />
            </section>
        </Element>
    )
}
