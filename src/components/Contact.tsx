"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";

export default function Contact() {
    const t = useTranslations("contact");
    const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("SENDING");

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // IMPORTANTE: 'mqedgrev' es el ID real configurado por el usuario.
        const FORMSPREE_ID = "mqedgrev";

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
                setTimeout(() => {
                    setStatus((prev) => prev === "SUCCESS" ? "IDLE" : prev);
                }, 5000);
            } else {
                const result = await response.json();
                console.error("Error de Formspree:", result);
                setStatus("ERROR");
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setStatus("ERROR");
        }
    };

    return (
        <section className="py-24 bg-[#111114]/20" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 text-center md:text-left">
                    {t("title")}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">
                                        {t("nameLabel")}
                                    </label>
                                    <input
                                        name="name"
                                        required
                                        className="w-full bg-[#111114] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-600"
                                        placeholder={t("namePlaceholder")}
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">
                                        {t("emailLabel")}
                                    </label>
                                    <input
                                        name="email"
                                        required
                                        className="w-full bg-[#111114] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-600"
                                        placeholder={t("emailPlaceholder")}
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">
                                    {t("messageLabel")}
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full bg-[#111114] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-600 resize-none"
                                    placeholder={t("messagePlaceholder")}
                                    rows={6}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "SENDING"}
                                className={`w-full ${status === "SUCCESS" ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"} text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50`}
                            >
                                {status === "IDLE" && (
                                    <>
                                        {t("send")} <FaPaperPlane className="text-sm" />
                                    </>
                                )}
                                {status === "SENDING" && (
                                    <>
                                        {t("sending")} <FaSpinner className="animate-spin" />
                                    </>
                                )}
                                {status === "SUCCESS" && (
                                    <>
                                        {t("success")} <FaCheckCircle />
                                    </>
                                )}
                                {status === "ERROR" && (
                                    <>
                                        {t("error")}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold text-white">{t("infoTitle")}</h3>
                        <div className="space-y-4">
                            <div className="bg-[#111114] border border-gray-800 rounded-xl p-4 flex items-center gap-4 hover:border-gray-700 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-500">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">{t("emailLabel")}</p>
                                    <p className="text-white font-medium">{t("emailValue")}</p>
                                </div>
                            </div>
                            <div className="bg-[#111114] border border-gray-800 rounded-xl p-4 flex items-center gap-4 hover:border-gray-700 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-500">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">{t("locationLabel")}</p>
                                    <p className="text-white font-medium">{t("locationValue")}</p>
                                </div>
                            </div>
                            <div className="bg-[#111114] border border-gray-800 rounded-xl p-4 flex items-center gap-4 hover:border-gray-700 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-500">
                                    <FaCheckCircle />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">{t("availableLabel")}</p>
                                    <p className="text-white font-medium text-sm">{t("availableValue")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
