const uid = () => crypto.randomUUID();

const siteData = {
	main: {
		title: 'Zakaria Slimane | Software Developer DevOps & Cloud',
		offTitle: 'Zakaria Slimane | Software Developer DevOps & Cloud',
		name: 'Zakaria Slimane',
		email: 'slzackaria@gmail.com',
	},
	socials: {
		github: 'https://github.com/slzakaria',
		linkedin: 'https://www.linkedin.com/in/zakaria-slimane/',
		resume: 'https://drive.google.com/file/d/1mmmdfRNmxY41ZojnE1F0ll622gQIVRCz/view?usp=sharing',
		email: 'slzackaria@gmail.com',
	},

	contactPage: {
		title: "Get in Touch: Let's Turn Ideas into Reality",
		description:
			'Thank you for taking the time to explore my work and learn more about my passion for web development and creating digital experiences.',
		cta: "If you're excited about the possibilities, have questions, or are ready to collaborate, I'd love to hear from you!",
	},

	articles: [
		{
			id: uid(),
			title: 'AWS for newcomers: Essential Services to know.',
			link: 'https://www.linkedin.com/pulse/aws-newcomers-essential-services-know-zakaria-slimane--fzswe/',
		},
		{
			id: uid(),
			title: 'How to deploy a static website / app in AWS.',
			link: 'https://www.linkedin.com/pulse/how-deploy-static-website-react-app-aws-zakaria-slimane--vku9e/',
		},
		{
			id: uid(),
			title: 'Jenkins DevOps: EC2 Automated Builds and Docker Deployments',
			link: 'https://www.linkedin.com/pulse/jenkins-devops-ec2-automated-builds-docker-zackaria-slimane--o59re/',
		},
		{
			id: uid(),
			title: 'Automating Infrastructure Deployment with Terraform (AWS)',
			link: 'https://www.linkedin.com/pulse/automating-infrastructure-deployment-terraform-aws-example-slimane--ei0ze/',
		},
		{
			id: uid(),
			title: 'AWS EC2 Instance Setup and Secure CI/CD Pipeline with Jenkins',
			link: 'https://www.linkedin.com/pulse/brief-overview-aws-ec2-instance-setup-secure-cicd-jenkins-slimane--3t3oe/',
		},
		{
			id: uid(),
			title: 'GitHub Issues Tracker with Go, React, and Docker',
			link: 'https://www.linkedin.com/pulse/learning-golang-hands-github-issues-tracker-go-react-docker-slimane-/',
		},
		{
			id: uid(),
			title: 'Building Your First CRUD App in Go: A Hands-On Tutorial',
			link: 'https://www.linkedin.com/pulse/building-your-first-crud-app-go-hands-on-tutorial-zackaria-slimane-/',
		},
		{
			id: uid(),
			title: 'React Ecosystem in 2023 - Brief overview',
			link: 'https://www.linkedin.com/pulse/react-ecosystem-2023-brief-overview-zackaria-slimane-/',
		},
		{
			id: uid(),
			title: 'Demystifying React useContext Hook',
			link: 'https://www.linkedin.com/pulse/demystifying-reacts-usecontext-hook-zackaria-slimane-/',
		},
	],

	projects: [
		{
			id: uid(),
			title: 'Fin tracker',
			description: 'Personal Finance Management',
			link: 'https://fintracker.zakariaslimane.dev/',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'CICD labs',
			description: 'My contribution to the prepare.sh labs',
			link: 'https://github.com/slzakaria/azurelabs',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'Terraform AWS template',
			description: 'Provisioning starter for AWS resources using Terraform',
			link: 'https://github.com/slzakaria/terraform-ec2',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'Helm charts & kubernetes deployement',
			description: 'Helm and kubernetes deployement of a python api',
			link: 'https://github.com/slzakaria/python-api---helm-kubernetes-deployement',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'Golang-Docker api template',
			description: 'Basic starter of a Go API microservice dockerized',
			link: 'https://github.com/slzakaria/go-docker-ms',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'Pennysense Budget app',
			description: 'Personal finance and budgeting app',
			link: 'https://budgets.zakariaslimane.dev/',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'unFetch image provider',
			description: 'Search image wrapper , list and download high res images',
			link: 'https://unfetch.vercel.app/',
			linkText: 'View Project',
			featured: false,
		},
		{
			id: uid(),
			title: 'Cvforge resume maker - Desktop app',
			description: 'A resume maker.',
			link: 'https://cvforge.vercel.app/',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'Gittrackr issues tracker',
			description: 'A docker GoLang REST API with React front',
			link: 'https://gittrackr.vercel.app/',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'Bank product template',
			description: 'Responsive & modern landing page for a Bank',
			link: 'https://echelonbank.vercel.app/',
			linkText: 'View Project',
			featured: true,
		},
		{
			id: uid(),
			title: 'Golang CLI notes',
			description: 'Golang CLI tasks application',
			link: 'https://github.com/slzakaria/gotask',
			linkText: 'View Project',
			featured: false,
		},
		{
			id: uid(),
			title: 'Urbandrugstore wordpress ecommerce',
			description: 'E-commerce website  - online beauty and drugstore',
			link: 'https://urbandrugstore.ma/',
			linkText: 'View Project',
			featured: false,
		},
		{
			id: uid(),
			title: 'BeautyMall wordpress ecommerce',
			description: 'E-commerce website  - online beauty and drugstore',
			link: 'https://beautymall.ma/',
			linkText: 'View Project',
			featured: false,
		},
	],

	blogPosts: [
		{
			id: uid(),
			title: 'AWS for newcomers: Essential Services to know',
			slug: 'aws-for-newcomers',
			date: '2024-12-13',
			excerpt:
				'A comprehensive guide to help beginners understand and start using AWS services effectively.',
			tags: ['AWS', 'Cloud', 'Tutorial'],
		},
		{
			id: uid(),
			title: 'How to deploy a static website / app in AWS',
			slug: 'how-to-deploy-static-websites-aws',
			date: '2024-12-13',
			excerpt:
				'Learn how to deploy a static website on AWS using S3, configure static hosting, and optimize with CloudFront.',
			tags: ['AWS', 'Cloud', 'Tutorial'],
		},
		{
			id: uid(),
			title: 'CI/CD Workflow with Jenkins, Docker, and AWS EC2',
			slug: 'cicd-workflow-jenkins-docker-aws',
			date: '2024-01-15',
			excerpt:
				'Learn how to automate your deployment pipeline using Jenkins, Docker, and AWS EC2 for seamless CI/CD integration.',
			tags: ['CI/CD', 'Jenkins', 'AWS', 'Docker', 'DevOps'],
		},
		{
			id: uid(),
			title: 'Automating Infrastructure Deployment with Terraform (AWS example)',
			slug: 'manage-and-deploy-cloud-infrastructure-with-code-terraform',
			date: '2024-01-13',
			excerpt:
				'Learn how to set up and configure AWS infrastructure using Terraform, including EC2 instances, security groups, and automation.',
			tags: ['AWS', 'Cloud', 'DevOps', 'IaC', 'Terraform'],
		},
		{
			id: uid(),
			title: 'Brief overview : AWS EC2 Instance Setup and Secure CI/CD Pipeline with Jenkins',
			slug: 'overview-of-full-cicd-setup-aws-ec2-jenkins',
			date: '2023-10-19',
			excerpt:
				'Learn how to set up and configure AWS EC2 instances, install Jenkins, and build a secure and efficient CI/CD pipeline for a React side project.',
			tags: ['AWS', 'Cloud', 'DevOps', 'CI/CD', 'Jenkins', 'React'],
		},
	],
};

export default siteData;
