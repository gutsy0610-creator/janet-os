"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, ChevronRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mockNews = [
  { title: "Park Jihoon confirmed for new medical drama...", time: "2 hours ago" },
  { title: "Hospital Playlist cast reunion hints at possible...", time: "5 hours ago" },
  { title: "Global streaming numbers hit record highs for K-dramas", time: "8 hours ago" },
];

const mockRecommendations = [
  { title: "Doctor Slump", match: "98% Match", genre: "Medical / Rom-Com", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=60" },
  { title: "Moving", match: "95% Match", genre: "Action / Sci-Fi", image: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?w=800&auto=format&fit=crop&q=60" },
];

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-12 pb-24">
      {/* Header section */}
      <header className="space-y-2">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white tracking-tight"
        >
          Good Evening, <span className="text-accent">Janet.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-secondary text-lg"
        >
          Your personal drama intelligence is ready.
        </motion.p>
      </header>

      {/* Today's Brief */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Today's Brief</h3>
          <span className="text-xs font-medium px-2.5 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
            AI Generated
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Entertainment News", value: "6", icon: Newspaper, color: "text-blue-400" },
            { label: "Park Jihoon Updates", value: "2", icon: Star, color: "text-yellow-400" },
            { label: "Upcoming Dramas", value: "1", icon: Play, color: "text-highlight" },
            { label: "AI Recommendations", value: "4", icon: ArrowRight, color: "text-purple-400" },
          ].map((stat, i) => (
            <div key={i} className="bg-card/50 p-4 rounded-xl border border-white/5 flex items-start justify-between">
              <div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-secondary">{stat.label}</p>
              </div>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </div>
          ))}
        </div>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recommendations & Continue Watching */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Recommended for You</h3>
              <Link href="/dramas" className="text-sm text-accent hover:text-white transition-colors flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockRecommendations.map((rec, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer border border-white/10"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${rec.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="text-highlight text-xs font-bold mb-1 tracking-wider">{rec.match}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{rec.title}</h4>
                    <p className="text-sm text-gray-300">{rec.genre}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Latest News & Activity */}
        <div className="space-y-8">
          <section className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Latest Intelligence</h3>
              <button className="text-secondary hover:text-white"><ArrowRight className="w-4 h-4" /></button>
            </div>
            <div className="space-y-4">
              {mockNews.map((news, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-sm text-gray-300 group-hover:text-accent transition-colors line-clamp-2">
                    {news.title}
                  </p>
                  <p className="text-xs text-secondary mt-1">{news.time}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
