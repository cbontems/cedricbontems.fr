import type { JSX } from "solid-js";

export default function TimerIcon(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			{...props}
		>
			<path fill="currentColor" d="M15 11h2v9h-2zm-2-9h6v2h-6z" />
			<path
				fill="currentColor"
				d="m28 9l-1.42-1.41l-2.25 2.25a10.94 10.94 0 1 0 1.18 1.65ZM16 26a9 9 0 1 1 9-9a9 9 0 0 1-9 9Z"
			/>
		</svg>
	);
}
