"use client";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="py-8 border-t border-gray-900 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    © {year} Julian Pacheco Osuna. Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
}
