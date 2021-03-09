import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from '../../context'
export default function RequireLogin(props) {
    const authContext = useContext(AuthContext)
    if (authContext.isLoggedIn()) return (
        <Route path={props.to} exact={props.exact}>
            {props.children}
        </Route>
    )
    return (
        <Route path={props.to} exact={props.exact}>
            <Redirect to={{ pathname: "/login", state: { next: props.to } }} />
        </Route>
    )
}
