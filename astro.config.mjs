import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import solidJs from "@astrojs/solid-js";

const toc = (str) => {
	return "Expand the " + str;
};

// https://astro.build/config
export default defineConfig({
	site: "https://cedricbontems.fr/",
	integrations: [
		robotsTxt(),
		sitemap(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		solidJs(),
	],
});
