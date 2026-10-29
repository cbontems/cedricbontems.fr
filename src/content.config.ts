import {defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),
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
      coverImage: image(),
      coverImageAlt: z.string().optional().default(""),
      category: z.string().optional().default("Uncategorized"),
      tags: z.array(z.string()).optional().default(["Untagged"]),
    }),
});

const pagesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
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
  }),
});

const resourcesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.yml",
    base: "./src/content/resources",
  }),
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
  pages: pagesCollection,
  resources: resourcesCollection,
};