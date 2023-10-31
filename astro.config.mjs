import { defineConfig } from "astro/config";

// Integrations
import solidJs from "@astrojs/solid-js";
import { customAsides } from "./src/integrations/asides";

// Plugins
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";

// Configs
import { autolinkHeadingsConfig } from "./src/plugins/rehype-autolink-headings-config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "https://cedricbontems.fr/",
	output: "static",
	trailingSlash: "always",
	integrations: [solidJs(), mdx()],
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			[rehypeAutolinkHeadings, autolinkHeadingsConfig],
		],
		remarkPlugins: [remarkReadingTime, ...customAsides()],
		shikiConfig: {
			theme: "css-variables",
		},
	},
});
