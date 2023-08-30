import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

const toc = (str) => {
	return "Expand the " + str;
};

// https://astro.build/config
export default defineConfig({
	site: "https://cedricbontems.fr/",
	integrations: [robotsTxt(), sitemap(), solidJs()],
});
