import { siteConfig } from "./site";

const email = "info@avicolasanantonio.com";

const openingHours = [
	{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
		opens: "08:00",
		closes: "13:00",
	},
	{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: "Saturday",
		opens: "08:00",
		closes: "11:00",
	},
];

// The company has two farms in Ingenio. La Montañeta is the main one (its
// address and coordinates are also on the business itself); the coordinates
// of Los Moriscos are the center of the embedded Google map on /contacto/.
const locations = [
	{
		"@type": "Place",
		name: "Granja Avícola San Antonio C.B. - La Montañeta",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Cam. Viejo Al Carrizal, S/N",
			postalCode: "35250",
			addressLocality: "Ingenio",
			addressRegion: "Las Palmas",
			addressCountry: "ES",
		},
		geo: { "@type": "GeoCoordinates", latitude: 27.91459182516049, longitude: -15.42733958998171 },
		hasMap: "https://maps.app.goo.gl/sc3rvoxqGbJwhdA48",
	},
	{
		"@type": "Place",
		name: "Granja Avícola San Antonio C.B. - Los Moriscos",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Los Moriscos, S/N",
			postalCode: "35259",
			addressLocality: "Ingenio",
			addressRegion: "Las Palmas",
			addressCountry: "ES",
		},
		geo: { "@type": "GeoCoordinates", latitude: 27.9375, longitude: -15.4104 },
		hasMap: "https://maps.app.goo.gl/76N4NDxubRveRH359",
	},
];

export const localBusinessJsonLd = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"@id": `${siteConfig.url}/#business`,
	name: siteConfig.name,
	url: `${siteConfig.url}/`,
	description: siteConfig.description,
	logo: `${siteConfig.url}/logo.png`,
	image: [`${siteConfig.url}/huevos_portada.jpg`, `${siteConfig.url}/gallinas_portada.jpg`],
	email,
	telephone: "+34928781329",
	address: locations[0].address,
	geo: locations[0].geo,
	hasMap: locations[0].hasMap,
	location: locations,
	// Eggs are delivered to the whole island.
	areaServed: { "@type": "AdministrativeArea", name: "Gran Canaria" },
	openingHoursSpecification: openingHours,
};
