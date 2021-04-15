/**
 * Remember your why
 **/
import React from "react";
import {Switch, Route} from "react-router-dom";

// Import Components
import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Home/Home";
import ActiveProject from "./components/ActiveProject/ActiveProject";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import GetInvolved from "./components/GetInvolved/GetInvolved";

// Import data for team
// import theTeam from "./data/theTeam";

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
                <Route exact path='/get-involved'>
                    <GetInvolved/>
                </Route>
            </Switch>
        </section>
    );
}

export default App;
