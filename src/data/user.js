import { gifs, photos, videos } from "../assets";

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

		project_title: "My Key Contributions,",
		project_sub_title: "Across Various Firm Projects",

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
			navToPage: "/portfolio/project-details/1",
		},

		{
			id: "2",
			title: "Abu Dhabi Data - Open Data",
			description:
				"I contributed to this project from scratch, creating a fully functional and interactive platform using React.js",
			logo: photos.p1,
			linkText: "View Project",
			link: "https://github.com",
			navToPage: "/portfolio/project-details/2",
		},

		{
			id: "3",
			title: "Godiggo - Development Services - UAE",
			description:
				"I contributed to this project, creating a payments intregation and hosting services using Node.js",
			linkText: "View Project",
			logo: photos.p4,
			link: "https://github.com",
			navToPage: "/portfolio/project-details/3",
		},
		{
			id: "4",
			title: "Fit & Fight - Fitness Plans",
			description:
				"I contributed to this project by integrating API services and implementing an authentication module using Node.js and React.js",
			logo: photos.p5,
			linkText: "View Project",
			link: "https://github.com",
			navToPage: "/portfolio/project-details/4",
		},
		{
			id: "5",
			title: "Ilyas Salon",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: photos.p6,
			linkText: "View Project",
			link: "https://github.com",
			navToPage: "/portfolio/project-details/5",
		},
		{
			id: "6",
			title: "Peng Salon & Spa",
			description:
				"I contributed to this project by implementing functionality of front-end React.js.",
			logo: photos.p7,
			linkText: "View Project",
			link: "https://github.com",
			navToPage: "/portfolio/project-details/6",
		},
		{
			id: "7",
			title: "Tipster Prime",
			description:
				"I contributed to the project by integrating API services and developing mobile functionality using React Native.",
			logo: photos.p8,
			linkText: "View Project",
			link: "https://github.com",
			navToPage: "/portfolio/project-details/7",
		},
	],

	projectDetails: [
		{
			id: "1",
			title: "My Significant Contribution",
			desc: "The Data.AbuDhabi project is a comprehensive open data platform launched by the Abu Dhabi Digital Authority.",
			keys: [
				"Developed the front-end interface for the Abu Dhabi Story Portal - UAE government project using React.js.",
				"Build a functional, responsive, and user-friendly portal focused on optimal user experience.",
				"Integrated Drupal APIs to retrieve and display data from various departments, ensuring comprehensive access to information.",
				"Enhanced the portal's performance and usability, aligning with project goals to provide users with easy access to valuable data.",
				"Focused on delivering a engaging user experience with fast load times, interactive features, and a clean design.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g1,
				gifTwo: gifs.g2,
			},
			videos: {
				videoOne: videos.v1,
			},
		},
		{
			id: "2",
			title: "My Significant Contribution",
			desc: "The Data.AbuDhabi Open Data project is a vast data collection from various departments within the city, launched by the Abu Dhabi Digital Authority.",
			keys: [
				"Built the Abu Dhabi Open Data Portal using React.js, developing a complete and responsive frontend.",
				"Integrated APIs to populate data dynamically, supporting real-time updates and improved user engagement.",
				"Implemented department-wise data structure to allow users to filter and search information by department and its entities, making navigation intuitive and efficient.",
				"Added a feedback feature enabling multiple government users to submit input, promoting collaboration and continuous improvement.",
				"Provided Arabic language support, allowing users to switch seamlessly between English and Arabic for an accessible, bilingual experience.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g3,
				gifTwo: gifs.g2,
			},
			videos: {
				videoOne: videos.v2,
			},
		},
		{
			id: "3",
			title: "My Significant Contribution",
			desc: "GoDiggo is a dynamic digital platform that offers a comprehensive range of hosting services and packages tailored to meet the diverse needs of businesses and individuals.",
			keys: [
				"Developed the Plans Service for managing hosting plans and packages, providing a structured and efficient way for users to explore available options.",
				"Utilized the Node.js framework with Express to create a scalable backend architecture, supporting high performance and easy future expansion.",
				"Integrated Stripe as a payment gateway to ensure secure and efficient payment processing, enhancing user trust and simplifying transactions.",
				"Implemented MongoDB to manage and capture data, leveraging its document-based infrastructure for optimized performance and flexibility.",
				"Implemented secure login and authentication with OAuth, ensuring user data privacy and protection.",
				"Enhanced the website's overall functionality and user experience through reliable data handling, secure transactions, and a seamless browsing experience.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g4,
				gifTwo: gifs.g4,
			},
			videos: {
				videoOne: videos.v3,
			},
		},
		{
			id: "4",
			title: "My Significant Contribution",
			desc: "Fit & Fight is a dynamic and user-centric platform designed to help individuals set personalized diet plans and fitness exercises, providing an all-in-one solution for achieving health goals.",
			keys: [
				"Developed the front-end interface for the Fit & Fight project using React.js.",
				"Leveraging React’s component-based architecture, I built reusable components, optimizing the app’s performance and reducing development time.",
				"Implemented Tailwind CSS for styling, ensuring a visually appealing, consistent design while reducing CSS complexity.",
				"React Hook Form, I improved validation, performance, and error handling, creating a smooth and reliable experience for users managing their health data.",
				"Implemented secure login and authentication with OAuth, ensuring user data privacy and protection.",
				"Utilized PostgreSQL for efficient data management, creating a structured and optimized database to store user profiles, diet plans, exercise routines, and progress tracking.",
				"I enhanced Fit & Fight’s functionality, usability, and security, creating a solid foundation for users to achieve their fitness goals effectively.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g3,
				gifTwo: gifs.g2,
			},
			videos: {
				videoOne: videos.v6,
			},
		},
		{
			id: "5",
			title: "My Significant Contribution",
			desc: "Ilyas Salon is a comprehensive salon platform offering a wide range of beauty and grooming services to cater to every need. From hair styling and skincare treatments to nail care and specialized grooming, Ilyas Salon provides high-quality services tailored to meet individual preferences and styles.",
			keys: [
				"Developed the Appointment System using React.js for the frontend, allowing users to easily book appointments and track their progress through various stages like processing, staff confirmation, and final payment.",
				"Built a Node.js backend service to handle appointment scheduling, ensuring smooth communication between the frontend and the backend for real-time updates on booking statuses.",
				"Implemented features for staff management, allowing admins to add staff members and assign them salary-based or commission-based compensation models, ensuring flexibility in how employees are compensated.",
				"Enabled product and service management, allowing admin users to add, edit, and delete salon products and services through the admin console, ensuring easy updates to offerings.",
				"This admin console panel accessible exclusively to store managers, providing them with complete control over appointment bookings, staff management, product/service catalog, and order processing.",
				"Integrated a voucher system for the client-side app, enabling store managers to create and manage vouchers that clients can use during appointments to avail of special discounts or promotions.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g3,
				gifTwo: gifs.g2,
			},
			videos: {
				videoOne: videos.v4,
			},
		},
		{
			id: "6",
			title: "My Significant Contribution",
			desc: "Peng Salon & Spa is a versatile platform offering a full range of beauty and grooming services tailored to every client's needs. From hair styling and skincare treatments to nail care and specialized grooming, Peng Salon & Spa provides top-quality services to suit individual preferences and styles. Clients can conveniently book appointments, either individually or as a group, making it easy to plan personal or shared salon experiences.",
			keys: [
				"Developed the Appointment System using React.js for the frontend, allowing users to easily book appointments and track their progress through various stages like processing, staff confirmation, and final payment.",
				"Built a Node.js backend service to handle appointment scheduling, ensuring smooth communication between the frontend and the backend for real-time updates on booking statuses.",
				"Implemented features for staff management, allowing admins to add staff members and assign them salary-based or commission-based compensation models, ensuring flexibility in how employees are compensated.",
				"Enabled product and service management, allowing admin users to add, edit, and delete salon products and services through the admin console, ensuring easy updates to offerings.",
				"This admin console panel accessible exclusively to store managers, providing them with complete control over appointment bookings, staff management, product/service catalog, and order processing.",
				"Integrated a voucher system for the client-side app, enabling store managers to create and manage vouchers that clients can use during appointments to avail of special discounts or promotions.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g3,
				gifTwo: gifs.g2,
			},
			videos: {
				videoOne: videos.v5,
			},
		},
		{
			id: "7",
			title: "My Significant Contribution",
			desc: "Tipster Prime is a comprehensive betting application available on both Google Play and the Apple App Store. It provides users with expert betting tips across various sports, ensuring reliable and well-researched insights for informed wagering. Designed to cater to both beginners and seasoned bettors, Tipster Prime covers a wide range of sports and markets, delivering up-to-date predictions and betting strategies.",
			keys: [
				"Developed the application using React Native for a cross-platform experience, ensuring a seamless interface for both iOS and Android users.",
				"Utilized Bootstrap for responsive styling, creating a user-friendly and visually consistent design across devices.",
				"Built backend services with Node.js and Express, enabling efficient handling of appointment scheduling, real-time updates, and user management.",
				"Leveraged MongoDB as the primary database to enhance performance, allowing for efficient storage and retrieval of user data, appointments, and service details.",
				"Integrated API endpoints for smooth communication between the frontend and backend, ensuring real-time updates.",
			],
			photos: {
				photoOne: photos.p2,
				photoTwo: photos.p3,
			},
			gifs: {
				gifOne: gifs.g3,
				gifTwo: gifs.g2,
			},
			videos: {
				videoOne: videos.v7,
			},
		},
	],
};

export default INFO;
