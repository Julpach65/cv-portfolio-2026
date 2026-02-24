"use client";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import {
    SiMysql,
    SiKotlin,
    SiTypescript,
    SiPhp,
    SiFigma,
    SiReact,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiDocker,
    SiJira,
} from "react-icons/si";
import { FaJava, FaChartBar } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import SpringBootIcon from "@/components/icons/SpringBootIcon";

interface Skill {
    name: string;
    icon: ReactNode;
}

interface SkillCardProps {
    title: string;
    badge: string;
    skills: Skill[];
    badgeColor: string;
    hoverBorder: string;
}

function SkillCard({ title, badge, skills, badgeColor, hoverBorder }: SkillCardProps) {
    return (
        <div className="bg-[#111114] border border-gray-800 rounded-2xl p-6 relative">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <span className={`${badgeColor} text-xs font-bold px-2 py-1 rounded`}>
                    {badge}
                </span>
            </div>
            <div className="space-y-3">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`flex items-center gap-3 p-3 rounded-lg border border-gray-800 bg-[#0a0a0a]/50 ${hoverBorder} transition-colors`}
                    >
                        {skill.icon}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    const t = useTranslations("skills");

    const backendSkills: Skill[] = [
        { icon: <SiMysql className="text-[#4479A1] text-xl" />, name: "MySQL" },
        { icon: <SiKotlin className="text-[#7F52FF] text-xl" />, name: "Kotlin" },
        { icon: <FaJava className="text-orange-500 text-xl" />, name: "Java" },
        { icon: <SpringBootIcon className="text-xl w-[1.25em] h-[1.25em]" />, name: "Spring Boot" },
        { icon: <SiPhp className="text-purple-400 text-xl" />, name: "PHP" },
    ];

    const frontendSkills: Skill[] = [
        { icon: <SiFigma className="text-pink-500 text-xl" />, name: "Figma" },
        { icon: <DiHtml5 className="text-orange-600 text-xl" />, name: "HTML 5" },
        { icon: <SiReact className="text-cyan-400 text-xl" />, name: "React" },
        { icon: <SiTailwindcss className="text-blue-400 text-xl" />, name: "Tailwind CSS" },
        { icon: <SiTypescript className="text-[#3178C6] text-xl" />, name: "TypeScript" },
    ];

    const toolSkills: Skill[] = [
        { icon: <SiGit className="text-red-500 text-xl" />, name: "Git" },
        { icon: <SiGithub className="text-white text-xl" />, name: "GitHub" },
        { icon: <SiDocker className="text-blue-500 text-xl" />, name: "Docker" },
        { icon: <SiJira className="text-blue-400 text-xl" />, name: "Jira" },
        { icon: <FaChartBar className="text-yellow-500 text-xl" />, name: "Power BI" },
    ];

    return (
        <section className="py-24" id="skills">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 text-center">
                    {t("title")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCard
                        title={t("backend.name")}
                        badge={t("backend.badge")}
                        skills={backendSkills}
                        badgeColor="bg-blue-500/20 text-blue-400"
                        hoverBorder="hover:border-blue-500/40"
                    />
                    <SkillCard
                        title={t("frontend.name")}
                        badge={t("frontend.badge")}
                        skills={frontendSkills}
                        badgeColor="bg-green-500/20 text-green-400"
                        hoverBorder="hover:border-green-500/40"
                    />
                    <SkillCard
                        title={t("tools.name")}
                        badge={t("tools.badge")}
                        skills={toolSkills}
                        badgeColor="bg-purple-500/20 text-purple-400"
                        hoverBorder="hover:border-purple-500/40"
                    />
                </div>
            </div>
        </section>
    );
}
