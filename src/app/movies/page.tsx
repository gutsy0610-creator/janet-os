"use client";

import { motion } from "framer-motion";
import { Search, Filter, Play, Star, ExternalLink, Film } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const currentMovies = [
  { title: "호프 (HOPE)", year: 2026, genre: "SF / Action", rating: 9.5, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop&q=60", link: "https://search.naver.com/search.naver?query=%EC%98%81%ED%99%94+%ED%98%B8%ED%94%84" },
  { title: "왕과 사는 남자", year: 2026, genre: "Historical / Drama", rating: 9.8, image: "/images_왕사남.jfif", link: "https://search.naver.com/search.naver?query=%EC%98%81%ED%99%94+%EC%99%95%EA%B3%BC+%EC%82%AC%EB%8A%94+%EB%82%A8%EC%9E%90" },
  { title: "스파이더맨: 브랜드 뉴 데이", year: 2026, genre: "Action / Hero", rating: 9.4, image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg", link: "https://search.naver.com/search.naver?query=%EC%98%81%ED%99%94+%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8+%EB%B8%8C%EB%9E%9C%EB%93%9C+%EB%89%B4+%EB%8D%B0%EC%9D%B4" },
  { title: "미니언즈 & 몬스터즈", year: 2026, genre: "Animation / Comedy", rating: 8.9, image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2F20150629_47%2Fwjdgh1018_1435572121928Dv0FN_JPEG%2F%EC%82%AC%EC%A7%84+1.jpg", link: "https://search.naver.com/search.naver?query=%EC%98%81%ED%99%94+%EB%AF%B8%EB%8B%88%EC%96%B8%EC%A6%88+%EB%AA%AC%EC%8A%A4%ED%84%B0%EC%A6%88" },
  { title: "모아나 (실사판)", year: 2026, genre: "Adventure / Fantasy", rating: 9.1, image: "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg", link: "https://search.naver.com/search.naver?query=%EC%98%81%ED%99%94+%EB%AA%A8%EC%95%84%EB%82%98+%EC%8B%A4%EC%82%AC%ED%8C%90" },
];

export default function MoviesLibrary() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">현재 상영작</h2>
          <p className="text-secondary">극장 상영 중인 최신 인기 영화를 탐색해 보세요.</p>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&qvt=0&query=%ED%98%84%EC%9E%AC%EC%83%81%EC%98%81%EC%98%81%ED%99%94" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-accent/20 border border-accent/40 rounded-xl hover:bg-accent/30 transition-colors flex items-center gap-2 text-accent font-medium"
          >
            <Film className="w-4 h-4" />
            현재상영영화 확인 (Naver)
          </a>
          <button className="p-2.5 bg-card/50 border border-white/10 rounded-xl hover:bg-card transition-colors">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {currentMovies.map((movie, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative cursor-pointer"
          >
            <a href={movie.link} target="_blank" rel="noopener noreferrer" className="block relative h-72 rounded-2xl overflow-hidden mb-3 border border-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${encodeURI(movie.image)}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center pl-1 shadow-lg shadow-accent/20 mb-2">
                  <Play className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-white bg-black/50 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
                  네이버 검색 <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
            
            <div className="px-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-white font-bold truncate pr-2">{movie.title}</h4>
                <div className="flex items-center gap-1 text-highlight text-sm font-medium">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {movie.rating}
                </div>
              </div>
              <p className="text-xs text-secondary mb-1">{movie.year} • {movie.genre}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
