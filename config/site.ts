export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Granja Avícola San Antonio C.B.",
	description: "Granja de producción de huevos y cría de gallinas ponedoras en Ingenio, Gran Canaria. Reparto de la producción diariamente. Venta a particulares de gallinas ponedoras.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Huevos",
			href: "/huevos",
		},
		{
			label: "Gallinas",
			href: "/gallinas",
		},
		{
			label: "Sobre nosotros",
			href: "/sobre-nosotros",
		},
		{
			label: "Contacto",
			href: "/contacto",
		},
	]
};
