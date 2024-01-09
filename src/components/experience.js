import Image from 'next/image'
import React, { memo } from 'react'
import { Element, Link } from 'react-scroll'
// import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { border } from '@mui/system';
import { useSelector } from 'react-redux';
import { Chip, Skeleton } from '@mui/material';



function Experience() {

    const { exprienceData, exprienceLoading } = useSelector(state => state.data)

    return (
        <Element name="experience" className="element">
            <section id="experience">
                <div className="mycontainer experience-container">
                    <p className="section__text__p1">Explore my</p>
                    <h1 className="title">Experience</h1>
                    {exprienceLoading ? <Skeleton variant="rounded" width={210} height={60} /> :
                        <VerticalTimeline lineColor="#000">
                            {exprienceData.map((ele, index) => {
                                const { attributes } = ele
                                return (
                                    <VerticalTimelineElement
                                        key={index}
                                        visible={true}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#e9f5f8', color: '#000' }}
                                        contentArrowStyle={{ borderRight: '7px solid  #e9f5f8', width: "20rem" }}
                                        date={attributes?.duration}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={<WorkIcon />}
                                    >
                                        <h3 className="vertical-timeline-element-title">{attributes?.companyName}</h3>
                                        <h5 className="vertical-timeline-element-subtitle">{attributes?.location}</h5>
                                        <p>
                                            {attributes?.position}
                                        </p>
                                        <p className="text-sm font-bold">Technologies:</p>
                                        <div >
                                            {attributes?.technologies.map((ele, index) => (
                                                <Chip style={{ marginLeft: ".5rem", marginBottom: ".5rem" }} key={index} label={ele} />
                                            ))}
                                        </div>
                                    </VerticalTimelineElement>
                                )
                            })}


                        </VerticalTimeline>}
                </div>
            </section>
        </Element>
    )
}

export default memo(Experience)
