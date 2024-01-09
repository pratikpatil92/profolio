import { Skeleton } from '@mui/material';
import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import { Element, Link } from 'react-scroll'

import DownArrow from './reusable/downArrow';


function About() {
  const { aboutMe, aboutMeLoading } = useSelector(state => state?.data)
  return (
    <Element name="about" className="element">

      <section id="about">
        <div className="mycontainer about-section">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="about-content">
            <div className="about-img">
              {aboutMeLoading ? <Skeleton variant="rectagular" width={500} height={500} /> : <img src={aboutMe?.aboutMeImg} alt="about-me" />}
            </div>
            <div className="about-description">
              {aboutMeLoading ? <Skeleton variant="rectagular" height={200} /> : <p>{aboutMe?.Description}</p>}
              <div className="about-description-detail">
                {aboutMeLoading ? <Skeleton variant="rectagular" /> : <div className="detail-experience">
                  <p>{aboutMe?.yearOfExperience}+</p>
                  <p>Year of Experience</p>
                </div>}
                {aboutMeLoading ? <Skeleton variant="rectagular" /> : <div className="detail-experience">
                  <p>{aboutMe?.numberOfProject}+</p>
                  <p>Completed Project</p>
                </div>}

              </div>
            </div>
          </div>
        </div>
      </section>

    </Element>
  )
}

export default memo(About)
