"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const t = useTranslations("nav");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const locales = [
        { code: "es", label: "ES" },
        { code: "en", label: "EN" },
        { code: "fr", label: "FR" },
    ];

    const navLinks = [
        { href: "#about", label: t("about") },
        { href: "#skills", label: t("skills") },
        { href: "#projects", label: t("projects") },
        { href: "#contact", label: t("contact") },
    ];

    const switchLocale = (newLocale: string) => {
        if (newLocale === locale) return;
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-6 text-sm font-medium" suppressHydrationWarning>

                {/* Logo or Brand Placeholder (Optional, currently just using the gap) */}
                <div className="flex-1 md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className="text-gray-400 hover:text-white transition-colors"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* Animated Language Switcher */}
                    <div className="flex items-center gap-1 border border-gray-700 rounded-full px-1 py-1 bg-[#111114] relative">
                        {locales.map(({ code, label }) => (
                            <button
                                key={code}
                                onClick={() => switchLocale(code)}
                                className="relative text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full font-semibold z-10 transition-colors duration-200"
                                style={{
                                    color: locale === code ? "#fff" : "#9ca3af",
                                }}
                            >
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

                    {/* Download CV - Visible on all devices now */}
                    <a
                        href="/cv.pdf"
                        download="Julian_Pacheco_CV.pdf"
                        className="flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-3 sm:px-4 py-2 rounded-lg transition-colors text-[10px] sm:text-xs font-semibold whitespace-nowrap"
                    >
                        <FaDownload className="text-xs" />
                        <span className="hidden xs:inline">{t("downloadCV")}</span>
                        <span className="xs:hidden">CV</span>
                    </a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <div className="md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[90]"
                        />

                        {/* Side Menu */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[280px] bg-[#111114] border-r border-white/10 z-[100] p-8 flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xl font-bold text-white tracking-tight">Menú</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-400 hover:text-white p-2 transition-colors"
                                >
                                    <FaTimes size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-xl font-medium text-gray-400 hover:text-blue-500 transition-colors py-2 border-b border-white/5 active:text-blue-400"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-auto pt-10">
                                <p className="text-gray-500 text-sm mb-4">Julian Pacheco Osuna</p>
                                <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent w-full"></div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
}
