"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const locale = useLocale();

    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={locale}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
                className="w-full"
                suppressHydrationWarning
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
