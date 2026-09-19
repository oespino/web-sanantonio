import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { shareImage, twitterCard } from "@/config/metadata";
import { localBusinessJsonLd } from "@/config/structured-data";
import { fontDisplay, fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { Footer } from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
	title: {
		default: siteConfig.defaultTitle,
		template: `%s | ${siteConfig.shortName}`,
	},
	description: siteConfig.shortDescription,
	metadataBase: new URL(siteConfig.url),
	openGraph: {
		title: siteConfig.defaultTitle,
		description: siteConfig.shortDescription,
		type: "website",
		siteName: siteConfig.name,
		locale: "es_ES",
		images: [shareImage],
	},
	twitter: {
		card: twitterCard,
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
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
					fontSans.variable,
					fontDisplay.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col min-h-screen overflow-x-hidden">
						<Navbar />
						<script
							type="application/ld+json"
							dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
