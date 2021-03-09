import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavUser from './NavUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign} from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../../context'
export default function NavBase(props) {
    const authContext = useContext(AuthContext)
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
          let currentPosition = window.pageYOffset;
          if (currentPosition <= 0 ) {
            setScrolling(false);
          } else {
            setScrolling(true);
          }
          setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    return (
        <nav className={`navbar bg-dark p-3 ${scrolling?"fixed-top":"static-top"}`}>
            <div className="container-fluid d-flex justify-content-between p-0">
                <Link to="/" className="navbar-brand" href="#">
                    <img src={props.logo} height="50" alt="" />
                </Link>
                <div className="d-flex justify-content-evenly text-white align-items-center">
                    <ul className="nav d-flex align-items-center">
                        {props.children}
                        {authContext.isLoggedIn()?<NavUser />:<></>}
                    </ul>
                    {!authContext.isLoggedIn()?<Link to="/login" type="button" className="btn btn-success px-5 ms-3 fw-bold">Login</Link>:<></>}
                    {authContext.isLoggedIn()?<Link to="/premium" type="button" className="btn btn-danger ms-3 fw-bold px-3"><FontAwesomeIcon icon={faRupeeSign} /><span className="ms-1">Get Premium</span></Link>:<></>}
                </div>
            </div>
        </nav>
    )
}
