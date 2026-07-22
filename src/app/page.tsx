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
  { title: "[단독] 박지훈, 티빙 '취사병 전설이 되다' 시청률 1위 견인", time: "2 hours ago", link: "https://search.naver.com/search.naver?where=news&query=%EB%B0%95%EC%A7%80%ED%9B%88+%EC%B7%A8%EC%82%AC%EB%B3%91+%EC%A0%84%EC%84%A4%EC%9D%B4+%EB%90%98%EB%8B%A4" },
  { title: "하반기 최고 기대작 넷플릭스 '동궁', 라인업 완성", time: "5 hours ago", link: "https://search.naver.com/search.naver?where=news&query=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4+%EB%8F%99%EA%B6%81+%EC%BA%90%EC%8A%A4%ED%8C%85" },
  { title: "박지훈, 영화 '왕과 사는 남자'로 백상예술대상 신인상 석권", time: "1 day ago", link: "https://search.naver.com/search.naver?where=news&query=%EB%B0%95%EC%A7%80%ED%9B%88+%EC%99%95%EA%B3%BC+%EC%82%AC%EB%8A%94+%EB%82%A8%EC%9E%90+%EB%B0%B1%EC%83%81" },
];

const mockRecommendations = [
  { 
    title: "내일도 출근", 
    match: "99% Match", 
    genre: "Office / Romance", 
    image: "/내일도출근.jpg",
    link: "https://www.tving.com/contents/P001787810"
  },
  { 
    title: "취사병 전설이 되다", 
    match: "98% Match", 
    genre: "Comedy / Military", 
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=60",
    link: "https://www.tving.com/contents/P001785205"
  },
  { 
    title: "왕사남", 
    match: "95% Match", 
    genre: "Drama / Character-driven", 
    image: "/images_왕사남.jfif",
    link: "https://search.tving.com/search/all?keyword=%EC%99%95%EC%82%AC%EB%82%A8"
  },
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
            { label: "Entertainment News", value: "6", icon: Newspaper, color: "text-blue-400", href: "/feed" },
            { label: "Park Jihoon Updates", value: "2", icon: Star, color: "text-yellow-400", href: "/feed" },
            { label: "Upcoming Dramas", value: "1", icon: Play, color: "text-highlight", href: "/dramas" },
            { label: "AI Recommendations", value: "4", icon: ArrowRight, color: "text-purple-400", href: "/assistant" },
          ].map((stat, i) => (
            <Link key={i} href={stat.href} className="bg-card/50 p-4 rounded-xl border border-white/5 flex items-start justify-between hover:bg-card/80 hover:border-white/10 transition-colors group cursor-pointer">
              <div>
                <p className="text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{stat.value}</p>
                <p className="text-sm text-secondary group-hover:text-gray-300 transition-colors">{stat.label}</p>
              </div>
              <stat.icon className={cn("w-5 h-5", stat.color)} />
            </Link>
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
                <a 
                  key={i}
                  href={rec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl block"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], x: [0, -10, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${encodeURI(rec.image)}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-highlight text-xs font-bold mb-1 tracking-wider backdrop-blur-md bg-black/20 w-max px-2 py-1 rounded">{rec.match}</span>
                    <h4 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{rec.title}</h4>
                    <p className="text-sm text-gray-200 drop-shadow-md">{rec.genre}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Latest News & Activity */}
        <div className="space-y-8">
          <section className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Latest Intelligence</h3>
              <Link href="/feed" className="text-secondary hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {mockNews.map((news, i) => (
                <a 
                  key={i} 
                  href={news.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block cursor-pointer"
                >
                  <p className="text-sm text-gray-300 group-hover:text-accent transition-colors line-clamp-2">
                    {news.title}
                  </p>
                  <p className="text-xs text-secondary mt-1">{news.time}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
