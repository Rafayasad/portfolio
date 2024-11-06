import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
	faMedium,
	faDev,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		let scroll = Math.round(window.pageYOffset, 2);

	// 		let newLogoSize = 80 - (scroll * 4) / 10;

	// 		if (newLogoSize < oldLogoSize) {
	// 			if (newLogoSize > 40) {
	// 				setLogoSize(newLogoSize);
	// 				setOldLogoSize(newLogoSize);
	// 				setStayLogo(false);
	// 			} else {
	// 				setStayLogo(true);
	// 			}
	// 		} else {
	// 			setLogoSize(newLogoSize);
	// 			setStayLogo(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	const myTechStack = () => {
		return (
			<div className="flex gap-4 flex-wrap px-10">
				<div className="flex gap-4 flex-wrap px-2 pt-6">
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
							alt="javascript"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://www.typescriptlang.org/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
							alt="typescript"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://reactjs.org/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
							alt="react"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://angular.io/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000"
							alt="angular"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://nodejs.org/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
							alt="nodejs"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://nestjs.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
							alt="nestjs"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://redux.js.org/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=000000"
							alt="redux"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://recoiljs.org/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=EXZGX2xYvaYn&format=png&color=000000"
							alt="recoil"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://reactnative.dev/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=NppcscWQsmAq&format=png&color=000000"
							alt="reactnative"
							width="60"
							height="60"
						/>
					</a>{" "}
					<a
						href="https://graphql.org"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=XgY3SKn2Tlao&format=png&color=000000"
							alt="graphql"
							width="60"
							height="60"
						/>{" "}
					</a>
					<a href="https://mui.com/" target="_blank" rel="noreferrer">
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
							alt="material-ui"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://ant.design/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/antdesign/antdesign-original.svg"
							alt="antdesign"
							width="60"
							height="60"
						/>
					</a>
				</div>
				<div className="flex gap-4 flex-wrap px-2 pt-6">
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
							alt="tailwindcss"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://getbootstrap.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000"
							alt="bootstrap"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://shadcn.dev/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjouFTAB2PcXfnfkjy1SUjkaMeaymXnzoOA&s"
							alt="shadcnui"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://chakra-ui.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=r9QJ0VFFrn7T&format=png&color=000000"
							alt="chakraui"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://styled-components.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
							alt="styledcomponents"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://aws.amazon.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
							alt="AWS"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://www.docker.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000"
							alt="Docker"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://www.nginx.com"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=t2x6DtCn5Zzx&format=png&color=000000"
							alt="nginx"
							width="60"
							height="60"
						/>{" "}
					</a>{" "}
					<a
						href="https://heroku.com"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=31085&format=png&color=000000"
							alt="heroku"
							width="60"
							height="60"
						/>{" "}
					</a>
					<a
						href="https://firebase.google.com/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
							alt="firebase"
							width="60"
							height="60"
						/>{" "}
					</a>
					<a
						href="https://git-scm.com/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000"
							alt="git"
							width="60"
							height="60"
						/>{" "}
					</a>
					<a
						href="https://about.gitlab.com/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=34886&format=png&color=000000"
							alt="git"
							width="60"
							height="60"
						/>{" "}
					</a>
				</div>
				<div className="flex justify-center items-center w-full gap-4 px-2 pt-6">
					<a
						href="https://www.atlassian.com/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000"
							alt="git"
							width="60"
							height="60"
						/>{" "}
					</a>
					<a
						href="https://app.asana.com/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						<img
							src="https://img.icons8.com/?size=100&id=ookJ5efQKjnm&format=png&color=000000"
							alt="git"
							width="60"
							height="60"
						/>{" "}
					</a>
					<a
						href="https://www.mongodb.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
							alt="mongodb"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://www.postgresql.org/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
							alt="postgresql"
							width="60"
							height="60"
						/>
					</a>
					<a
						href="https://www.mysql.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
							alt="mysql"
							width="60"
							height="60"
						/>
					</a>
				</div>
			</div>
		);
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				{/* <NavBar active="home" /> */}
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					{/* <div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div> */}

					<div className="homepage-container mt-12">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title yellowGrad">
									{INFO.homepage.title}
								</div>
								<div className="title homepage-title blueGrad">
									{INFO.homepage.sub_title}
								</div>
								<div className="subtitle homepage-subtitle font-semibold">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.medium}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMedium}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.devCommunity}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faDev}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						{/* my tech stack */}
						<div className="text-2xl font-black yellowGrad mt-10">
							{INFO.homepage.skill_title}
						</div>
						<div className="title-two homepage-title blueGrad">
							{INFO.homepage.skill_sub_title}
						</div>
						<div className="my-4">{myTechStack()}</div>
						<div className="text-2xl font-black yellowGrad mt-20">
							{INFO.homepage.project_title}
						</div>
						<div className="title-two homepage-title blueGrad">
							{INFO.homepage.project_sub_title}
						</div>
						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								<div className="text-2xl font-black yellowGrad mt-10">
									{INFO.homepage.blog_title}
								</div>
								<div className="title-two homepage-title blueGrad">
									{INFO.homepage.blog_sub_title}
								</div>
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
											redirect={
												"https://medium.com/@asadrafay998/how-to-deploy-a-single-page-application-on-github-pages-e8226399c78f"
											}
										/>
									</div>
								))}
							</div>

							{/* <div className="homepage-works">
								<Works />
							</div> */}
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
