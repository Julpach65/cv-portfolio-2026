"use client";
import { useTranslations } from "next-intl";
import { FaGithub, FaFigma } from "react-icons/fa";

const projectLinks = {
    mazzCamaron:
        "https://www.figma.com/proto/4c0TbCN3EAFgivxaQrC6t4/REESPALDO-V3?node-id=3-11538&t=SLPTZe49DGmeKR2T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7311&show-proto-sidebar=1",
    invoXpressAdmin: "https://github.com/Julpach65/invoxpress-final",
    invoXpressEcommerce: "https://github.com/Julpach65/INVOXPRESS-WEB",
    cloudSyncAI: "https://github.com/Julpach65/encuestasfinal",
    mariaDeLetras: "https://github.com/Julpach65/Maria-de-letras",
    cinepolis: "https://github.com/Julpach65/Cinepolis-survey-APP",
};

const projectKeys = [
    "mazzCamaron",
    "invoXpressAdmin",
    "invoXpressEcommerce",
    "cloudSyncAI",
    "mariaDeLetras",
    "cinepolis",
] as const;

type ProjectKey = (typeof projectKeys)[number];

export default function Projects() {
    const t = useTranslations("projects");

    return (
        <section className="py-24 bg-[#111114]/20" id="projects" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-6" suppressHydrationWarning>
                <h2 className="text-3xl font-bold text-white mb-16 text-center">
                    {t("title")}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectKeys.map((key: ProjectKey) => {
                        const isFigma = key === "mazzCamaron";
                        const link = projectLinks[key];
                        const tags = t.raw(`items.${key}.tags`) as string[];

                        return (
                            <div
                                key={key}
                                className="bg-[#111114] border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all group"
                            >
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {t(`items.${key}.title`)}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {t(`items.${key}.description`)}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {tags.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    {isFigma ? (
                                        <>
                                            <FaFigma /> {t("viewPrototype")}
                                        </>
                                    ) : (
                                        <>
                                            <FaGithub /> {t("viewCode")}
                                        </>
                                    )}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
