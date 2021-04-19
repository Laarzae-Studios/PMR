/**
 * Remember your why
 * */

import React from "react";

// Import stylesheet
import "./TeamMember.css";

function TeamMember ( { name, title, boringTitle, myCTA, myPassion, imgSrc } ) {

    return (
        <figure>
            <img className="mug-shot" src={imgSrc} alt={name}/>
            <figcaption className={"member-fig-cap"}>
                <hgroup>
                    <h2>{name}</h2>
                    <h3 className="text-muted">{title}</h3>
                    <h4 className="subtitle text-muted">{boringTitle}</h4>
                </hgroup>
                <details>
                    <span className="myCTA">What Laarzae Means to Me: </span>
                    {myCTA}
                    <br/>
                    <span className="myPassion">Why I Code: </span>
                    {myPassion}
                </details>
                <button className={"popover-btn"}>Popover with Socials</button>
            </figcaption>
        </figure>
    );
}

export default TeamMember;
