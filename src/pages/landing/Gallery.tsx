'use client';

import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";
import Image from "next/image";
import { Maximize2, Share2, Download } from "lucide-react";

export default function Gallery() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="gallery">
            {/* Ambient background noise/gradient */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
                    <div>
                        
                        <h2 className="text-4xl md:text-6xl font-bold text-white font-mono leading-none">
                            GALERI <br />
                            
                        </h2>
                    </div>

                    <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 text-sm hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                            Filter: Semua
                        </button>
                        <button className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 text-sm hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                            2024
                        </button>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4">
                    {galleryImages.map((src, index) => {
                        // Create a random-ish but deterministic span pattern
                        const isLarge = index === 0 || index === 4 || index === 6;
                        const spanClass = isLarge ? "md:col-span-2" : "md:col-span-1";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 ${spanClass}`}
                            >
                                {/* Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`Dokumentasi ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                                </div>

                                {/* Hover Overlay Info */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-cyan-400 font-mono text-xs mb-1">IMG_RAW_{100 + index}.CR2</p>
                                                <h3 className="text-white font-bold text-lg">Dokumentasi Kegiatan</h3>
                                            </div>

                                            <div className="flex gap-2">
                                                <button className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-cyan-500 hover:text-black transition-colors">
                                                    <Maximize2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-cyan-500 hover:text-black transition-colors">
                                                    <Download className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Persistent Corner Decor */}
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-slate-300 uppercase">
                                    Polinema Robotics
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
