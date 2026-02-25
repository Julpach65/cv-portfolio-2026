"use client";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("about");

    return (
        <section className="py-24 bg-[#111114]/30" id="about" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-6" suppressHydrationWarning>
                <h2 className="text-3xl font-bold text-white mb-16 text-center">
                    {t("title")}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                        <p>{t("p1")}</p>
                        <p>{t("p2")}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Stat card - Proyectos */}
                        <a
                            href="#projects"
                            className="bg-[#111114] border border-gray-800 p-8 rounded-2xl flex flex-col items-center justify-center hover:border-blue-500/50 transition-all group cursor-pointer hover:bg-blue-500/5"
                        >
                            <span className="text-5xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform">
                                6
                            </span>
                            <span className="text-gray-500 text-sm tracking-widest font-semibold uppercase group-hover:text-blue-400 transition-colors">
                                {t("projects")}
                            </span>
                        </a>

                        {/* Stat card - Tecnologías */}
                        <a
                            href="#skills"
                            className="bg-[#111114] border border-gray-800 p-8 rounded-2xl flex flex-col items-center justify-center hover:border-blue-500/50 transition-all group cursor-pointer hover:bg-blue-500/5"
                        >
                            <span className="text-5xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform">
                                15
                            </span>
                            <span className="text-gray-500 text-sm tracking-widest font-semibold uppercase group-hover:text-blue-400 transition-colors">
                                {t("technologies")}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
