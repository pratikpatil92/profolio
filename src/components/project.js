import { Chip } from '@mui/material'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Element } from 'react-scroll'
import DownArrow from './reusable/downArrow'

function Project() {
    const { projectData, projectLoading } = useSelector(state => state?.data)

    return (
        <Element name="project" className="element">
            <section id="project">
                <div className="mycontainer project-section">
                    <p className="section__text__p1">Browse my recent</p>
                    <h1 className="title">Projects</h1>
                    <p><b>Important Note:</b> Please be aware that I have worked on several projects for my current company, which are confidential and cannot be shared on this public portfolio website.
                    </p>
                    <div className="project-container">
                        {projectData?.map((ele, index) => {
                            const { attributes } = ele
                            return (
                                <div key={index} className="project-card">
                                    <h2>{attributes.name}</h2>
                                    <ul>
                                        {attributes._description.map((de, id) => (
                                            <li key={id}>
                                                {de}
                                            </li>
                                        ))}
                                    </ul>
                                    <h4>Technologies:</h4>
                                    <div>
                                        {attributes?._technologies?.map((tech, idt) => (
                                            <Chip style={{ marginLeft: ".5rem", marginBottom: ".5rem" }} key={idt} label={tech} />
                                        ))}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </Element>
    )
}

export default memo(Project)