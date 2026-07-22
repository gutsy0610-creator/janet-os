"use client";

import { motion } from "framer-motion";
import { Play, TrendingUp, ExternalLink } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mockShorts = [
  { title: "박지훈 백상 신인상 수상 소감 미쳤다 ㅠㅠ", views: "1.2M", image: "https://images.unsplash.com/photo-1516280440502-8618eb7c7403?w=400&h=700&fit=crop&q=60" },
  { title: "선재 업고 튀어 명장면 모음집", views: "850K", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=700&fit=crop&q=60" },
  { title: "변우석 실물 영접 후기...", views: "2.1M", image: "https://images.unsplash.com/photo-1549497551-700684f09d85?w=400&h=700&fit=crop&q=60" },
  { title: "내일도 출근 첫 대본리딩 현장 엿보기", views: "430K", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=700&fit=crop&q=60" },
  { title: "조승우 넷플릭스 신작 동궁 티저 유출?", views: "3.4M", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=700&fit=crop&q=60" },
];

export default function TrendingShorts() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2 flex items-center gap-2">
            실시간 인기 숏츠
            <TrendingUp className="w-6 h-6 text-accent" />
          </h2>
          <p className="text-secondary">지금 유튜브에서 가장 핫한 연예/드라마 숏폼을 만나보세요.</p>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://www.youtube.com/hashtag/trendingshorts/shorts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-red-600/90 border border-red-500/50 rounded-xl hover:bg-red-500 transition-colors flex items-center gap-2 text-white font-medium shadow-lg shadow-red-600/20"
          >
            <Play className="w-4 h-4 fill-current" />
            유튜브에서 숏츠 보기
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {mockShorts.map((short, i) => (
          <motion.a 
            href="https://www.youtube.com/hashtag/trendingshorts/shorts"
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative cursor-pointer block rounded-2xl overflow-hidden aspect-[9/16] border border-white/10"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${encodeURI(short.image)}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1">
                  <Play className="w-3 h-3" /> Shorts
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold text-sm line-clamp-2 leading-snug mb-1 drop-shadow-md group-hover:text-accent transition-colors">
                  {short.title}
                </h4>
                <p className="text-xs text-gray-300 drop-shadow-md">{short.views} views</p>
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center pl-1 shadow-lg">
                <Play className="w-5 h-5 fill-current" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
