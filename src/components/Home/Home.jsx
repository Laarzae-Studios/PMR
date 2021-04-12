/**
 * Remember your why
 *
 * @format
 * */
import React from 'react';

// Import photos
import laarzaeLogo from '../../images/laarzae-logo.png';

function Home() {
	return (
		<section>
			<header className='screen-reader-only'>
				<h1>Laarzae Studios</h1>
				<h2>Gaming That Gives Back</h2>
			</header>
			<img
				className='laarzae-logo'
				src={laarzaeLogo}
				alt='Laarzae Studios: Gaming that gives back'
			/>
		</section>
	);
}

export default Home;
