/**
 * Remember your why
 **/
import React from "react";

// Import components
import TeamMember from "./TeamMember/TeamMember.jsx";

// Import data for team
import theTeam from "../../data/theTeam";

// Import stylesheet
import "./MeetTheTeam.css";

function MeetTheTeam () {
    return (
        <section className="meet-the-team">
            {theTeam.map( ( teamMate, index ) => {
                return <TeamMember
                    key={index}
                    name={teamMate.name}
                    title={teamMate.title}
                    boringTitle={teamMate.boringTitle}
                    myCTA={teamMate.myCTA}
                    myPassion={teamMate.myPassion}
                    imgSrc={teamMate.imgSrc}
                />;
            } )}
        </section>
    );
}

export default MeetTheTeam;
