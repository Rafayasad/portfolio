import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { videos } from "../assets";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
	const [data, setData] = useState();
	const params = useParams();
	const projectId = params.projectId ?? "";
	useEffect(() => {
		// window.scrollTo(0, 0);
		const filteredData = INFO.projectDetails.find(
			(el) => el.id === projectId
		);
		setData(filteredData);
	}, [projectId]);

	const currentSEO = SEO.find((item) => item.page === "projects");

	console.log("🚀 ~ ProjectDetails ~ data:", data, data?.videos?.videoOne);
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
			{data && (
				<div className="page-content">
					{/* <NavBar active="projects" /> */}
					<div className="content-wrapper">
						<div className="projects-logo-container">
							<div className="projects-logo">
								<Logo width={46} />
							</div>
						</div>
						<div className="projects-container">
							<div className="flex justify-center items-center">
								<video width="1000" autoPlay loop muted>
									<source
										src={data?.videos?.videoOne}
										type="video/mp4"
									/>
									Your browser does not support the video tag.
								</video>
							</div>
							{/* <div className="flex justify-center items-center">
							<img src={data?.gifs?.gifOne} alt="abu-dhabi-gif" />
						</div> */}
							<div className="grid col-span-12">
								<div>
									<div className="title projects-title blueGrad mt-10">
										About {data?.title}
									</div>

									<div className="subtitle projects-subtitle">
										{data?.desc}
									</div>
									<div className="subtitle projects-subtitle">
										{data?.keys?.map((x, i) => (
											<div className="p-2 flex justify-start items-start">
												<img
													width={15}
													className="mt-[6px]"
													alt="arrow"
													src="https://img.icons8.com/?size=100&id=S6Q4NFBbHlSg&format=png&color=000000"
												/>
												<p
													className="mx-3 text-[16px]"
													key={i}
												>
													{x}
												</p>
											</div>
										))}
									</div>
								</div>
								<div></div>
							</div>
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default ProjectDetails;
