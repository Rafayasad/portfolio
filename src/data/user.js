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
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "JavaScript Full-stack web and mobile app developer.",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
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
			id: 1,
			title: "Abu Dhabi Data - Portal - Story",
			description:
				"Embrace the unlimited potential of a Data-Driven Abu Dhabi.",
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			logo: photos.p1,
			linkText: "View Project",
			link: "https://github.com",
			navToPage: "/projectDetails/abuDhabiPortal",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],

	projectDetails: [
		{
			id: 1,
			title: 'Abu Dhabi Data - Portal - Story',
			desc: "The Data.AbuDhabi project is a comprehensive open data platform launched by the Abu Dhabi Digital Authority. It aims to enhance transparency, innovation, and collaboration by providing access to a vast array of data sets across various sectors, including health, education, transportation, and environment. This initiative supports Abu Dhabi's vision of becoming a leading global smart city. The platform enables government entities, businesses, researchers, and the public to leverage data for informed decision-making, driving economic growth, and improving the quality of life for residents. Key features of Data.AbuDhabi include user-friendly data visualization tools, APIs for seamless integration, and robust data governance practices to ensure data accuracy and security. By fostering an ecosystem of data-driven innovation, Data.AbuDhabi empowers stakeholders to create impactful solutions that address urban challenges, promote sustainability, and enhance public services.",
			keys: [
				"● Developed the front-end interface for the Abu Dhabi Portal - UAE government project using React.js.",
				"● Utilized Bootstrap's pre-built components and utilities to accelerate the development process.",
				"● Enhanced user interaction and engagement through dynamic content loading and manipulation.",
				"● Customized Drupal modules to support the specific requirements of the platform, including data categorization, user management, and API integrations.",
				"● Focused on delivering a seamless and engaging user experience with fast load times, interactive features, and a clean design."
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g1,
				gifTwo: gifs.g2,
			}
		},
		{
			id: 2,
			title: 'Abu Dhabi Data - Portal - Storysss',
			desc: "The Data.AbuDhabi project is a comprehensive open data platform launched by the Abu Dhabi Digital Authority. It aims to enhance transparency, innovation, and collaboration by providing access to a vast array of data sets across various sectors, including health, education, transportation, and environment. This initiative supports Abu Dhabi's vision of becoming a leading global smart city. The platform enables government entities, businesses, researchers, and the public to leverage data for informed decision-making, driving economic growth, and improving the quality of life for residents. Key features of Data.AbuDhabi include user-friendly data visualization tools, APIs for seamless integration, and robust data governance practices to ensure data accuracy and security. By fostering an ecosystem of data-driven innovation, Data.AbuDhabi empowers stakeholders to create impactful solutions that address urban challenges, promote sustainability, and enhance public services.",
			keys: [
				"● Developed the front-end interface for the Abu Dhabi Portal - UAE government project using React.js.",
				"● Utilized Bootstrap's pre-built components and utilities to accelerate the development process.",
				"● Enhanced user interaction and engagement through dynamic content loading and manipulation.",
				"● Customized Drupal modules to support the specific requirements of the platform, including data categorization, user management, and API integrations.",
				"● Focused on delivering a seamless and engaging user experience with fast load times, interactive features, and a clean design."
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g1,
				gifTwo: gifs.g2,
			}
		}
	]
};

export default INFO;
