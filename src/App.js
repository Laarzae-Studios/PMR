/**
 * Remember your why
 *
 * @format
 * */
// Import React every .js file
import React from 'react';

// Import useState to pass props from data through components
import { useState } from 'react-dom';

// Import Switch, Route for dynamic "server-less" page
import { Switch, Route } from 'react-router-dom';

// Import Components
import MainNav from './components/MainNav/MainNav';
import Home from './components/Home/Home';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';

// Import data to set state
import theTeam from './components/data/theTeam';

// Import style sheet
import './App.css';
import './screen-reader-only.css';

function App() {
	// const [teamMemberStats, setTeamMemberStats] = useState(theTeam);

	return (
		<section className='App'>
			<MainNav />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/the-team'>
					{/* <MeetTheTeam /> */}
				</Route>
			</Switch>
		</section>
	);
}

export default App;
