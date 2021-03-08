import React from 'react'
import { Link } from 'react-router-dom'
import NavUser from './NavUser'

export default function NavBase(props) {
    return (
        <nav className="navbar bg-dark p-3 navbar-fixed-top">
            <div className="container-fluid d-flex justify-content-between p-0">
                <Link to="/" className="navbar-brand" href="#">
                    <img src={props.logo} height="50" alt="" />
                </Link>
                <div className="d-flex justify-content-evenly text-white">
                    <ul className="nav">
                        {props.children}
                        <NavUser />
                    </ul>
                    <Link to="/login" type="button" className="btn btn-success px-5 ms-3 fw-bold">Login</Link>
                    <Link to="/premium" type="button" className="btn btn-danger ms-3 fw-bold">Get Premium</Link>
                </div>
            </div>
        </nav>
    )
}
