/**
 * Remember your why
 * */

import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNav.css";

import laarzaeLogo from "../../images/laarzae-logo.png";

function MainNav () {
    return (
        <nav>
            <img
                className="laarzae-logo"
                src={laarzaeLogo}
                alt="Laarzae Studios: Gaming that gives back"
            />
            <NavLink exact to="/" className="navLink" activeClassName="activeNavLink">
                Home
            </NavLink>
            <NavLink to="/active-project" className="navLink" activeClassName="activeNavLink">
                Active Project
            </NavLink>
            <NavLink to="/the-team" className="navLink" activeClassName="activeNavLink">
                Meet the Team
            </NavLink>
            <NavLink to="/get-involved" className="navLink" activeClassName="activeNavLink">
                Get Involved
            </NavLink>
        </nav>
    );
}

export default MainNav;
