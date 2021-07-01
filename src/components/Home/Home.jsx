/**
 * Remember your why
 **/

import React, { useEffect }                      from "react";
import { useHistory }             from "react-router-dom";

// Import stylesheet and photos
import "./Home.css";
import bannerImg from "../../images/gamingThatGivesBackBanner1.jpg";

const Home = () => {
    const history = useHistory();

    useEffect(() => {
        const image = new Image();
        image.src = "../../images/gamingThatGivesBackBanner1.jpg";
        return image;
    }, [])

    const navigateToGetInvolved = () => {
        history.push( "/get-involved" );
    }

    return (
        <section>
            <header className="screen-reader-only">
                <h1>Laarzae Studios</h1>
                <h2>Gaming That Gives Back</h2>
            </header>
            <button className='gtgb-banner-1-btn' onClick={navigateToGetInvolved}>
                <img
                    src={bannerImg}
                    alt='Click here to donate to Laarzae Studios or add your email to get updates'
                />
            </button>
        </section>
    );
}

export default Home;
