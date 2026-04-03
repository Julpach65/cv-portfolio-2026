"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
    // We can't easily rely on next-intl inside not-found at the top level without some generic fallback,
    // but since this is inside [locale], useTranslations usually works.
    let t;
    try {
        t = useTranslations("nav");
    } catch {
        // Fallback functions if translations fail to load on a brutal 404
        t = (key: string) => {
            if (key === "about") return "Volver al Inicio / Return Home";
            return "";
        };
    }

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] pt-20">
            {/* Emerald ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-br from-emerald-400 to-cyan-500 text-transparent bg-clip-text">
                        404
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                        Página no encontrada / Page not found
                    </h2>
                    
                    <p className="text-gray-400 mb-10 text-lg">
                        Parece que te has perdido en el ciberespacio. La página que buscas no existe o ha sido movida.
                    </p>

                    <Link 
                        href="/" 
                        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)] active:scale-95"
                    >
                        {t("about") || "Volver al Inicio"}
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
