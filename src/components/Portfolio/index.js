import React from 'react';


function Portfolio() {
	const projects = [
		{
			name: 'Buzzerbeater ',
			description:
            'Get the latest basketball updates and interact with users by creating blog posts and commenting on other posts as well. Save threads that interest you to your bookmarks for easy acess. Also search by dates to pull up current or past threads that you may have missed.',
			image: 'src/assets/buzzerbeaterPic.png',
			technologies: [
				'HTML/CSS, ',
				'JavaScript, ',
				'Node.js, ',
				'Heroku, ',
                'Express, ',
                'Express-handlebars, ',
                'MySQL, ',
                'Sequelize, ',
                'Jest '
			],
			github: 'https://github.com/htariku/RESTful-API-Group-Project',
			deployed: 'https://restful-api101.herokuapp.com/',
		},
		{
			name: 'Cosmo Quotes',
			description:
				'Cosmo Quotes is a web application that presents the user with NASAs Astronomy Picture of the Day and an inspirational quote to go along with it. The user can then choose to save this to their Album where they can keep all of their pictures and quotes to look back on.',
			image: '',
			technologies: [
				'HTML/CSS, ',
				'JavaScript, ',
				'JQuery, ',
				'Materialize, ',
				'NASA APOD API, ',
				'Git'
			],
			github: 'https://github.com/Rebekah818/andromeda',
			deployed: 'https://rebekah818.github.io/andromeda/',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
                       <h1>Project: {projects[0].name}</h1>
                        <br></br>
                        <img
					src={require('../../assets/buzzerbeaterPic.png')}
					alt="BuzzerBeater-screenshot"
					className="photo"
                    width="400" 
                    height="500"
				/>
                        <br></br>
                        <b>Technologies Used:</b> {projects[0].technologies}
                        <br></br>
                        <b>Github Link:</b><a href={projects[0].github}>{projects[0].github}</a> 
                        <br></br>
                        <b>Deployment Link:</b><a href={projects[0].deployed}>{projects[0].deployed}</a> 
                        <br></br>
                        <b>Project Description:</b>{projects[0].description}
					</li>
					<li className="padding">
                    <h1>Project: {projects[1].name}</h1>
                    <br></br>
                    <img
					src={require('../../assets/CosmoQuotesPic.png')}
					alt="CosmoQuotes-Screenshot"
					className="photo"
                    width="400" 
                    height="300"
				/>
                    <br></br>
                    <b>Technologies Used:</b> {projects[1].technologies}
                    <br></br>
                    <b>Github Link:</b> <a href={projects[1].github}>{projects[1].github}</a>
                    <br></br>
                    <b>Deployment Link:</b> <a href={projects[1].deployed}>{projects[1].deployed}</a>
                    <br></br>
                    <b>Project Description:</b>{projects[1].description}
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;