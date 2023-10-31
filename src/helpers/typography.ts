/**
 * Capitalizes the first letter of a string
 * e.g. "hello world" -> "Hello world"
 *
 * @param str Text to capitalize
 * @returns Capitalized string
 */
export const capitalize = (str: string) => {
	return str[0].toUpperCase() + str.slice(1);
};

/**
 * Capitalizes the first letter of every word in a string
 * e.g. "hello world" -> "Hello World"
 *
 * @param str Text to capitalize
 * @returns Capitalized string
 */
export const capitalizeAll = (str: string) => {
	return str.split(" ").map(capitalize).join(" ");
};
