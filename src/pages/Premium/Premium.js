import React, { useContext } from 'react'
import AuthContext from '../../context'

export default function Premium() {
    const authContext = useContext(AuthContext)
    if (!authContext.user.paid) return (
        <div className="container-fluid d-flex flex-column bg-white m-0 p-4 h-100 justify-content-center align-items-center">
            <img className="mb-4" src="https://icon-library.com/images/error-icon-transparent/error-icon-transparent-13.jpg" alt="" srcset="" width={150} />
            <h1 className="h1">You are not authorized to access this page!</h1>
            <p>Enroll for paid subscription to access this page..!</p>
        </div>
    )

    return (
        <div className="container-fluid d-flex flex-column bg-white m-0 p-0 vh-100 justify-content-center align-items-center">
            <img className="mb-4" src="https://lh3.googleusercontent.com/proxy/Oh3hFaXmo00Q2sNMgNdtushXMiapPvQ84UVc2c2hGi09XsFjpQPgMvSx__zJnYEMD1b0nY5CRkGb2RIux0vAiDJ_g9YPPfkbkRcuu5D5h4jGsMIFZOntOGOuXIyONR474Q" alt="" srcset="" width={200} />
            <h1 className="h1">Some protected paid content!</h1>
            <p>Awesome you are a Pro User!</p>
        </div>
    )
}