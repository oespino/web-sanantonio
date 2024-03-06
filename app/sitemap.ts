import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.avicolasanantonio.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.avicolasanantonio.com/contacto',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.avicolasanantonio.com/sobre-nosotros',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.avicolasanantonio.com/gallinas',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://www.avicolasanantonio.com/huevos',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://www.avicolasanantonio.com/etiquetado-huevos',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://www.avicolasanantonio.com/aviso-legal',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.1,
        },
    ]
}