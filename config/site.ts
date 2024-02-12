export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Granja Avícola San Antonio C.B.",
	description: "Granja de producción de huevos y cría de gallinas ponedoras en Ingenio, Gran Canaria.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
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
	],
	navMenuItems: [
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
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
