import React from "react";
import Info from "./components/Info/Info.jsx";
import Login from "./components/Login/Login.jsx";

import "./normalize.css";

import { HashRouter as Router, Route } from 'react-router-dom';

function User() {
  return (
    <>
        <Router>
                <Route path="/" exact component={Info} />
                <Route path="/login" component={Login}/>
        </Router>
    </>
  );
}

export default User;
