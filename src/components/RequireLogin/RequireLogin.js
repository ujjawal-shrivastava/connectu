import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from '../../context'
export default function RequireLogin({path,component:Component ,exact}) {
    const authContext = useContext(AuthContext)
    return (
        <Route path={path} exact={exact} render={(props)=>{
            if (authContext.isLoggedIn()) return (<Component />)
            else return (<Redirect to={{ pathname: "/login", state: { next: path } }} />)
        }} />
    )
}
