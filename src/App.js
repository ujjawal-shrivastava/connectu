import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
  const [user, setUser] = useState({ name: "", email: "", paid: "", teacher: "" })
  document.body.style.backgroundColor = "#dcdde1"
  useEffect(() => {
    const getUser = JSON.parse(sessionStorage.getItem("user"))
    if (getUser && getUser.email) {
      for (var user of data.users) {
        if (user.email === getUser.email) {
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
    setUser({ name: "", email: "", paid: "", type: "" })
    sessionStorage.clear()
    window.location.pathname = "/login"
  }

  const isLoggedIn = () => {
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
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout, user: user }}>
      <React.Fragment>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <h1>Home</h1>
            </Route>
            <Route path="/gallery" exact>
              <h1>Gallery</h1>
            </Route>
            <Route path="/about" exact>
              <h1>About</h1>
            </Route>
            <Route path="/login" exact render={(props) => (<Login {...props} />)} />
            <RequireLogin path="/profile" component={Profile} exact={true} />
            <RequireLogin path="/premium" component={Premium} exact={true}  />
            <RequireLogin path="/feed"  component={Feed} exact={true}  />
            <Route path="*">
              <NotFound />
            </Route> 
          </Switch>
        </Router>
      </React.Fragment>
    </AuthContext.Provider >
  );
}

export default App;
