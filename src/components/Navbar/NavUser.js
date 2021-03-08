import React from 'react'
import { Link } from 'react-router-dom'

export default function NavUser() {
    return (
        <>
        <li className="nav-item dropdown fw-bold">
          <a className="nav-link dropdown-toggle text-decoration-none text-white " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ujjawal Shrivastava
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/profile" className="dropdown-item">My Profile</Link></li>
            <li><Link to="/connections" className="dropdown-item">My Connections</Link></li>
            <li><hr className="dropdown-divider bg-grey"/></li>
            <li><Link to="/settings" className="dropdown-item">Settings</Link></li>
            <li><Link to="/help" className="dropdown-item">Need Help?</Link></li>
            <li><hr className="dropdown-divider bg-grey"/></li>
            <li><button className="dropdown-item fw-bold">Logout</button></li>
          </ul>
        </li>
        </>
    )
}
