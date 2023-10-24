import Link from 'next/link'
import React from 'react'

export default function Menu() {
    const menu =[
        {label:"About",path:"#"},
        {label:"Experience",path:"#experience"},
        {label:"Project",path:"#Project"},
        {label:"Skills",path:"#skill"},
        {label:"Contact",path:"#contact"},

    ]
  return (
    <div className="menu">
        <ul>
            {menu.map((ele,index)=>(
                <li key={index}>
                <Link href={ele.path}>{ele.label}</Link>
            </li>
            ))}
            
        </ul>
        
    </div>
  )
}
