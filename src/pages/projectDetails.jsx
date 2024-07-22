import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const ProjectDetails = () => {
	const [data, setData] = useState();
	useEffect(() => {
		window.scrollTo(0, 0);
		const filteredData = INFO.projectDetails.find(el => INFO.projects.some(val => el.id === val.id));
		setData(filteredData);
	}, []);


	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="flex justify-center items-center">
							<img src={data?.gifs?.gifOne} alt="abu-dhabi-gif" />
						</div>

						<div className="title projects-title mt-10">
							About {data?.title}
						</div>
						

						<div className="subtitle projects-subtitle">
							{data?.desc}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProjectDetails;
