import React from "react";
import routes from "./components/Info/router";
import 'normalize.css'

import { HashRouter as Router } from 'react-router-dom';
import {renderRoutes} from "react-router-config";

function User() {
  return (
    <>
        <Router>
            {renderRoutes(routes)}
        </Router>
    </>
  );
}

export default User;
