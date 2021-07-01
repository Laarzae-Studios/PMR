/**
 * Remember your why
 **/

import React, { useEffect }   from "react";

// Import stylesheet
import "./TeamMember.css";

function TeamMember ( { name, title, boringTitle, myCTA, myPassion, imgSrc } ) {
    useEffect(() => {
            const image = new Image();
            image.src = imgSrc;
            return image;
    }, [imgSrc])

    return (
        <figure className='member-container'>
            <img src={imgSrc} alt={name}/>
            <figcaption className={"member-info-container"}>
                <hgroup>
                    <h2>{name}</h2>
                    <h3>{title}</h3>
                    <h4>{boringTitle}</h4>
                </hgroup>
                <details>
                    <summary>What Motivates Me</summary>
                    <h2>What Laarzae Means to Me: </h2>
                    <p>{myCTA}</p>
                    <h2>Why I Code: </h2>
                    <p>{myPassion}</p>
                </details>
                <button>Popover with Socials</button>
            </figcaption>
        </figure>
    );
}

export default TeamMember;
