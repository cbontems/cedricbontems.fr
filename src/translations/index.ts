import en from "./en.json";
import fr from "./fr.json";
import frRoutes from "./frRoutes.json";

export default Object.fromEntries(
	Object.entries({
		en,
		fr,
	}),
);

export const routes = Object.fromEntries(
	Object.entries({
		fr: frRoutes,
	}),
);
