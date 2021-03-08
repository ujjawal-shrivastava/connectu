import React, { useContext } from 'react'
import logo from '../../assets/images/logoi.svg'
import NavbarLink from './NavbarLink'
import NavBase from './NavBase'
import AuthContext from '../../context'
import { useLocation } from 'react-router'
export default function Navbar() {
    const disabledRoutes = ["/login",]
    const location = useLocation()
    const authContext = useContext(AuthContext)

    if(disabledRoutes.includes(location.pathname)) return (<></>)
    return (
        <NavBase logo={logo}>
            {authContext.isLoggedIn?<NavbarLink to="/feed" text="Feed" />:<></>}
            <NavbarLink to="/gallery" text="Gallery"/>
            <NavbarLink to="/about" text="About"/>
            <NavbarLink to="https://rlacollege.edu.in" text="College Site" ext={true}/>
        </NavBase>
    )
}
