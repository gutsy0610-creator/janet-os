"use client";

import { motion } from "framer-motion";
import { Search, Filter, Play, Star, ChevronRight, ExternalLink } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mockDramas = [
  { title: "선재 업고 튀어", year: 2024, episodes: 16, genre: "Time Slip / Rom-Com", rating: 4.9, image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&auto=format&fit=crop&q=60", link: "https://www.tving.com/search?keyword=%EC%84%A0%EC%9E%AC%20%EC%97%85%EA%B3%A0%20%ED%8A%80%EC%96%B4" },
  { title: "눈물의 여왕", year: 2024, episodes: 16, genre: "Romance / Drama", rating: 4.8, image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60", link: "https://www.tving.com/search?keyword=%EB%88%88%EB%AC%BC%EC%9D%98%20%EC%97%AC%EC%99%95" },
  { title: "내 남편과 결혼해줘", year: 2024, episodes: 16, genre: "Revenge / Fantasy", rating: 4.9, image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=800&auto=format&fit=crop&q=60", link: "https://www.tving.com/search?keyword=%EB%82%B4%20%EB%82%A8%ED%8E%B8%EA%B3%BC%20%EA%B2%B0%ED%98%BC%ED%95%B4%EC%A4%98" },
  { title: "이재, 곧 죽습니다", year: 2023, episodes: 8, genre: "Fantasy / Thriller", rating: 4.7, image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&auto=format&fit=crop&q=60", link: "https://www.tving.com/search?keyword=%EC%9D%B4%EC%9E%AC%20%EA%B3%A7%20%EC%A3%BD%EC%8A%B5%EB%8B%88%EB%8B%A4" },
  { title: "피라미드 게임", year: 2024, episodes: 10, genre: "Teen / Psychological", rating: 4.8, image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=60", link: "https://www.tving.com/search?keyword=%ED%94%BC%EB%9D%BC%EB%AF%B8%EB%93%9C%20%EA%B2%8C%EC%9E%84" },
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
            <a href={drama.link} target="_blank" rel="noopener noreferrer" className="block relative h-64 rounded-2xl overflow-hidden mb-3 border border-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${drama.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center pl-1 shadow-lg shadow-accent/20 mb-2">
                  <Play className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-white bg-black/50 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
                  Watch on TVING <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
            
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
