export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Granja Avícola San Antonio C.B.",
	description: "Granja de producción de huevos y cría de gallinas ponedoras en Ingenio, Gran Canaria. Venta y reparto de la producción de huevos frescos diariamente a hostelería y comercios. Venta a particulares de gallinas ponedoras y cría para otras explotaciones ganaderas.",
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
