import React, { useState } from "react"
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

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: "", email: "", paid: "", teacher: "" })

  const login = (email, password) => {
    for (var user of data.users) {
      if (user.email === email) {
        if (user.password === password) {
          setLoggedIn(true)
          setUser({ name: user.name, email: user.email, paid: user.paid, type: user.type })
          return { status: true, msg: "" };
        }
        return { status: false, msg: `Incorrect Password for ${user.email}!` };
      }
    }
    return { status: false, msg: `Email : ${email} is not registered!` };
  }

  const logout = () => {
    setLoggedIn(false)
    setUser({ name: "", email:"", paid:"",type:"" })
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout, user: user }}>
      <React.Fragment>
        <Router>
        <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <h1>Yo</h1>
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/feed" exact>
              <Feed />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/premium" exact>
              <Premium />
            </Route>
            <Route path="/gallery" exact>
              <h1>Gallery</h1>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    </AuthContext.Provider>
  );
}

export default App;
