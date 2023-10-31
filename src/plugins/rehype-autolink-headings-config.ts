import { toString } from "hast-util-to-string";
import { h } from "hastscript";
import { escape } from "html-escaper";
import type { Options } from "rehype-autolink-headings";

// const AnchorLinkIcon = h(
// 	'span',
// 	{ ariaHidden: 'true', class: 'anchor-icon' },
// 	h(
// 		'svg',
// 		{
// 			width: '100%',
// 			viewbox: '0 0 16 16',
// 		},
// 		h('use', {
// 			href: '#anchor-link',
// 		})
// 	)
// );
const AnchorLinkIcon = h(
	"span",
	{ ariaHidden: "true", class: "anchor-hash" },
	`#`,
);

const createSROnlyLabel = (text: string) => {
	return h("span", { class: "sr-only" }, `Section titled ${escape(text)}`);
};

export const autolinkHeadingsConfig: Options = {
	properties: { class: "anchor-link noprint" },
	behavior: "append",
	content: (heading) => [AnchorLinkIcon, createSROnlyLabel(toString(heading))],
};
