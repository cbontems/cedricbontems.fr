/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />
declare module "*.css" {
	const classes: { [key: string]: string };
	export default classes;
}
