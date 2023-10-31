import { getCollection } from "astro:content";
import { capitalize } from "~/helpers/typography";

export type Taxonomy = {
	name: string | undefined;
	count: number;
};

const sortTaxonomy = (a: Taxonomy, b: Taxonomy) => {
	const countOrder = b.count - a.count;
	const alphaOrder = (a.name || "").localeCompare(b.name || "");
	return b.count === a.count ? alphaOrder : countOrder;
};

const allBlogPosts = await getCollection(
	"blog",
	({ data }) => data.publishDate <= new Date(),
);

const allTags = allBlogPosts.flatMap((post) => post.data.tags);
const uniqueTagsForCategory = (category: string) => {
	return [
		...new Set(
			allBlogPosts
				.filter((post) => post.data.category === category)
				.flatMap((post) => post.data.tags),
		),
	];
};
const uniqueCategoriesForTag = (tag: string) => {
	return [
		...new Set(
			allBlogPosts
				.filter((post) => post.data.tags.includes(tag))
				.flatMap((post) => post.data.category),
		),
	];
};

const allCategories = allBlogPosts.flatMap((post) => post.data.category);

const uniqueTags = [...new Set(allTags)];
const uniqueCategories = [...new Set(allCategories)];

export const tagsAndCounts = (category?: string | undefined) => {
	if (category) {
		return uniqueTagsForCategory(category)
			.map((tag) => {
				return {
					name: tag,
					count: allTags.filter((t) => t === tag).length,
				};
			})
			.sort(sortTaxonomy);
	}
	return uniqueTags
		.map((tag) => {
			return {
				name: tag,
				count: allTags.filter((t) => t === tag).length,
			};
		})
		.sort(sortTaxonomy);
};

/**
 * Returns unique categories with posts count for each one
 */
export const categoriesAndCounts = (tag?: string | undefined) => {
	if (tag) {
		return uniqueCategoriesForTag(tag)
			.map((category) => {
				return {
					name: category,
					count: allCategories.filter((t) => t === category).length,
				};
			})
			.sort(sortTaxonomy);
	}
	return uniqueCategories
		.map((category) => {
			return {
				name: category,
				count: allCategories.filter((t) => t === category).length,
			};
		})
		.sort(sortTaxonomy);
};

/**
 * Returns a list of terms as Taxonomy[]
 * @param terms
 * @returns Taxonomy[]
 */
export const taxonomize = (terms: string[]) => {
	return terms.map((term) => {
		return { name: term, count: 1 };
	});
};
