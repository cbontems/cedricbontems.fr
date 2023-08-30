import type { CollectionEntry } from "astro:content";

export const resolveImage = async (entry: CollectionEntry<"authors">) => {
	if (!entry.data.image) {
		return undefined;
	}

	return entry.data.image;
};
