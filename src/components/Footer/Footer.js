import React from 'react'
import { useLocation } from 'react-router'

export default function Footer() {
    const disabledRoutes = ["/login",]
    const location = useLocation()

    if(disabledRoutes.includes(location.pathname)) return (<></>)
    return (
        <div className="w-100 bg-dark m-0 py-2 d-flex justify-content-center align-items-center" style={{bottom:0,left:0}}>
            <p className="text-white m-0">&copy;2021 - Group 7 | Department of Computer Science | Ram Lal Anand College </p>
        </div>
    )
}
