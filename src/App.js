import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./pages/Login/Login";
import AuthContext from "./context";
import data from "./data.json"
import Profile from "./pages/Profile/Profile";
import Premium from "./pages/Premium/Premium";
import NotFound from "./pages/404/404";
import Feed from "./pages/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import RequireLogin from "./components/RequireLogin/RequireLogin";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: "", email: "", paid: "", teacher: "" })

  useEffect(() => {
    const getUser = JSON.parse(sessionStorage.getItem("user"))
    if (getUser && getUser.email) {
      for (var user of data.users) {
        if (user.email === getUser.email) {
          setLoggedIn(true)
          setUser({ name: user.name, email: user.email, paid: user.paid, type: user.type })
          break
        }
      }
    }
  }, [])

  const login = (email, password) => {
    for (var user of data.users) {
      if (user.email === email) {
        if (user.password === password) {
          setLoggedIn(true)
          setUser({ name: user.name, email: user.email, paid: user.paid, type: user.type })
          sessionStorage.setItem("user", JSON.stringify({ email: user.email }))
          return { status: true, msg: "" };
        }
        return { status: false, msg: `Incorrect Password for ${user.email}!` };
      }
    }
    return { status: false, msg: `Email : ${email} is not registered!` };
  }

  const logout = () => {
    setLoggedIn(false)
    setUser({ name: "", email: "", paid: "", type: "" })
    sessionStorage.clear()
    window.location.pathname = "/login"
  }

  const isLoggedIn2 = () => {
    var getUser = JSON.parse(sessionStorage.getItem("user"))
    if (!getUser) { getUser = JSON.parse(localStorage.getItem("user")) }
    if (getUser && getUser.email) {
      console.log(getUser)
      for (var user of data.users) {
        if (user.email === getUser.email) {
          return true
        }
      }
    } else return false
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn2, login: login, logout: logout, user: user }}>
      <React.Fragment>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <h1>Yo</h1>
            </Route>
            <Route path="/login" exact render={(props) => (<Login {...props} />)} />
            <RequireLogin path="/profile" exact={true}>
              <Profile />
            </RequireLogin>
            <RequireLogin path="/premium" exact={true}>
              <Premium />
            </RequireLogin>
            <RequireLogin to="/feed" exact={true}>
              <Feed />
            </RequireLogin>
            <Route path="/gallery" exact>
              <h1>Gallery</h1>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    </AuthContext.Provider >
  );
}

export default App;
