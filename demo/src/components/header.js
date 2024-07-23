import React from 'react';
export default function Header() {
	return (
		<header className='App-header'>
			<img src='./the-rock.jpg' className='myImage' alt='the-rock' />
			<h2>Nikodem Czubak</h2>
			<h4>Frontend Developer</h4>
			<h6>nikodem.website</h6>
			<button className='emailButton'>
				<i className='fa fa-envelope'></i> Email
			</button>
		</header>
	);
}
