import React, { useState, useContext } from "react"
import { Redirect } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import AuthContext from "../../context"
import './Login.css'


export default function Login() {
    const [state, setState] = useState({
        email: "",
        password: "",
        remember: false,
        error: ""
    })

    const authContext = useContext(AuthContext)

    const validate = () => {
        if (state.email) {
            if (state.password) return true
            else {
                setState({...state, error:"Password is required!"})
                return false
            }
        } else {
            setState({...state, error:"Email is required!"})
            return false
        }
    }

    const submit = () => {
        if (!validate()) return
        console.log(JSON.stringify({
            email: state.email,
            password: state.password
        }))
        const {status, msg} = authContext.login(state.email, state.password)
        if(!status) {
            setState({...state, error:msg, password:""})
            return
        }
        setState({email:"",password:"",remember:false,error:""})
    }

    if(authContext.isLoggedIn) return (<Redirect to="/profile" />)

    return (
        <div className="container-fluid d-flex flex-row justify-content-center align-items-center m-0 p-0 vh-100 background">
            <div className="card h-auto d-flex flex-column  p-5" style={{width:"35%"}}>
            <img className="mb-2" src={logo} alt="ConnectU" width={300} />
                <p className="h5 text-black-50 my-3">Sign into your account!</p>
                {state.error ? 
                <div className="alert alert-danger w-75 mt-3" role="alert">
                    {state.error}
                </div> : null}
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    submit()
                    }}>
                    <div className="form-group my-3">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control mt-1 w-100" id="email" value={state.email} onChange={(e) => { setState({ ...state, email: e.target.value }) }} />
                    </div>
                    <div className="form-group my-3">
                        <label for="password ">Password</label>
                        <input type="password" className="form-control mt-1 w-100" id="password" value={state.password} onChange={(e) => { setState({ ...state, password: e.target.value }) }} />
                    </div>
                    <div className="form-group form-check my-3">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label text-muted" for="remember">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-success mt-1 px-5 py-2">Login</button>
                </form>
                <div className="w-100 mt-5 d-flex flex-row justify-content-between">
                    <div>
                        <p className="text-muted">Need Help? <a className="text-reset" href="#" target="_blank" rel="noopener noreferrer">Contact Administrator</a></p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
