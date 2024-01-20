export default function UpDateTheme(Property: string, value: any) {
	return document.documentElement.style.setProperty(Property, value);
}
