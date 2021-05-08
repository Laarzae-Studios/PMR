/**
 * Remember your why
 **/

import React                      from "react";
import { useHistory }             from "react-router-dom";

// Import stylesheet and photos
import "./Home.css";
import gamingThatGivesBackBanner1 from "../../images/gamingThatGivesBackBanner1.jpg";

function Home () {
    const history = useHistory();

    function navigateToGetInvolved () {
        history.push( "/get-involved" );
    }

    return (
        <section>
            <header className="screen-reader-only">
                <h1>Laarzae Studios</h1>
                <h2>Gaming That Gives Back</h2>
            </header>
            <button className='gtgb-banner-1-btn' title='Get Involved' onClick={navigateToGetInvolved}>
                <img className="gtgb-banner-1" src={gamingThatGivesBackBanner1} alt='Click here to donate and be a gamer that gives back' />
            </button>
        </section>
    );
}

export default Home;
