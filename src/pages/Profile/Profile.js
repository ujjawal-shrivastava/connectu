import React, { useContext } from 'react'
import AuthContext from '../../context'
import { useHistory } from "react-router-dom"

export default function Profile() {
    const history = useHistory()
    const authContext = useContext(AuthContext)

    return (
        <div className="container-fluid d-flex flex-column bg-white m-0 p-0 h-100 justify-content-center align-items-center pt-5">
            <img className="mb-4" src={`https://ui-avatars.com/api/?name=${encodeURI(authContext.user.name)}&rounded=true&background=random`} alt="" srcset="" width={150} />
            <h1 className="h1">{authContext.user.name}</h1>
            <p className="h5">{authContext.user.email}</p>
            <p className="h5"><span class="badge bg-success mx-1">{authContext.user.type}</span><span class={`badge bg-${authContext.user.paid ? "primary" : "warning"} mx-1`}>{authContext.user.paid ? "Paid" : "Free"}</span></p>
            <div className="d-flex flex-row justify-content-center mt-5">
                {authContext.user.paid?<button className="btn btn-dark px-3 py-2 mx-2" onClick={()=>{
                    history.push("/premium")
                }}>Premium Content</button>:null}
                <button className="btn btn-danger px-5 py-2 mx-2" onClick={authContext.logout}>Logout</button>
            </div>
        </div>
    )
}
