export type SocialLink = {
	platform: string;
	href: string;
	me?: string;
	text: string;
	icon: string;
	footerOnly?: boolean;
};

export type SiteInfo = {
	name: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	twitterHandle?: string;
	socialLinks: SocialLink[];
	fathomSiteId?: string;
	fathom404GoalId?: string;
	brandColor?: string;
	featuredPosts: number;
	recentPosts: number;
	postPerPage?: number;
};

const siteInfo: SiteInfo = {
	name: "Cédric Bontems",
	title: "Front-End Development Insights, Tutorials & Courses",
	description:
		"Welcome to Cédric Bontems' personal website, where I share valuable insights, step-by-step tutorials, and offer engaging courses on HTML, CSS, JavaScript, PHP, WordPress, React, and Astro. Join me on my front-end development journey and boost your skills today.",
	image: {
		src: "/og/social.jpg",
		alt: "Beautiful Astro blog theme styled with Open Props",
	},
	socialLinks: [
		{
			platform: "youtube",
			href: "https://youtube.com/@cedricbontems",
			me: "https://youtube.com/@cedricbontems",
			text: "Subscribe to my Youtube channel",
			icon: "iconoir:youtube",
		},
		{
			platform: "twitter",
			href: "https://twitter.com/cedricbontems",
			me: "https://twitter.com/cedricbontems/",
			text: "Find the me on twitter",
			icon: "iconoir:twitter",
		},
		{
			platform: "github",
			href: "https://github.com/cbontems/",
			me: "https://github.com/cbontems/",
			text: "Follow me on Github",
			icon: "iconoir:github",
		},
		{
			platform: "feed",
			href: "/feed.xml",
			text: "Subscribe to our RSS feed",
			icon: "iconoir:rss-feed",
			footerOnly: true,
		},
	],
	twitterHandle: "cbontems",
	fathomSiteId: "WBHNEVIO",
	fathom404GoalId: "W245ODQD",
	brandColor: "#c85a19",
	featuredPosts: 2,
	recentPosts: 4,
	postPerPage: 5,
};

export default siteInfo;
