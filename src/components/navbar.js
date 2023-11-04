import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
    const menu = [
        { label: "Home", path: "heading" },
        { label: "About", path: "about" },
        { label: "Experience", path: "experience" },
        { label: "Project", path: "project" },
        { label: "Contact us", path: "contact_us" },
    ]
    const toggle = () => {
        const menu = document.querySelector('.menu-links')
        const icon = document.querySelector('.hamburger-icon')
        menu.classList.toggle('open')
        icon.classList.toggle('open')
    }
    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">Pratik Patil</div>
                <ul className="nav-links">
                    {menu.map((ele, id) => (
                        <li key={id}><Link
                            activeClass="active"
                            to={ele.path}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500} >{ele.label}</Link></li>
                    ))}
                </ul>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">Pratik Patil</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        {menu.map((ele, id) => (
                            <li key={id}><Link
                                activeClass="active"
                                to={ele.path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={toggle} >{ele.label}</Link></li>
                        ))}
                    </div>
                </div>


            </nav>
        </>
    )
}
