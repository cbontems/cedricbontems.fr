import { createSignal, createEffect, type Setter } from "solid-js";
import styles from "~/components/TableOfContents.module.css";

export type Heading = {
	depth: number;
	text: string;
	slug: string;
};

const TableOfContents = (props: {
	headings: Heading[];
	publishDate?: Date;
}) => {
	const headers = props.headings.filter((f) => f.depth > 1 && f.depth < 4);
	const publishDate = props.publishDate;

	const [activeId, setActiveId] = createSignal("");

	if (!publishDate || publishDate <= new Date()) {
		useIntersectionObserver(setActiveId);
	}

	return (
		headers.length > 0 && (
			<ol class={styles.list}>
				{headers.map((header) => {
					return (
						<li
							style={`--_level: ${header.depth};`}
							class={`${styles.item} ${
								header.slug === activeId() ? styles.active : ""
							}`}
						>
							{(!publishDate || publishDate <= new Date()) && (
								<a href={`#${header.slug}`}>{header.text.split("#")[0]}</a>
							)}
							{publishDate && publishDate > new Date() && (
								<a href="#">{header.text.split("#")[0]}</a>
							)}
						</li>
					);
				})}
			</ol>
		)
	);
};

export default TableOfContents;

const useIntersectionObserver = (setActiveId: Setter<string>) => {
	// This signal stores a map of Ids to IntersectionObserverEntry objects
	const [contentHeadingsMap, setContentHeadingsMap] = createSignal<
		Record<string, IntersectionObserverEntry>
	>({});

	// This effect will create the IntersectionObserver and observe all the headings
	// It will update the activeId signal with the ID of the top most heading that
	// is currently intersecting.
	createEffect(() => {
		// Get the list of content only h2 and h3 heading elements having an ID
		const contentHeadings = Array.from(
			document.querySelectorAll(".content h2[id], .content h3[id]"),
		);
		if (contentHeadings.length === 0) return;

		const getContentHeadingIndexFromId = (id: string) =>
			contentHeadings.findIndex((heading) => heading.id === id);

		const callback: IntersectionObserverCallback = (entries, _) => {
			// Update the map with the new entries
			setContentHeadingsMap((prev) => {
				return entries.reduce((map, entry) => {
					map[entry.target.id] = entry;
					return map;
				}, prev);
			});

			// Check which headings are visible
			const visibleHeadings = [] as IntersectionObserverEntry[];
			Object.keys(contentHeadingsMap()).forEach((id) => {
				const headingEntry = contentHeadingsMap()[id];
				if (!headingEntry) return;
				if (headingEntry.isIntersecting) visibleHeadings.push(headingEntry);
			});

			console.log("visibleHeadings", visibleHeadings);

			// If there are no visible headings, do nothing
			if (visibleHeadings.length === 0) return;

			// If there is only one visible heading, set it as active
			if (visibleHeadings.length === 1 && visibleHeadings[0])
				return setActiveId(visibleHeadings[0].target.id);

			// If there is more than one visible heading, find the one that is first in DOM
			// from our content headings array
			const sortedVisibleHeadings = visibleHeadings.sort((a, b) =>
				getContentHeadingIndexFromId(a.target.id) >
				getContentHeadingIndexFromId(b.target.id)
					? 1
					: -1,
			);
			// Set the first heading as active
			if (sortedVisibleHeadings[0])
				return setActiveId(sortedVisibleHeadings[0].target.id);

			// If we get here, do nothing
			return;
		};

		// Create the IntersectionObserver instance with the callback and options passed in as arguments
		const observer = new IntersectionObserver(callback, {
			rootMargin: "0px 0px -30% 0px",
		});

		// Observe each heading element by iterating over each one in the array
		contentHeadings.forEach((element) => observer.observe(element));

		// Disconnect the observer when the component unmounts
		return () => observer.disconnect();
	});
};
