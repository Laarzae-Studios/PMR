/**
 * Remember your why
 *
 * @format
 * */
// Import React every .js file
import React from 'react';

// Import components
import TeamMember from './TeamMember';

// Import data for team
import theTeam from '../../data/theTeam';

function MeetTheTeam() {
	return (
		<section>
			{theTeam.map((teamMate) => {
				<TeamMember
					name={teamMate.name}
					title={teamMate.title}
					boringTitle={teamMate.boringTitle}
					myCTA={teamMate.myCTA}
					myPassion={teamMate.myPassion}
					imgSrc={teamMate.imgSrc}
				/>;
			})}
		</section>
	);
}

export default MeetTheTeam;
