import escapeRegExp from "./escapeRegExp";

function replaceAll(str: string, search: string, replacement: string): string {
	return str.replace(new RegExp(escapeRegExp(search), "g"), replacement);
}

export default replaceAll;
