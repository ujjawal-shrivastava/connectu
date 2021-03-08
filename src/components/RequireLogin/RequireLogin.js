import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from '../../context'
export default function RequireLogin(props) {
    const authContext = useContext(AuthContext)
    return (
        <Route path={props.to} exact={props.exact}>
            {authContext.isLoggedIn?props.children:<Redirect to={{pathname:"/login", state:{next:props.to}}} />}
        </Route>
    )
}
