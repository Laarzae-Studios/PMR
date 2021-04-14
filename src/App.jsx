/**
 * Remember your why
 *
 * @format
 * */
import React from "react";

// Import Switch, Route for dynamic "server-less" page
import {Switch, Route} from "react-router-dom";

// Import Components
import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Home/Home";
import ActiveProject from "./components/ActiveProject/ActiveProject";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";

// Import data for team
import theTeam from "./data/theTeam";

// Import style sheet
import "./App.css";
import "./screen-reader-only.css";

function App() {
    return (
        <section className='App'>
            <MainNav/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/active-project'>
                    <ActiveProject/>
                </Route>
                <Route exact path='/the-team'>
                    <MeetTheTeam/>
                </Route>
            </Switch>
        </section>
    );
}

export default App;
