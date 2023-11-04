import React from 'react'
import { Element, Link } from 'react-scroll'

import { Box } from '@mui/system';
import Progress from './reusable/progress';
import DownArrow from './reusable/downArrow';


export default function About() {
  const skills = [
    { label: "React js", value: 80 },
    { label: "Next Js", value: 80 },
    { label: "HTML", value: 75 },
    { label: "CSS", value: 70 },
    { label: "Node js", value: 60 },
  ]
  return (
    <Element name="about" className="element">

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="text-container">
              <p>
                "I'm a highly skilled ReactJS developer with 4 years of experience and a Bachelor of Engineering degree from Mumbai University. I specialize in crafting top-notch web applications, focusing on dynamic, responsive user interfaces, state management, and component-based architecture. My strong problem-solving skills and commitment to clean, maintainable code make me a valuable asset for any web development project. I stay updated with the latest industry trends to ensure solutions align with business objectives and user expectations."
              </p>
            </div>
          </div>
          <div className="section__pic-container-about">
            {skills.map((ele) => (
              <Box sx={{ flexGrow: 1, marginBlock: "2rem" }}>
                <h4>{ele.label}</h4>
                <Progress value={ele.value}></Progress>
              </Box>
            ))}
          </div>

        </div>
        <DownArrow to='experience' />
      </section>

    </Element>
  )
}
