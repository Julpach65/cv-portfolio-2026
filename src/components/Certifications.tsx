"use client";
import { useTranslations } from "next-intl";
import {
    FaNetworkWired,
    FaServer,
    FaHtml5,
    FaFileExcel,
    FaCss3Alt,
} from "react-icons/fa";

const certData = [
    {
        icon: <FaNetworkWired className="text-sm text-blue-400" />,
        key: "ccna1",
        bg: "bg-blue-900/30 border-blue-900",
        file: "/certs/ccna1.pdf",
    },
    {
        icon: <FaServer className="text-sm text-blue-400" />,
        key: "ccna2",
        bg: "bg-blue-900/30 border-blue-900",
        file: "/certs/ccna2.pdf",
    },
    {
        icon: <FaHtml5 className="text-sm text-orange-400" />,
        key: "html",
        bg: "bg-orange-900/30 border-orange-900",
        file: "/certs/html.pdf",
    },
    {
        icon: <FaFileExcel className="text-sm text-green-400" />,
        key: "sheets",
        bg: "bg-green-900/30 border-green-900",
        file: "/certs/sheets.pdf",
    },
    {
        icon: <FaCss3Alt className="text-sm text-blue-400" />,
        key: "css",
        bg: "bg-blue-900/30 border-blue-900",
        file: "/certs/css.pdf",
    },
];

export default function Certifications() {
    const t = useTranslations("certifications");

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 text-center">
                    {t("title")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certData.map(({ icon, key, bg, file }) => (
                        <div
                            key={key}
                            className="bg-[#111114] border border-gray-800 rounded-2xl p-6 flex flex-col h-full hover:border-blue-500/40 transition-colors"
                        >
                            <div
                                className={`w-10 h-10 rounded-full ${bg} border flex items-center justify-center mb-4`}
                            >
                                {icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {t(`items.${key}.name`)}
                            </h3>
                            <p className="text-blue-400 text-xs font-semibold mb-1">
                                {t(`items.${key}.issuer`)}
                            </p>
                            <p className="text-gray-500 text-xs mb-6">
                                {t(`items.${key}.year`)}
                            </p>
                            <a
                                href={file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto w-full border border-gray-700 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white py-2 rounded-lg text-sm transition-all text-center block"
                            >
                                {t("viewCert")}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
