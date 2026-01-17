import { teams } from "@/lib/data";
import { ArrowLeft, Cpu, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Hardcoded for Aburobonema Component
export default function Aburobonema() {
    const team = teams.find((t) => t.id === 'aburobonema');

    if (!team) {
        return <div>Team not found</div>;
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200">
            {/* Navbar Spacer within component if used in App Router usually handled by layout but good to have safety */}
            <div className="h-24" />

            {/* Seamless Transition Gradients */}
            <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />

            {/* Background Decoration */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br ${team.color} opacity-10 blur-[120px] rounded-full`} />
                <div className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr ${team.color} opacity-10 blur-[120px] rounded-full`} />
            </div>

            <article className="container mx-auto px-4 relative z-10 py-12">
                {/* Back Button */}
                <Link
                    href="/#divisions"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Kembali ke Beranda</span>
                </Link>

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono tracking-widest mb-6">
                            <Cpu className="w-4 h-4" />
                            <span>DIVISI ROBOTIK</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-mono mb-6 leading-tight">
                            {team.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-8 border-l-4 border-cyan-500 pl-6">
                            {team.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Kategori</span>
                                <span className="text-white font-bold">{team.category}</span>
                            </div>
                            <div className="px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Status Tim</span>
                                <span className="text-emerald-400 font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    Aktif Berkompetisi
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <Image
                            src={team.image}
                            alt={team.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        {/* Glitch/Tech Overlay */}
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-cyan-500 rounded-full" />
                                Apa yang Kami Kerjakan?
                            </h2>
                            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                                <p>
                                    Di dalam divisi <strong>{team.name}</strong>, kami fokus pada pengembangan teknologi robotika canggih yang tidak hanya mengejar kemenangan kompetisi, tetapi juga inovasi yang dapat diterapkan.
                                </p>
                                <p className="mt-4">
                                    Anggota tim terlibat dalam research & development (R&D) yang intensif, mencakup:
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 marker:text-cyan-500">
                                    <li>Desain Mekanik Presisi tinggi menggunakan CAD/CAM</li>
                                    <li>Pengembangan Sistem Kontrol Canggih (PID, Fuzzy Logic)</li>
                                    <li>Computer Vision dan Artificial Intelligence</li>
                                    <li>Integrasi Elektronika dan Mikrokontroler (STM32, ESP32)</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-violet-500 rounded-full" />
                                Galeri Aktivitas
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Placeholder Gallery Grid */}
                                <div className="aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden group">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-sm group-hover:text-cyan-400 transition-colors">
                                        Riset_Lab_01.jpg
                                    </div>
                                </div>
                                <div className="aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden group">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-sm group-hover:text-cyan-400 transition-colors">
                                        Kompetisi_2024.jpg
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 sticky top-32">
                            <h3 className="text-xl font-bold text-white mb-6 font-mono">PENCAPAIAN TERBARU</h3>

                            <div className="space-y-6">
                                <div className="relative pl-6 border-l-2 border-slate-800 hover:border-yellow-500 transition-colors group">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-yellow-500 transition-colors" />
                                    <span className="text-xs font-mono text-slate-500 mb-1 block">2024</span>
                                    <h4 className="text-white font-bold group-hover:text-yellow-400 transition-colors">Juara 1 Regional</h4>
                                    <p className="text-sm text-slate-400 mt-1">Kontes Robot Indonesia</p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-slate-800 hover:border-slate-600 transition-colors group">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-slate-600 transition-colors" />
                                    <span className="text-xs font-mono text-slate-500 mb-1 block">2023</span>
                                    <h4 className="text-white font-bold group-hover:text-slate-300 transition-colors">Best Design Award</h4>
                                    <p className="text-sm text-slate-400 mt-1">Nasional Championship</p>
                                </div>
                            </div>

                            <button className="w-full mt-8 py-3 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold transition-all flex items-center justify-center gap-2 group">
                                Lihat Semua Prestasi
                                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </aside>
                </div>
            </article>
        </main>
    );
}
