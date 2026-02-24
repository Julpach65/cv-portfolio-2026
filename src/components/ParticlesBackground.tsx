"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particleOptions: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
        number: {
            value: 55,
            density: { enable: true, width: 900, height: 900 },
        },
        color: { value: "#3b82f6" },
        links: {
            enable: true,
            color: "#3b82f6",
            opacity: 0.08,
            distance: 140,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            outModes: { default: "bounce" },
        },
        opacity: {
            value: { min: 0.05, max: 0.25 },
            animation: { enable: true, speed: 0.5, sync: false },
        },
        size: {
            value: { min: 1, max: 2.5 },
        },
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
        },
        modes: {
            grab: {
                distance: 160,
                links: { opacity: 0.45 },
            },
            push: { quantity: 2 },
        },
    },
    detectRetina: true,
};

export default function ParticlesBackground() {
    const [engineReady, setEngineReady] = useState(false);

    useEffect(() => {
        let isMounted = true;
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            if (isMounted) {
                setEngineReady(true);
            }
        });
        return () => {
            isMounted = false;
        };
    }, []);

    if (!engineReady) return null;

    return (
        <Particles
            id="tsparticles"
            options={particleOptions}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
