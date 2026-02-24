"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
    const t = useTranslations("nav");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const locales = [
        { code: "es", label: "ES" },
        { code: "en", label: "EN" },
        { code: "fr", label: "FR" },
    ];

    const switchLocale = (newLocale: string) => {
        if (newLocale === locale) return;
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4">
            <div className="max-w-7xl mx-auto px-6 flex justify-end items-center gap-6 text-sm font-medium">
                <div className="hidden md:flex items-center gap-6">
                    <a
                        className="text-gray-400 hover:text-white transition-colors"
                        href="#about"
                    >
                        {t("about")}
                    </a>
                    <a
                        className="text-gray-400 hover:text-white transition-colors"
                        href="#skills"
                    >
                        {t("skills")}
                    </a>
                    <a
                        className="text-gray-400 hover:text-white transition-colors"
                        href="#projects"
                    >
                        {t("projects")}
                    </a>
                    <a
                        className="text-gray-400 hover:text-white transition-colors"
                        href="#contact"
                    >
                        {t("contact")}
                    </a>
                </div>

                {/* Animated Language Switcher */}
                <div className="flex items-center gap-1 border border-gray-700 rounded-full px-1 py-1 bg-[#111114] relative">
                    {locales.map(({ code, label }) => (
                        <button
                            key={code}
                            onClick={() => switchLocale(code)}
                            className="relative text-xs px-3 py-1 rounded-full font-semibold z-10 transition-colors duration-200"
                            style={{
                                color: locale === code ? "#fff" : "#9ca3af",
                            }}
                        >
                            {/* Animated sliding pill background */}
                            {locale === code && (
                                <motion.div
                                    layoutId="lang-pill"
                                    className="absolute inset-0 bg-blue-600 rounded-full"
                                    style={{ zIndex: -1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 35,
                                    }}
                                />
                            )}
                            {label}
                        </button>
                    ))}
                </div>

                {/* Download CV */}
                <a
                    href="/cv.pdf"
                    download="Julian_Pacheco_CV.pdf"
                    className="hidden sm:flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-4 py-2 rounded-lg transition-colors text-xs font-semibold"
                >
                    <FaDownload />
                    {t("downloadCV")}
                </a>
            </div>
        </nav>
    );
}
