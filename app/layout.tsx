import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { Footer } from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	metadataBase: new URL('https://www.avicolasanantonio.com'),
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		type: "website",
		images: '/apple-touch-icon.png'
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewPort: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

const jsonLd = {
	'@context': 'https://schema.org/',
	'@type': 'LocalBusiness',
	name: siteConfig.name,
	image: "https://www.avicolasanantonio.com/favicon-16x16.png",
	description: siteConfig.description,
	address: {
		'@type': "PostalAddress",
		addressCountry: "ES",
		addressRegion: "Las Palmas",
		addressLocality: "Ingenio",
		postalCode: "35250",
		streetAddress: "Cam. Viejo Al Carrizal, S/N"
	},
	geo: {
		'@type': "GeoCoordinates",
		latitude: 27.91459182516049,
		longitude: -15.42733958998171
	},
	url: "https://www.avicolasanantonio.com/",
	telephone: "+34928781329",
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
			],
			"opens": "08:00",
			"closes": "13:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": "Saturday",
			"opens": "08:00",
			"closes": "11:00"
		}
	],
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-fixed bg-[url('/background.webp')] bg-cover font-sans antialiased light",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col min-h-screen overflow-x-hidden">
						<Navbar />
						<script
							type="application/ld+json"
							dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
						/>
						<main className="mx-auto w-screen">
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
