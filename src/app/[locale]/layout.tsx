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

export const metadata: Metadata = {
    title: "Julian Pacheco Osuna - Portfolio",
    description:
        "Backend Developer | Fullstack | UI/UX Designer based in Mazatlán, Sinaloa",
    icons: {
        icon: "/icon.jpg",
    },
};

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

    return (
        <html className="dark" lang={locale} suppressHydrationWarning>
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
