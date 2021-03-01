import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
