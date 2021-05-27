/**
 * Remember your why
 **/

import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNav.css";

import laarzaeLogo from "../../images/laarzae-logo.png";

function MainNav ({collapsed}) {
    return (
        //todo: the control for setting classes based on the collapsed prop can almost certainly be improved
        <nav>
            <img
                className={collapsed ? "collapsed" : "laarzae-logo"}
                src={laarzaeLogo}
                alt="Laarzae Studios: Gaming that gives back"
            />
            <NavLink exact to="/" className={collapsed ? "collapsed navLink" : "navLink"} activeClassName="activeNavLink">
                Home
            </NavLink>
            <NavLink to="/active-project" className={collapsed ? "collapsed navLink" : "navLink"} activeClassName="activeNavLink">
                Active Project
            </NavLink>
            <NavLink to="/the-team" className={collapsed ? "collapsed navLink" : "navLink"} activeClassName="activeNavLink">
                Meet the Team
            </NavLink>
            <NavLink to="/get-involved" className={collapsed ? "collapsed navLink lastNavLink" : "navLink lastNavLink"} activeClassName="activeNavLink">
                Get Involved
            </NavLink>
        </nav>
    );
}

export default MainNav;
