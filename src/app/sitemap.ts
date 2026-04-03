import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://julianpacheco.com";

    // Generar entradas de sitemap para cada idioma soportado
    const sitemaps: MetadataRoute.Sitemap = routing.locales.map((locale) => {
        // Mapear los idiomas para el atributo hreflang en el sitemap XML
        const languages = routing.locales.reduce((acc, l) => {
            acc[l] = `${baseUrl}/${l}`;
            return acc;
        }, {} as Record<string, string>);

        return {
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
            alternates: {
                languages: {
                    ...languages,
                    "x-default": `${baseUrl}/es`,
                },
            },
        };
    });

    // Agregar la ruta raíz que es manejada por el middleware de internacionalización
    sitemaps.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    });

    return sitemaps;
}
