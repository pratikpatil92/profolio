import Image from 'next/image'
import React from 'react'
import { Element, Link } from 'react-scroll'
// import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkIcon from '@mui/icons-material/Work';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { border } from '@mui/system';



export default function Experience() {

    return (
        <Element name="experience" className="element">
            <section id="experience">
                <div className="mycontainer experience-container">
                    <p className="section__text__p1">Explore my</p>
                    <h1 className="title">Experience</h1>
                    <VerticalTimeline lineColor="#000">
                        <VerticalTimelineElement
                            visible={true}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#000', border: ".5px solid #000" }}
                            contentArrowStyle={{ borderRight: '7px solid  #000' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
            </section>
        </Element>
    )
}
