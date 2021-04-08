/**
 * Remember your why
 *
 * @format
 * */
// Import React every .js file
import React from 'react';

// Import Switch, Route, NavLink, Link for dynamic components
import { Switch, Route, NavLink, Link } from 'react-router-dom';

// Import Components
import Home from './components/Home/Home';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';

// Import style sheet
import './App.css';
import './screen-reader-only.css';

function App() {
	return (
		<section className='App'>
			<header className='screen-reader-only'>
				<h1>Laarzae Studios</h1>
				<h2>Gaming That Gives Back</h2>
			</header>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/the-team'>Meet the Team</NavLink>
			</nav>
			<Switch>
				<Route exact path='/'>
					{/* <Home /> */}
				</Route>
				<Route exact path='/the-team'>
					{/* <MeetTheTeam /> */}
				</Route>
			</Switch>
		</section>
	);
}

export default App;
