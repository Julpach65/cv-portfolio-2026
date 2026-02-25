"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function Hero() {
    const t = useTranslations("hero");

    const roles = [
        t("roles.backend"),
        t("roles.student"),
        t("roles.dba"),
        t("roles.analyst"),
    ];

    return (
        <section className="relative pt-32 pb-20 overflow-hidden" suppressHydrationWarning>

            {/* === AURORA GLOW (Opcion 3) === */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "5%",
                    right: "0%",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.07) 40%, transparent 70%)",
                    filter: "blur(60px)",
                    animation: "aurora-pulse 8s ease-in-out infinite alternate",
                }}
            />
            <div
                className="absolute pointer-events-none"
                style={{
                    bottom: "0%",
                    left: "-5%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
                    filter: "blur(80px)",
                    animation: "aurora-pulse 11s ease-in-out infinite alternate-reverse",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text */}
                <div className="space-y-6">
                    <span className="text-blue-400 font-medium text-lg tracking-wide">
                        {t("greeting")}
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                        Julian Pacheco
                        <br />
                        Osuna
                    </h1>

                    {/* Typewriter role */}
                    <div className="text-2xl font-semibold min-h-[2.5rem]">
                        <TypewriterEffect
                            texts={roles}
                            className="text-blue-400"
                            typingSpeed={75}
                            deletingSpeed={38}
                            pauseDuration={2200}
                        />
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="https://github.com/Julpach65"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-700 hover:bg-blue-600 hover:border-blue-600 text-white px-5 py-2.5 rounded-lg transition-all"
                        >
                            <FaGithub className="text-xl" />
                            {t("github")}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/julian-pacheco-osuna-87b67b3a9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-700 hover:bg-blue-600 hover:border-blue-600 text-white px-5 py-2.5 rounded-lg transition-all"
                        >
                            <FaLinkedin className="text-xl" />
                            {t("linkedin")}
                        </a>
                    </div>
                    <div className="pt-2">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                            style={{ boxShadow: "0 0 20px -4px rgba(59,130,246,0.5)" }}
                        >
                            {t("cta")} <FaArrowDown />
                        </a>
                    </div>
                </div>

                {/* Profile Photo */}
                <div className="flex justify-center lg:justify-end relative">
                    {/* Photo glow blur */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            width: "320px",
                            height: "320px",
                            borderRadius: "50%",
                            background: "rgba(59,130,246,0.18)",
                            filter: "blur(50px)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                        }}
                    />
                    <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full border-4 border-blue-500/50 overflow-hidden shadow-2xl z-10 transition-all duration-500 hover:scale-[1.02] hover:border-blue-600 cursor-pointer group">
                        <Image
                            src="/foto-cv.jpeg"
                            alt="Julian Pacheco Osuna"
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
