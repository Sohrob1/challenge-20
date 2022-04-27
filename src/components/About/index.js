import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/profile-pic.jpg')}
					alt="SohrobPic"
					className="photo"
				/>
			</div>
			<div>
				<p>
				Hello, my name is Sohrob Ganjbaksh and I am a junior fullstack developer. 
				</p>
			</div>
		</section>
	);
}

export default About;