import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.array(z.string()),
			description: z.string(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((value) => new Date(value)),
			updateDate: z
				.string()
				.or(z.date())
				.transform((value) => new Date(value))
				.optional(),
			coverImage: image().refine((img) => img.width >= 1080, {
				message: "Cover image must be at least 1080 pixels wide!",
			}),
			coverImageAlt: z.string().optional().default(""),
			category: z.string().optional().default("Uncategorized"),
			tags: z.array(z.string()).optional().default(["Untagged"]),
		}),
});

const resourcesCollection = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		ressourceLanguage: z.string().optional(),
		category: z.object({
			singular: z.string(),
			plural: z.string(),
		}),
		checkDate: z
			.string()
			.or(z.date())
			.transform((value) => new Date(value))
			.optional(),
		tags: z.array(z.string()).optional(),
		link: z.string().url().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
	resources: resourcesCollection,
};
