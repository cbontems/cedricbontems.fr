import config from "~config";

export type Locale = keyof typeof config.locales;
import type { Lang } from "~/helpers/translations";

export interface LocaleData {
	dir: "ltr" | "rtl";
	locale: Locale;
}

/**
 * Get the “locale” of a slug.
 * @param slug A collection entry slug
 */
export function slugToLocale<T>(slug: string): Locale {
	const locales = Object.keys(config.locales || {});
	const baseSegment = slug.split("/")[0];
	if (baseSegment && locales.includes(baseSegment))
		return baseSegment as Locale;
	return config.defaultLocale as Locale;
}

/** Get locale information for a given slug. */
export function slugToLocaleData(slug: string): LocaleData {
	const locale = slugToLocale(slug);
	return { dir: localeToDir(locale), locale };
}

/**
 * Get the configured writing direction for the given locale.
 * @param locale Locale string or `undefined` for the root locale.
 */
function localeToDir(locale: Locale): "ltr" | "rtl" {
	const dir =
		locale && config.locales?.[locale].dir
			? (config.locales?.[locale]?.dir as "ltr" | "rtl")
			: "ltr";
	return dir;
}

export function slugToParam(slug: string): string | undefined {
	return slug === "index" || slug === ""
		? undefined
		: slug.endsWith("/index")
		? slug.replace(/\/index$/, "")
		: slug;
}

export function slugToPathname(slug: string): string {
	const param = slugToParam(slug);
	return param ? "/" + param + "/" : "/";
}

/**
 * Convert a slug to a different locale.
 * For example, passing a slug of `en/home` and a locale of `fr` results in `fr/home`.
 * An undefined locale is treated as the root locale, resulting in `home`
 * @param slug A collection entry slug
 * @param locale The target locale
 * @example
 * localizedSlug('en/home', 'fr')       // => 'fr/home'
 * localizedSlug('en/home', undefined)  // => 'home'
 */
export function localizedSlug(slug: string, locale: Locale): string {
	const slugLocale = slugToLocale(slug);
	if (slugLocale === locale) return slug;
	locale = locale || "";
	if (slugLocale === slug) return locale;
	if (slugLocale) {
		return slug
			.replace(slugLocale + "/", locale ? locale + "/" : "")
			.replace(/\/$/, "");
	}
	return slug ? locale + "/" + slug : locale;
}

/**
 * Convert a collection entry ID to a different locale.
 * For example, passing an ID of `en/home.md` and a locale of `fr` results in `fr/home.md`.
 * An undefined locale is treated as the root locale, resulting in `home.md`.
 * @param id A collection entry ID
 * @param locale The target locale
 * @example
 * localizedSlug('en/home.md', 'fr')       // => 'fr/home.md'
 * localizedSlug('en/home.md', undefined)  // => 'home.md'
 */
export function localizedId(id: string, locale: string | undefined): string {
	const idLocale = slugToLocale(id);
	if (idLocale) {
		return id.replace(idLocale + "/", locale ? locale + "/" : "");
	} else if (locale) {
		return locale + "/" + id;
	} else {
		return id;
	}
}

/**
 * Get a page’s slug, without the language prefix (e.g. `'en/migrate'` => `'migrate'`).
 *
 */
export const stripLangFromSlug = (slug: string) =>
	slug.split("/").slice(1).join("/");

/**
 *  Get the language code from a page URL
 *
 * @param url The page URL (usually from Astro.url)
 * @returns Language code (e.g. `'en'`)
 */
export const getLangFromUrl = (url: URL): Lang => {
	const [, lang] = url.pathname.split("/");
	if (lang in config.locales) return lang as Lang;
	return config.defaultLocale as Lang;
};
