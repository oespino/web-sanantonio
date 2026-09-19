export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Granja Avícola San Antonio C.B.",
	shortName: "Granja Avícola San Antonio",
	url: "https://www.avicolasanantonio.com",
	defaultTitle: "Granja Avícola San Antonio | Huevos y gallinas en Gran Canaria",
	description: "Granja de producción de huevos y cría de gallinas ponedoras en Ingenio, Gran Canaria. Venta y reparto de la producción de huevos frescos diariamente a hostelería y comercios. Venta a particulares de gallinas ponedoras y cría para otras explotaciones ganaderas.",
	shortDescription: "Granja avícola en Ingenio, Gran Canaria: huevos frescos de categoría A con reparto en toda la isla y cría de gallinas ponedoras.",
	navItems: [
		{
			label: "Inicio",
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
