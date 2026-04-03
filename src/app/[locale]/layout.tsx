import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import "../globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    
    // Títulos y Descripciones Hiper-Optimizadas por Idioma
    const titles = {
        es: "Julian Pacheco Osuna | Ing. en TICs & Backend Developer",
        en: "Julian Pacheco Osuna | Software Engineer & Backend Developer",
        fr: "Julian Pacheco Osuna | Ingénieur Logiciel & Développeur Backend"
    };
    
    const descriptions = {
        es: "Ingeniero en TICs en Mazatlán, Sinaloa. Especialista en Desarrollo Backend, Base de Datos, Seguridad y UI/UX Design.",
        en: "Software Engineering student in Mazatlán, Sinaloa. Specialist in Backend Development, Databases, Security and UI/UX Design.",
        fr: "Étudiant en Ingénierie Logicielle à Mazatlán. Spécialiste en Développement Backend, Bases de Données, Sécurité et Design UI/UX."
    };
    
    // IMPORTANTE: Reemplazar con tu dominio real cuando lo despliegues
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://julianpacheco.com";

    return {
        title: titles[locale as keyof typeof titles] || titles.es,
        description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                "es": "/es",
                "en": "/en",
                "fr": "/fr",
                "x-default": "/es"
            }
        },
        openGraph: {
            title: titles[locale as keyof typeof titles] || titles.es,
            description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
            url: `${baseUrl}/${locale}`,
            siteName: "Julian Pacheco Osuna - Portfolio",
            images: [
                {
                    url: "/icon.jpg",
                    width: 800,
                    height: 800,
                    alt: "Julian Pacheco Osuna",
                }
            ],
            locale: locale,
            type: "website",
        },
        icons: {
            icon: "/icon.jpg",
        },
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!routing.locales.includes(locale as "es" | "en" | "fr")) {
        notFound();
    }
    const messages = await getMessages();

    // JSON-LD: Datos Estructurados para que Google te identifique como "Persona"
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://julianpacheco.com";
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Julian Pacheco Osuna",
        "url": baseUrl,
        "image": `${baseUrl}/icon.jpg`,
        "jobTitle": "Backend Developer & Software Engineer",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mazatlán",
            "addressRegion": "Sinaloa",
            "addressCountry": "MX"
        },
        "sameAs": [
            "https://github.com/", // Te sugiero rellenar aquí tu link real
            "https://linkedin.com/in/" // Y tu link de linkedin
        ]
    };

    return (
        <html className="dark" lang={locale} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                suppressHydrationWarning
                className={`${inter.className} bg-[#0a0a0a] text-gray-300 antialiased selection:bg-blue-600 selection:text-white`}
            >
                <NextIntlClientProvider messages={messages}>
                    <main className="min-h-screen relative" suppressHydrationWarning>
                        <ParticlesBackground />
                        <div className="relative z-10" suppressHydrationWarning>
                            <Navbar />
                            {children}
                        </div>
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
