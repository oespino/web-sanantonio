import type { Metadata } from "next";
import { siteConfig } from "./site";

// Image used when a page is shared (Open Graph / Twitter). It is the 150x150
// app icon for now; when a 1200x630 image is available, replace it here and
// switch `twitterCard` to "summary_large_image".
export const shareImage = {
	url: "/apple-touch-icon.png",
	width: 150,
	height: 150,
	alt: siteConfig.name,
};

export const twitterCard = "summary";

type PageMetadataInput = {
	/** Page title without the site name. Omit it to use the default (home) title. */
	title?: string;
	description: string;
	/** Absolute path of the page, with the trailing slash the site uses (e.g. "/huevos/"). */
	path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
	const url = `${siteConfig.url}${path}`;
	const shareTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.defaultTitle;

	return {
		...(title ? { title } : {}),
		description,
		alternates: { canonical: url },
		openGraph: {
			title: shareTitle,
			description,
			url,
			siteName: siteConfig.name,
			locale: "es_ES",
			type: "website",
			images: [shareImage],
		},
		twitter: {
			card: twitterCard,
			title: shareTitle,
			description,
			images: [shareImage.url],
		},
	};
}
