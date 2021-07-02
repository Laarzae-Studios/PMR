import {
	lazy,
	Suspense,
} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';

// lazy import improves performance with code-splitting
const Home = lazy( () => import('./components/Home/Home') );
const ActiveProject = lazy( () => import('./components/ActiveProject/ActiveProject') );
const MeetTheTeam = lazy( () => import('./components/MeetTheTeam/MeetTheTeam') );
const GetInvolved = lazy( () => import('./components/GetInvolved/GetInvolved') );
const Cancel = lazy( () => import('./components/Cancel/Cancel') );
const ThankYou = lazy( () => import('./components/ThankYou/ThankYou') );

const App = () => {
	return (
		<Router>
			<Suspense fallback={<h2>Loading...</h2>}>
				<MainNav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/active-project" component={ActiveProject} />
					<Route exact path="/the-team" component={MeetTheTeam} />
					<Route exact path="/get-involved" component={GetInvolved} />
					<Route exact path="/cancel" component={Cancel} />
					<Route exact path="thank-you" component={ThankYou} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
