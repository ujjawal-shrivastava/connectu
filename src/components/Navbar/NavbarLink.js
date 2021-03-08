import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarLink(props) {
    return (
        <li className="nav-item">
            {props.ext ? <a href={props.to} className="nav-link text-decoration-none text-white fw-bold" target="_blank" rel="noopener">{props.text}</a> : <Link className="nav-link text-decoration-none text-white fw-bold" to={props.to}>{props.text}</Link>}

        </li>
    )
}
