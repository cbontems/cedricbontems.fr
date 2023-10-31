import getReadingTime, { type ReadTimeResults } from "reading-time";
import { toString } from "mdast-util-to-string";
import type { Root } from "mdast";

interface Options {
	data: {
		astro: {
			frontmatter: {
				readingStats: ReadTimeResults;
				textContent: string;
			};
		};
	};
}

export const remarkReadingTime = () => {
	const rt = (tree: Root, { data }: Options) => {
		const textOnPage = toString(tree);
		data.astro.frontmatter.readingStats = getReadingTime(textOnPage);
		data.astro.frontmatter.textContent = textOnPage.replace(
			/\r?\n|\r|\"|\'|<\/?[^>]+(>|$)/g,
			"",
		);
		return tree;
	};
	return rt;
};
