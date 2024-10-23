import { gifs, photos } from "../assets";

const INFO = {
	main: {
		title: "Rafay Asad",
		name: "Rafay Asad",
		email: "asadrafay998@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/Rafayasad",
		linkedin: "https://www.linkedin.com/in/rafay-asad-87b39a213/",
		instagram: "https://www.instagram.com/rafayasad_?igsh=cmowa2JoZmwydXlj",
		stackoverflow: "https://stackoverflow.com/users/12487652/rafayasad",
		facebook: "https://www.facebook.com/rafay.asad.1?mibextid=ZbWKwL",
		medium: "https://medium.com/@asadrafay998",
		devCommunity: "https://dev.to/rafayasad",
	},

	homepage: {
		title: "Hello, ",
		sub_title: "I am Rafay Asad.",
		description:
			"Experienced Software Engineer, focusing on both front-end and back-end technologies. I've successfully delivered enterprise applications for leading organizations across various regions. My curiosity for new technologies has led me to work on diverse projects, including developing JavaScript modules, and building interactive web applications and full-stack solutions. Every project presents a new opportunity to grow my skills and drive innovation. Let’s connect and explore how we can collaborate on exciting projects together!",

		project_title: "My Key Contributions, ",
		project_sub_title: "Across Various Projects",

		skill_title: "My Skills, ",
		skill_sub_title: "Tech Stack",

		blog_title: "My Blogs, ",
		blog_sub_title: "Exploring Various Topics",
	},

	about: {
		title: "I'm Rafay Asad. I live in Pakistan, where I craft the future as if the universe were an intricate codebase waiting to be perfected.",
		description:
			"As a full-stack JavaScript developer with expertise in both front-end and back-end development. For the front-end, I have experience working with key frameworks such as React.js, Angular.js, and Next.js. On the back-end, my primary focus is on Node.js and Express.js. Additionally, I have experience in mobile development using React Native. I enjoy solving complex problems and continuously learning new skills. I am passionate about creating high-quality code that adheres to best practices and industry standards. I am always seeking new challenges and opportunities to grow as a developer.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			id: "1",
			title: "Abu Dhabi Data - Portal - Story",
			description:
				"I contributed to this project, delivering responsive and user-friendly interfaces with API's intregations.",
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			logo: photos.p1,
			linkText: "View Project",
			link: "https://github.com",
			navToPage: "/project-details/1",
		},

		{
			id: "2",
			title: "Abu Dhabi Data - Open Data",
			description:
				"I contributed to this project from scratch, creating a fully functional and interactive platform using React.js",
			logo: photos.p1,
			linkText: "View Project",
			link: "https://github.com",
			navToPage: "/project-details/2",
		},

		{
			id: "3",
			title: "Godiggo - Development Services - UAE",
			description:
				"I contributed to this project, creating a payments intregation and hosting services using Node.js",
			linkText: "View Project",
			logo: photos.p4,
			link: "https://github.com",
			navToPage: "/project-details/3",
		},
		{
			id: "4",
			title: "Fir & Fight - Fitness Plans",
			description:
				"I contributed to this project by integrating API services and implementing an authentication module using Node.js and React.js",
			logo: photos.p5,
			linkText: "View Project",
			link: "https://github.com",
		},
		{
			id: "5",
			title: "Ilyas Salon",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: photos.p6,
			linkText: "View Project",
			link: "https://github.com",
		},
		{
			id: "6",
			title: "Peng Salon & Spa",
			description:
				"I contributed to this project by integrating API services and implementing an authentication module using Node.js and React.js",
			logo: photos.p7,
			linkText: "View Project",
			link: "https://github.com",
		},
		{
			id: "7",
			title: "Fir & Fight - Fitness Plans",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: photos.p5,
			linkText: "View Project",
			link: "https://github.com",
		},
	],

	projectDetails: [
		{
			id: "1",
			title: "My Significant Contribution",
			desc: "The Data.AbuDhabi project is a comprehensive open data platform launched by the Abu Dhabi Digital Authority. My significant contribution to this project using the React.js framework. My focus was on making the portal functional, responsive, and user-friendly, ensuring an optimal user experience. I integrated various Drupal APIs to retrieve data from different departments and Through my work, I enhanced the portal's overall performance and usability, aligning with the project’s goals of providing easy access to valuable data for the users.",
			keys: [
				"● Developed the front-end interface for the Abu Dhabi Portal - UAE government project using React.js.",
				"● Utilized Bootstrap's pre-built components and utilities to accelerate the development process.",
				"● Enhanced user interaction and engagement through dynamic content loading and manipulation.",
				"● Customized Drupal modules to support the specific requirements of the platform, including data categorization, user management, and API integrations.",
				"● Focused on delivering a seamless and engaging user experience with fast load times, interactive features, and a clean design.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g1,
				gifTwo: gifs.g2,
			},
		},
		{
			id: "2",
			title: "My Significant Contribution",
			desc: "The Data.AbuDhabi Open Data project is a vast data collection from various departments within the city, launched by the Abu Dhabi Digital Authority. My contribution on the Abu Dhabi Open Data Portal, using React.js to build the entire project. I integrated APIs and implemented department-wise structural data, allowing users to filter and search by department and its entities. I also added a feedback feature for multiple government users to share their input and provided Arabic language support, enabling users to switch between English and Arabic accordingly.",
			keys: [
				"● Developed the front-end interface for the Abu Dhabi Portal - UAE government project using React.js.",
				"● Utilized Bootstrap's pre-built components and utilities to accelerate the development process.",
				"● Enhanced user interaction and engagement through dynamic content loading and manipulation.",
				"● Customized Drupal modules to support the specific requirements of the platform, including data categorization, user management, and API integrations.",
				"● Focused on delivering a seamless and engaging user experience with fast load times, interactive features, and a clean design.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g3,
				gifTwo: gifs.g2,
			},
		},
		{
			id: "3",
			title: "My Significant Contribution",
			desc: "GoDiggo is a dynamic digital platform that offers a comprehensive range of hosting services and packages tailored to meet the diverse needs of businesses and individuals. My Contribution on the GoDiggo portfolio website, I developed the Plans Service for hosting and packages, utilized the Node.js framework with Express to create a scalable backend architecture. Additionally, I integrated Stripe as a payment gateway, ensuring secure and efficient payment processing for users. To manage and capture data, I implemented MongoDB, leveraging its document-based infrastructure for optimal performance and flexibility. My contributions significantly enhanced the website's functionality and user experience.",
			keys: [
				"● Developed the front-end interface for the Abu Dhabi Portal - UAE government project using React.js.",
				"● Utilized Bootstrap's pre-built components and utilities to accelerate the development process.",
				"● Enhanced user interaction and engagement through dynamic content loading and manipulation.",
				"● Customized Drupal modules to support the specific requirements of the platform, including data categorization, user management, and API integrations.",
				"● Focused on delivering a seamless and engaging user experience with fast load times, interactive features, and a clean design.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g3,
				gifTwo: gifs.g2,
			},
		},
		{
			id: "4",
			title: "My Significant Contribution",
			desc: "GoDiggo is a dynamic digital platform that offers a comprehensive range of hosting services and packages tailored to meet the diverse needs of businesses and individuals. My Contribution on the GoDiggo portfolio website, I developed the Plans Service for hosting and packages, utilized the Node.js framework with Express to create a scalable backend architecture. Additionally, I integrated Stripe as a payment gateway, ensuring secure and efficient payment processing for users. To manage and capture data, I implemented MongoDB, leveraging its document-based infrastructure for optimal performance and flexibility. My contributions significantly enhanced the website's functionality and user experience.",
			keys: [
				"● Developed the front-end interface for the Abu Dhabi Portal - UAE government project using React.js.",
				"● Utilized Bootstrap's pre-built components and utilities to accelerate the development process.",
				"● Enhanced user interaction and engagement through dynamic content loading and manipulation.",
				"● Customized Drupal modules to support the specific requirements of the platform, including data categorization, user management, and API integrations.",
				"● Focused on delivering a seamless and engaging user experience with fast load times, interactive features, and a clean design.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g3,
				gifTwo: gifs.g2,
			},
		},
	],
};

export default INFO;
