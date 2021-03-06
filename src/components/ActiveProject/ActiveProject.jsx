/**
 * Remember your why
 **/
import React, { useEffect } from "react";

// Import stylesheets and photos
import './ActiveProject.css'
import projectMageLogo from "../../images/project-mage-logo.png";

function ActiveProject () {
    useEffect(() => {
        const image = new Image();
        image.src = "../../images/gamingThatGivesBackBanner1.jpg";
    }, [])

    return (
        <section>
            <header className="screen-reader-only">
                <h2>Project Mage</h2>
                <h3>What Would You Do?</h3>
                <h2>Laarzae Studios</h2>
            </header>
            <img
                className="project-mage-logo"
                src={projectMageLogo}
                alt="Project Mage: What would you do?"
            />
        </section>
    );
}

export default ActiveProject;
