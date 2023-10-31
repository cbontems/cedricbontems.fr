import config from "~config";
import translations, { routes } from "~/translations";

export type Lang = keyof typeof config.locales;

export const useTranslations = (lang: Lang) => {
	const t = (key: keyof (typeof translations)[typeof config.defaultLocale]) => {
		return translations[lang][key] || translations[config.defaultLocale][key];
	};
	return t;
};

export const useTranslatedPath = (lang: Lang) => {
	const tp = (path: string, l: string = lang) => {
		const [currentLang, ...rest] = path.split("/").slice(1);

		if (currentLang === l) return path;

		const slug = rest.filter(Boolean).join("/");
		const currentIsDefaultLang = currentLang === config.defaultLocale;

		if (currentIsDefaultLang) {
			const translatedSlug = routes[l][slug as keyof (typeof routes)[0]];
			return translatedSlug ? `/${l}/${translatedSlug}/` : path;
		}

		const targetIsDefaultLang = l === config.defaultLocale;
		const sourceDictionnary = routes[currentLang as Lang];
		const defaultLangSlug = currentIsDefaultLang
			? slug
			: Object.keys(sourceDictionnary).find(
					(key) => sourceDictionnary[key] === slug,
			  );

		const translatedSlug = targetIsDefaultLang
			? defaultLangSlug
			: routes[l][defaultLangSlug as keyof (typeof routes)[0]];

		if (!translatedSlug) return `/${l}/${slug}/`;

		const translatedPath = targetIsDefaultLang
			? "/" + defaultLangSlug || slug
			: "/" + translatedSlug;
		console.log("returned", `/${l}${translatedPath}/`);

		return `/${l}${translatedPath}/`;
	};
	return tp;
};
