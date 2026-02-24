import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export default function HomePage() {
    return (
        <main className="min-h-screen relative">
            {/* Particles fixed background layer */}
            <ParticlesBackground />

            {/* Content above particles */}
            <div className="relative z-10">
                <Navbar />
                <PageTransition>
                    <Hero />
                    <ScrollReveal>
                        <About />
                    </ScrollReveal>
                    <ScrollReveal>
                        <Skills />
                    </ScrollReveal>
                    <ScrollReveal>
                        <Projects />
                    </ScrollReveal>
                    <ScrollReveal>
                        <Certifications />
                    </ScrollReveal>
                    <ScrollReveal>
                        <Contact />
                    </ScrollReveal>
                    <Footer />
                </PageTransition>
            </div>
        </main>
    );
}
