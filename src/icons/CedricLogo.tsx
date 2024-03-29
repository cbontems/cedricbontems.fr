import type { JSX } from "solid-js";

export default function AnchorLinkIcon(
	props: JSX.SvgSVGAttributes<SVGSVGElement>,
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			stroke-linejoin="round"
			stroke-miterlimit="2"
			clip-rule="evenodd"
			viewBox="0 0 16 16"
			{...props}
		>
			<path
				fill="currentColor"
				fill-rule="nonzero"
				d="M8.92 14.1c.41 1 1.16 1.81 2.57 1.81 2.86 0 4.51-2.98 4.51-6.14 0-2.49-1.2-4.45-2.82-4.45-1.08 0-2.1.98-2.77 1.83l-.02-.02c.02-.24.04-.7.04-1.12V.07h-.06a5.43 5.43 0 0 1-3.31 1.35v.06c.47.3.82 1.02.82 1.78v12.55h.1l.94-1.7Zm4.45-3.29c.02 2.55-.88 4.65-2.06 4.65-.55 0-.88-.55-.88-1.33V7.46c.43-.35.79-.49 1.18-.49 1.06.04 1.74 1.31 1.76 3.84ZM4.55 5.34C1.95 5.34 0 7.64 0 10.87c0 3.02 1.67 5.06 3.53 5.06 1.7 0 2.94-1.21 3.41-3.55l-.08-.02c-.43.98-1.13 1.65-2.15 1.65-1.79 0-2.63-2.2-2.63-4.73 0-1.9.5-3.21 1.5-3.21.83 0 1.62 1.17 2.07 3.27h.04l1.23-3.53a5.95 5.95 0 0 0-2.37-.47Z"
			/>
		</svg>
	);
}
