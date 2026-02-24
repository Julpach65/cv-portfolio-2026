"use client";
import { useState, useEffect } from "react";

interface TypewriterEffectProps {
    texts: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export default function TypewriterEffect({
    texts,
    className,
    typingSpeed = 75,
    deletingSpeed = 38,
    pauseDuration = 2200,
}: TypewriterEffectProps) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let cancelled = false;
        let index = 0;

        const run = async () => {
            while (!cancelled) {
                const word = texts[index % texts.length];

                // --- Typing phase ---
                for (let i = 1; i <= word.length; i++) {
                    if (cancelled) break;
                    setDisplay(word.slice(0, i));
                    await sleep(typingSpeed);
                }

                if (cancelled) break;
                // --- Pause after fully typed ---
                await sleep(pauseDuration);
                if (cancelled) break;

                // --- Deleting phase ---
                for (let i = word.length - 1; i >= 0; i--) {
                    if (cancelled) break;
                    setDisplay(word.slice(0, i));
                    await sleep(deletingSpeed);
                }

                if (cancelled) break;
                // --- Short pause before next word ---
                await sleep(300);
                index++;
            }
        };

        run();
        return () => {
            cancelled = true;
        };
    }, [texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {display}
            <span className="inline-block w-0.5 h-[0.9em] bg-blue-400 ml-0.5 align-middle animate-pulse" />
        </span>
    );
}
