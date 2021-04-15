/**
 * Remember your why
 **/

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import Components
import App from './App';

// Import main SCSS stylesheet
import './main.scss'

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);