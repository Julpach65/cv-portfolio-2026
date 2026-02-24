"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export default function ScrollReveal({
    children,
    width = "100%",
    delay = 0.2,
    duration = 0.6,
    yOffset = 30,
}: ScrollRevealProps) {
    return (
        <div style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: yOffset },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                {children}
            </motion.div>
        </div>
    );
}
