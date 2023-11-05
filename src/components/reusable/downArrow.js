import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link } from 'react-scroll';

export default function DownArrow(props) {
    return (
        <Link to={props.to}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}><KeyboardDoubleArrowDownIcon fontSize="large" className="arrow" /></Link>
    )
}
