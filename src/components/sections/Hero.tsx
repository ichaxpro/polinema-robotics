'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px] animate-pulse delay-1000" /> */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>

            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="container mx-auto px-4 z-10 text-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.3
                        }
                    }
                }}
            >


                <div className="flex flex-col items-center">
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white poppins leading-[0.8] tracking-tight"
                        >
                            BERINOVASI
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-8 py-2 px-4">
                        <motion.div
                            initial={{ y: "150%", rotate: 5 }}
                            animate={{ y: 0, rotate: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        >
                            <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-orange-400 poppins tracking-widest">
                                TANPA BATAS
                            </span>
                        </motion.div>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-mono"
                >
                    Website Resmi <span className="text-white font-semibold">Polinema Robotics</span>.<br />
                    <span className="inline-block mt-2 text-slate-500">
                        Merancang masa depan melalui otonomi, presisi, dan rasa ingin tahu.
                    </span>
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* <button className="group relative px-8 py-4 bg-white text-slate-950 font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                            Jelajahi Divisi <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button> */}


                </motion.div>
            </motion.div>

            {/* Decorative Grid Bottom */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-20" />
        </section>
    );
}
