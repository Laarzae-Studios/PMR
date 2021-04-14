/**
 * Remember your why
 **/

import React from 'react';

// Import ReactDOM to utilize render
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import Components
import App from './App';

// Import main CSS stylesheet
import './main.css'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);