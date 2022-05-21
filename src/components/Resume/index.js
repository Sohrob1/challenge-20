
import React from "react";

function Resume() {
	return (
		<section className="resume-items">
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div>
				<h5>Front-End</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>Java</li>
				</ol>
				<br></br>
				<h5>Back-End</h5>
				<ol>
                    <li>REST</li>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tools</h5>
				<ol>
                    <li>npm</li>
					<li>Git</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h5>Databases</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;