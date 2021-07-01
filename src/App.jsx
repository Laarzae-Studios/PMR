/**
 * Remember your why
 **/
import React             from "react";
import { Route, Switch } from "react-router-dom";
import loadable from '@loadable/component';

const App = () => {
    // Import Components
    const MainNav       = loadable(() => import("./components/MainNav/MainNav"));
    const Home          = loadable(() => import("./components/Home/Home"));
    const ActiveProject = loadable(() => import("./components/ActiveProject/ActiveProject"));
    const MeetTheTeam   = loadable(() => import("./components/MeetTheTeam/MeetTheTeam"));
    const GetInvolved   = loadable(() => import("./components/GetInvolved/GetInvolved"));
    const Cancel        = loadable(() => import("./components/Cancel/Cancel"));
    const ThankYou      = loadable(() => import("./components/ThankYou/ThankYou"));

    return (
        <>
            <MainNav/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/active-project">
                    <ActiveProject/>
                </Route>
                <Route exact path="/the-team">
                    <MeetTheTeam/>
                </Route>
                <Route exact path="/get-involved">
                    <GetInvolved/>
                </Route>
                <Route exact path="/cancel">
                    <Cancel/>
                </Route>
                <Route exact path="thank-you">
                    <ThankYou/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
