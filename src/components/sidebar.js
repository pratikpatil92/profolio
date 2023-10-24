import Image from 'next/image'
import React from 'react'
import Menu from './menu'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="title">
            <Image src="/img/profile.png" width="150" height="150" alt="me"></Image>
            <h2>Pratik Patil</h2>
            <h4>Software Engineer(Web) at Speridian Technology</h4>
            <p>I will built and maintain websites and web applications using Reactjs(HTML, CSS) </p>
        </div>
        <Menu/>
    </div>
  )
}
