'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import DivisionGrid from "@/components/sections/DivisionGrid";
import AchievementTimeline from "@/components/sections/Achievements";
import TeamMembers from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";

export default function MainLayout() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />
            <Hero />
            <About />
            <DivisionGrid />
            <AchievementTimeline />
            <TeamMembers />
            <Gallery />
            <Footer />
        </main>
    );
}
