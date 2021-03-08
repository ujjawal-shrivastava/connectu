import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCog, faQuestion, faUsers, faUser} from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../../context'
export default function NavUser() {
    const authContext = useContext(AuthContext)
    return (
        <>
        <li className="nav-item dropdown fw-bold">
          <span className="nav-link dropdown-toggle text-decoration-none text-white "id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {authContext.user.name}
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/profile" className="dropdown-item"><FontAwesomeIcon icon={faUser} /><span className="ms-2">Profile</span></Link></li>
            <li><Link to="/connections" className="dropdown-item"><FontAwesomeIcon icon={faUsers} /><span className="ms-2">Connections</span></Link></li>
            <li><hr className="dropdown-divider bg-grey"/></li>
            <li><Link to="/settings" className="dropdown-item"><FontAwesomeIcon icon={faCog} /><span className="ms-2">Settings</span></Link></li>
            <li><Link to="/help" className="dropdown-item"><FontAwesomeIcon icon={faQuestion}/><span className="ms-2">Need Help?</span></Link></li>
            <li><hr className="dropdown-divider bg-grey"/></li>
            <li onClick={authContext.logout} ><button className="dropdown-item fw-bold"><FontAwesomeIcon icon={faSignOutAlt}/><span className="ms-2">Logout</span></button></li>
          </ul>
        </li>
        </>
    )
}
