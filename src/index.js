/** @format */
// Import React every .js file
import React from 'react';

// Import ReactDOM to utilize render
import ReactDOM from 'react-dom';

// Import BrowserRouter to utilize Route, Link, NavLink on child pages for dynamic site
import { BrowserRouter as Router } from 'react-router-dom';

// Import Components
import App from './App';

// Diagnostics
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
