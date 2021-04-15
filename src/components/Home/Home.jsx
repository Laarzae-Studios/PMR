/**
 * Remember your why
 * */

import React from "react";

// Import stylesheet and photos
import "./Home.css";
import laarzaeLogo from "../../images/laarzae-logo.png";

function Home () {
    return (
        <section>
            <header className="screen-reader-only">
                <h1>Laarzae Studios</h1>
                <h2>Gaming That Gives Back</h2>
            </header>
            <img
                className="laarzae-logo"
                src={laarzaeLogo}
                alt="Laarzae Studios: Gaming that gives back"
            />
        </section>
    );
}

export default Home;
