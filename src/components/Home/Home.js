/**
 * Remember your why
 *
 * @format
 * */
// Import React every .js file
import React from 'react';

// Import photos
import laarzaeLogo from '../../photos/laarzae-logo.png';

function Home() {
	return (
		<section>
			<header className='screen-reader-only'>
				<h1>Laarzae Studios</h1>
				<h2>Gaming That Gives Back</h2>
			</header>
			<img src={laarzaeLogo} alt='Laarzae Studios: Gaming that gives back' />
		</section>
	);
}

export default Home;
