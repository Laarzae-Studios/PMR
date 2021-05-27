/**
 * Remember your why
 **/
import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";

import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Home/Home";
import ActiveProject from "./components/ActiveProject/ActiveProject";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import GameDemo from "./components/GameDemo/GameDemo";
import Cancel from "./components/Cancel/Cancel";


function App() {
    //todo: this should be kept in global state when we set that up
    const [collapsedNav, setCollapsedNav] = useState(false);


    return (
        <>
            <MainNav collapsed={collapsedNav}/>
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
                <Route exact path='/demo'>
                    <GameDemo setCollapsedNav={setCollapsedNav}/>
                </Route>
                <Route exact path='/cancel'>
                    <Cancel />
                </Route>
            </Switch>
        </>
    );
}

export default App;
