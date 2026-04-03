"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
    FaArrowDown
} from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const platziCerts = [
    { key: "engineering", category: "eng", file: "/certs/platzi/platzi-ingenieria.pdf", img: "/certs/platzi/engineering.png" },
    { key: "ethicsAI", category: "ai", file: "/certs/platzi/platzi-etica-ia.pdf", img: "/certs/platzi/ethicsAI.png" },
    { key: "cyberWorkshop", category: "security", file: "/certs/platzi/platzi-taller-ciberseguridad.pdf", img: "/certs/platzi/cyberWorkshop.png" },
    { key: "businessSecurity", category: "security", file: "/certs/platzi/platzi-seguridad-empresas.pdf", img: "/certs/platzi/businessSecurity.png" },
    { key: "git", category: "dev", file: "/certs/platzi/platzi-gitgithub.pdf", img: "/certs/platzi/git.png" }, // Swap 1: git in 5th place
    { key: "crypto", category: "security", file: "/certs/platzi/platzi-fundamentos-criptografia.pdf", img: "/certs/platzi/crypto.png" }, // Swap 2: crypto in 6th place
    { key: "terminal", category: "dev", file: "/certs/platzi/platzi-terminal.pdf", img: "/certs/platzi/terminal.png" }, // Swap 1: terminal in 7th place
    { key: "dataAI", category: "ai", file: "/certs/platzi/platzi-data-ia-empresas.pdf", img: "/certs/platzi/dataAI.png" },
    { key: "midjourney", category: "ai", file: "/certs/platzi/platzi-midjourney.pdf", img: "/certs/platzi/midjourney.png" },
    { key: "ethicalDesign", category: "ai", file: "/certs/platzi/platzi-diseno-etico-ia.pdf", img: "/certs/platzi/ethicalDesign.png" },
    { key: "iaFinance", category: "ai", file: "/certs/platzi/platzi-ia-finanzas.pdf", img: "/certs/platzi/iaFinance.png" },
    { key: "englishAI", category: "ai", file: "/certs/platzi/platzi-ingles-ia.pdf", img: "/certs/platzi/englishAI.png" },
    { key: "aiCustomerService", category: "ai", file: "/certs/platzi/platzi-ai-servicio-cliente.pdf", img: "/certs/platzi/aiCustomerService.png" },
    { key: "sheets", category: "ai", file: "/certs/platzi/platzi-gpt-con-google-sheets.pdf", img: "/certs/platzi/sheets.png" },
    { key: "networks", category: "network", file: "/certs/platzi/platzi-redes.pdf", img: "/certs/platzi/networks.png" }, // Swap 2: networks in 15th place
    { key: "securityGuide", category: "security", file: "/certs/platzi/platzi-guia-seguridad-informatica.pdf", img: "/certs/platzi/securityGuide.png" },
];

export default function PlatziCertifications() {
    const t = useTranslations("platzi");
    const [isOpen, setIsOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);

    const showMore = () => {
        setVisibleCount(prev => Math.min(prev + 6, platziCerts.length));
    };

    return (
        <div className="mt-12 text-center">
            {/* Toggle Button - Emerald Solid Style (Matches Hero CTA) */}
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (!isOpen) setVisibleCount(6);
                }}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer mb-12 shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)]"
            >
                <span>{isOpen ? t("hide") : t("explore")}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-lg"
                >
                    <FaArrowDown />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {platziCerts.slice(0, visibleCount).map((cert) => (
                                <motion.div
                                    key={cert.key}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -5 }}
                                    className="relative aspect-[16/10] rounded-2xl overflow-hidden group shadow-xl border border-gray-800"
                                >
                                    {/* Certificate Background Image */}
                                    <Image
                                        src={cert.img}
                                        alt={t(`items.${cert.key}`)}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    
                                    {/* Dark Overlay - Clean Centered Layout */}
                                    <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px] opacity-90 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                        <h3 className="text-white font-bold text-lg mb-6 drop-shadow-md max-w-[85%]">
                                            {t(`items.${cert.key}`)}
                                        </h3>
                                        <a
                                            href={cert.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg active:scale-95"
                                        >
                                            {t("viewCert")}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination Button - Solid Emerald Style */}
                        {visibleCount < platziCerts.length && (
                            <button
                                onClick={showMore}
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-all mb-8 cursor-pointer shadow-lg active:scale-95"
                            >
                                {t("showMore")}
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
