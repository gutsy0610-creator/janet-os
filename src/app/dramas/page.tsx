"use client";

import { motion } from "framer-motion";
import { Search, Filter, Play, Star, ChevronRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mockDramas = [
  { title: "Hospital Playlist", year: 2020, episodes: 12, genre: "Medical / Slice of Life", rating: 4.9, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60" },
  { title: "Doctor Slump", year: 2024, episodes: 16, genre: "Medical / Rom-Com", rating: 4.8, image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=60" },
  { title: "Moving", year: 2023, episodes: 20, genre: "Action / Sci-Fi", rating: 4.9, image: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?w=800&auto=format&fit=crop&q=60" },
  { title: "D.P.", year: 2021, episodes: 6, genre: "Military / Drama", rating: 4.7, image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=800&auto=format&fit=crop&q=60" },
  { title: "Weak Hero Class 1", year: 2022, episodes: 8, genre: "Action / Youth", rating: 4.8, image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800&auto=format&fit=crop&q=60" },
];

export default function DramaLibrary() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Drama Library</h2>
          <p className="text-secondary">Discover your next favorite story.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
            <input 
              type="text" 
              placeholder="Search dramas..." 
              className="pl-10 pr-4 py-2.5 bg-card/50 border border-white/10 rounded-xl text-white placeholder-secondary focus:outline-none focus:border-accent w-full md:w-64 transition-colors"
            />
          </div>
          <button className="p-2.5 bg-card/50 border border-white/10 rounded-xl hover:bg-card transition-colors">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {mockDramas.map((drama, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative cursor-pointer"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-3 border border-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${drama.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center pl-1 shadow-lg shadow-accent/20">
                  <Play className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="px-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-white font-bold truncate pr-2">{drama.title}</h4>
                <div className="flex items-center gap-1 text-highlight text-sm font-medium">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {drama.rating}
                </div>
              </div>
              <p className="text-xs text-secondary mb-1">{drama.year} • {drama.episodes} Episodes</p>
              <p className="text-xs text-gray-400 truncate">{drama.genre}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
