import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./components/Appointment/Appoinment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
  <h1>{loggedInUser.email}</h1>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
