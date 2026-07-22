"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink, Clock, Newspaper, Star } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mockFeed = [
  {
    id: 1,
    category: "Drama News",
    categoryColor: "text-accent bg-accent/10 border-accent/20",
    icon: Newspaper,
    title: "[단독] 리얼 오피스 로맨스 '내일도 출근', 하반기 방영 확정... 직장인 공감 100% 예고",
    source: "Naver Entertainment",
    time: "2 hours ago",
    aiSummary: "인기 웹툰을 원작으로 한 드라마 '내일도 출근'이 올해 하반기 방영을 확정지었습니다. 현실적인 직장 생활과 사내 연애를 섬세하게 그려내어 수많은 2030 직장인들의 공감을 이끌어낼 것으로 큰 기대를 모으고 있습니다.",
    link: "https://search.naver.com/search.naver?where=news&query=%EB%82%B4%EC%9D%BC%EB%8F%84+%EC%B6%9C%EA%B7%BC+%EB%93%9C%EB%9D%BC%EB%A7%88",
    image: "/내일도출근.jpg"
  },
  {
    id: 2,
    category: "Drama News",
    categoryColor: "text-accent bg-accent/10 border-accent/20",
    icon: Newspaper,
    title: "하반기 최고 기대작 넷플릭스 '동궁', 남주혁·노윤서·조승우 라인업 완성",
    source: "Cine21",
    time: "5 hours ago",
    aiSummary: "넷플릭스의 새로운 오컬트 사극 '동궁'이 남주혁, 노윤서, 조승우라는 탄탄한 캐스팅 라인업을 완성하며 2026년 하반기 최고 화제작으로 떠올랐습니다. 역사적 배경에 다크 판타지가 결합된 새로운 장르를 선보일 예정입니다.",
    link: "https://search.naver.com/search.naver?where=news&query=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4+%EB%8F%99%EA%B6%81+%EC%BA%90%EC%8A%A4%ED%8C%85",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    category: "Park Jihoon",
    categoryColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    icon: Star,
    title: "박지훈, 영화 '왕과 사는 남자'로 백상예술대상 신인상 석권... 트리플 크라운 달성",
    source: "Dispatch",
    time: "1 day ago",
    aiSummary: "1,689만 명의 관객을 동원한 영화 '왕과 사는 남자'에서 단종 역을 열연한 박지훈이 제62회 백상예술대상에서 남자 신인 연기상을 수상했습니다. 이로써 음악, 드라마, 영화 3개 분야에서 모두 신인상을 휩쓰는 진기록을 세웠습니다.",
    link: "https://search.naver.com/search.naver?where=news&query=%EB%B0%95%EC%A7%80%ED%9B%88+%EC%99%95%EA%B3%BC+%EC%82%AC%EB%8A%94+%EB%82%A8%EC%9E%90+%EB%B0%B1%EC%83%81",
    image: "/images_왕사남.jfif"
  }
];

export default function MyFeed() {
  return (
    <div className="p-8 max-w-4xl mx-auto w-full space-y-8 pb-24">
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">내 피드</h2>
        <p className="text-secondary flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          취향에 맞춘 맞춤형 추천 소식입니다.
        </p>
      </header>

      {/* Feed Stream */}
      <div className="space-y-6">
        {mockFeed.map((item, i) => (
          <motion.article 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card hidden md:block" />
              </div>

              {/* Content Section */}
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={cn("px-2.5 py-1 text-xs font-medium rounded-full border flex items-center gap-1.5", item.categoryColor)}>
                      <item.icon className="w-3.5 h-3.5" />
                      {item.category}
                    </span>
                    <span className="text-xs text-secondary flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="bg-background/50 border border-white/5 rounded-xl p-4 mb-4 relative">
                    <Sparkles className="w-4 h-4 text-highlight absolute -top-2 -left-2 bg-background rounded-full" />
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="font-semibold text-highlight mr-2">AI 요약</span>
                      {item.aiSummary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-secondary font-medium">출처: {item.source}</span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors"
                  >
                    원문 읽기 <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
