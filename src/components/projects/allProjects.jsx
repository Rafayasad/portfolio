import React, { useState } from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	const [visibleProjects, setVisibleProjects] = useState(6);
	const [showAll, setShowAll] = useState(false);

	const toggleProjects = () => {
		if (showAll) {
			setVisibleProjects(6);
		} else {
			setVisibleProjects(INFO.projects.length);
		}
		setShowAll(!showAll);
	};

	return (
		<div>
			<div className="all-projects-container">
				{INFO.projects
					.slice(0, visibleProjects)
					.map((project, index) => (
						<div className="all-projects-project" key={index}>
							<Project
								logo={project.logo}
								title={project.title}
								description={project.description}
								linkText={project.linkText}
								link={project.link}
								navToPage={project.navToPage}
							/>
						</div>
					))}
			</div>
			<button
				onClick={toggleProjects}
				className="show-more-button text-right w-full underline underline-offset-4 hover:text-blue-950"
			>
				{showAll ? "Show Less" : "Show More"}
			</button>
		</div>
	);
};

export default AllProjects;
