/**
 * Remember your why
 **/

import React                       from "react";
import { render }                  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Import stylesheet and Components
import "./index.css";
import App                         from "./App";

render(
    <Router>
        <App/>
    </Router>,
    document.getElementById( "root" ),
);