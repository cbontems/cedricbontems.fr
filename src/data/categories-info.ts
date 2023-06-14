export type CategoriesInfo = {
	category: string;
	description: string;
}[];

const categoriesInfo: CategoriesInfo = [
	{
		category: "astro",
		description: "Astro is a new static site builder for the modern web.",
	},
	{
		category: "css",
		description:
			"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
	},
	{
		category: "html",
		description:
			"HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.",
	},
	{
		category: "javascript",
		description:
			"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
	},
	{
		category: "php",
		description:
			"PHP is a general-purpose scripting language especially suited to web development.",
	},
	{
		category: "react",
		description:
			"React is an open-source front-end JavaScript library for building user interfaces or UI components.",
	},
	{
		category: "wordpress",
		description:
			"WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database.",
	},
	{
		category: "All Categories",
		description: "Browse and Search all posts through all categories.",
	}
];

export default categoriesInfo;
