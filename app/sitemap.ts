import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

// URLs use the trailing slash the site is served with (trailingSlash: true),
// so they match each page's canonical and do not trigger a redirect.
// lastModified is only set where the page itself states a date.
const routes: { path: string; lastModified?: Date }[] = [
    { path: '/' },
    { path: '/huevos/' },
    { path: '/gallinas/' },
    { path: '/sobre-nosotros/' },
    { path: '/contacto/' },
    { path: '/etiquetado-huevos/' },
    { path: '/transparencia/', lastModified: new Date('2024-04-11') },
    { path: '/aviso-legal/' },
]

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map(({ path, lastModified }) => ({
        url: `${siteConfig.url}${path}`,
        ...(lastModified ? { lastModified } : {}),
    }))
}
