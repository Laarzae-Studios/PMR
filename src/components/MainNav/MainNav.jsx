/**
 * Remember your why
 *
 * @format
 * */
// Import React every .js file
import React from 'react';

// Import NavLink for Nav that works with Routes
import { NavLink } from 'react-router-dom';

function MainNav() {
	return (
		<nav>
			<NavLink exact to='/' activeClassName='activeNavLink'>
				Home
			</NavLink>
			<NavLink to='/active-project' activeClassName='activeNavLink'>
				Active Project
			</NavLink>
			<NavLink to='/the-team' activeClassName='activeNavLink'>
				Meet the Team
			</NavLink>
		</nav>
	);
}

export default MainNav;
