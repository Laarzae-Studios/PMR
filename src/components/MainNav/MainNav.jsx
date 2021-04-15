/**
 * Remember your why
 * */

import React from 'react';
import { NavLink } from 'react-router-dom';

function MainNav() {
	return (
		<nav>
			<NavLink exact to='/' className="navLink" activeClassName='activeNavLink'>
				Home
			</NavLink>
			<NavLink to='/active-project' className="navLink" activeClassName='activeNavLink'>
				Active Project
			</NavLink>
			<NavLink to='/the-team' className="navLink" activeClassName='activeNavLink'>
				Meet the Team
			</NavLink>
            <NavLink to='/get-involved' className="navLink" activeClassName='activeNavLink'>
                Get Involved
            </NavLink>
		</nav>
	);
}

export default MainNav;
