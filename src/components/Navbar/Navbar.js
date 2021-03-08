import React from 'react'
import logo from '../../assets/images/logoi.svg'
import NavbarLink from './NavbarLink'
import NavBase from './NavBase'
export default function Navbar() {
    return (
        <NavBase logo={logo}>
            <NavbarLink to="/about" text="About"/>
            <NavbarLink to="/gallery" text="Gallery"/>
            <NavbarLink to="https://rlacollege.edu.in" text="College Site" ext={true}/>
        </NavBase>
    )
}
