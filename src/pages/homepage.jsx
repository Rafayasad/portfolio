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
					{/* <div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div> */}

					<div className="homepage-container">
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
							{/* <a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a> */}
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
						<div className="">
							<div className="flex gap-4 flex-wrap px-4 py-1">
								<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
								<a href="https://www.typescriptlang.org/" target="_blank">
								<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></a>
								<a href="https://reactjs.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
</a>
<a href="https://angular.io/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" alt="angular" width="40" height="40"/>
</a><a href="https://vuejs.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/>
</a><a href="https://nodejs.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
</a><a href="https://nestjs.com/" target="_blank">
  <img src="https://www.vhv.rs/dpng/d/498-4989583_nestjs-logo-hd-png-download.png" alt="nestjs" width="40" height="40"/>
</a><a href="https://redux.js.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
</a><a href="https://recoiljs.org/" target="_blank">
  <img src="https://logowik.com/content/uploads/images/recoil6319.logowik.com.webp" alt="recoil" width="50" height="40"/>
</a><a href="https://reactnative.dev/" target="_blank">
  <img src="https://www.nicepng.com/png/detail/222-2224978_how-react-native-works-react-native-logo-png.png" alt="reactnative" width="60" height="50"/>
</a> <a href="https://graphql.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> </a>
<a href="https://mui.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" alt="material-ui" width="40" height="40"/>
</a><a href="https://ant.design/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/antdesign/antdesign-original.svg" alt="antdesign" width="40" height="40"/>
</a><a href="https://tailwindcss.com/" target="_blank">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU" alt="tailwindcss" width="40" height="40"/>
</a><a href="https://getbootstrap.com/" target="_blank">
  <img src="https://e7.pngegg.com/pngimages/391/430/png-clipart-bootstrap-full-logo-tech-companies-thumbnail.png" alt="bootstrap" width="40" height="40"/>
</a><a href="https://shadcn.dev/" target="_blank">
  <img src="https://cdn.illacloud.com/illa-website/blog/shadcn-ui-2024/cover.png" alt="shadcnui" width="40" height="40"/>
</a><a href="https://chakra-ui.com/" target="_blank">
  <img src="https://miro.medium.com/v2/resize:fit:800/1*8hhfdEqRkRQSaJrJlx60zg.png" alt="chakraui" width="40" height="40"/>
</a><a href="https://styled-components.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="styledcomponents" width="40" height="40"/>
</a>
<a href="https://aws.amazon.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="40" height="40"/>
</a><a href="https://azure.microsoft.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original-wordmark.svg" alt="Azure" width="40" height="40"/>
</a><a href="https://cloud.google.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original-wordmark.svg" alt="Google Cloud" width="40" height="40"/>
</a><a href="https://www.docker.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" width="40" height="40"/>
</a><a href="https://www.nginx.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a><a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a><a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
<a href="https://www.mongodb.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
</a><a href="https://www.postgresql.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
</a><a href="https://www.mysql.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
</a>
							</div>
						</div>
						<div className="text-3xl font-black yellowGrad mt-10">
									{INFO.homepage.project_title}
								</div>
								<div className="title homepage-title blueGrad">
									{INFO.homepage.project_sub_title}
								</div>
						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
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
										/>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
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
