import { format, formatISO } from "date-fns";
import frLocale from "date-fns/locale/fr";
import enUsLocale from "date-fns/locale/en-US";

const locales = {
	en: enUsLocale,
	fr: frLocale,
};

export const getLocalizedDate = (locale: keyof typeof locales, date: Date) => {
	return format(date, "PPP", { locale: locales[locale] });
};

export const getIsoDate = (date: Date) => {
	return formatISO(date);
};
