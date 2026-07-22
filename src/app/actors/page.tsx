"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Share2, Star, Tv, Film, User } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mockActors = [
  {
    id: "park-jihoon",
    name: "박지훈",
    nameEn: "Park Ji-hoon",
    image: "/박지훈.jpg",
    followers: "4.2M",
    bio: "아역 배우 출신으로 '프로듀스 101 시즌 2'를 통해 워너원으로 데뷔하며 큰 사랑을 받았습니다. 이후 '약한영웅 Class 1', '환상연가' 등에서 탄탄한 연기력을 인정받았으며, 영화 '왕과 사는 남자'를 통해 2026년 백상예술대상 신인상을 거머쥐며 대세 배우로 자리매김했습니다.",
    works: [
      { year: 2026, title: "왕과 사는 남자", role: "단종", type: "Movie" },
      { year: 2024, title: "환상연가", role: "사조 현 / 악희", type: "Drama" },
      { year: 2022, title: "약한영웅 Class 1", role: "연시은", type: "Drama" },
      { year: 2021, title: "멀리서 보면 푸른 봄", role: "여준", type: "Drama" }
    ],
    news: [
      { title: "박지훈, '왕사남'으로 백상예술대상 신인상 수상 영예", date: "2026.05.08", link: "https://search.naver.com/search.naver?query=%EB%B0%95%EC%A7%80%ED%9B%88+%EB%B0%B1%EC%83%81%EC%98%88%EC%88%A0%EB%8C%80%EC%83%81" },
      { title: "박지훈, 차기작 검토 중... '장르물 도전 예고'", date: "2026.04.15", link: "https://search.naver.com/search.naver?query=%EB%B0%95%EC%A7%80%ED%9B%88+%EC%B0%A8%EA%B8%B0%EC%9E%91" }
    ]
  },
  {
    id: "seo-inguk",
    name: "서인국",
    nameEn: "Seo In-guk",
    image: "/서인국.jpg",
    followers: "5.1M",
    bio: "2009년 '슈퍼스타K' 우승으로 데뷔한 후, tvN '응답하라 1997'의 윤윤제 역으로 신드롬을 일으키며 대중의 큰 사랑을 받았습니다. 특유의 섬세한 감정 연기와 매력적인 눈빛으로 '이재, 곧 죽습니다'의 최이재 역, '미남당'의 남한준 역 등을 완벽하게 소화하며 한계 없는 캐릭터 소화력을 보여주고 있습니다.",
    works: [
      { year: 2023, title: "이재, 곧 죽습니다", role: "최이재", type: "Drama" },
      { year: 2022, title: "미남당", role: "남한준", type: "Drama" },
      { year: 2021, title: "어느 날 우리 집 현관으로 멸망이 들어왔다", role: "멸망", type: "Drama" },
      { year: 2012, title: "응답하라 1997", role: "윤윤제", type: "Drama" }
    ],
    news: [
      { title: "서인국, 새 드라마 '내일도 출근' 합류 검토 중", date: "2026.06.20", link: "https://search.naver.com/search.naver?query=%EC%84%9C%EC%9D%B8%EA%B5%AD+%EB%82%B4%EC%9D%BC%EB%8F%84+%EC%B6%9C%EA%B7%BC" },
      { title: "서인국 팬미팅 성료, 글로벌 팬들과 특별한 시간", date: "2026.03.11", link: "https://search.naver.com/search.naver?query=%EC%84%9C%EC%9D%B8%EA%B5%AD+%ED%8C%AC%EB%AF%B8%ED%8C%85" }
    ]
  },
  {
    id: "byun-wooseok",
    name: "변우석",
    nameEn: "Byun Woo-seok",
    image: "/변우석.jfif",
    followers: "6.8M",
    bio: "모델 출신 배우로 훤칠한 키와 독보적인 피지컬, 그리고 따뜻한 눈빛 연기로 여심을 사로잡고 있습니다. tvN '선재 업고 튀어'의 류선재 역으로 글로벌 신드롬을 일으키며 단숨에 톱스타 반열에 올랐습니다. 로맨스부터 스릴러까지 한계 없는 연기 스펙트럼을 보여주고 있습니다.",
    works: [
      { year: 2024, title: "선재 업고 튀어", role: "류선재", type: "Drama" },
      { year: 2023, title: "힘쎈여자 강남순", role: "류시오", type: "Drama" },
      { year: 2022, title: "20세기 소녀", role: "풍운호", type: "Movie" },
      { year: 2020, title: "청춘기록", role: "원해효", type: "Drama" }
    ],
    news: [
      { title: "변우석, 아시아 투어 팬미팅 성황리에 마무리", date: "2026.05.22", link: "https://search.naver.com/search.naver?query=%EB%B3%80%EC%9A%B0%EC%84%9D+%EC%95%84%EC%8B%9C%EC%95%84+%ED%88%AC%EC%96%B4" },
      { title: "변우석, 차기작 로맨틱 코미디 주인공 물망", date: "2026.07.01", link: "https://search.naver.com/search.naver?query=%EB%B3%80%EC%9A%B0%EC%84%9D+%EC%B0%A8%EA%B8%B0%EC%9E%91" }
    ]
  }
];

export default function ActorsDirectory() {
  const [selectedActor, setSelectedActor] = useState(mockActors[0]);

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      {/* Actor Selection Tabs */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {mockActors.map((actor) => (
          <button
            key={actor.id}
            onClick={() => setSelectedActor(actor)}
            className={cn(
              "flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all whitespace-nowrap",
              selectedActor.id === actor.id 
                ? "bg-accent/20 border-accent text-white shadow-lg shadow-accent/10" 
                : "bg-card/50 border-white/10 text-secondary hover:bg-card hover:text-white"
            )}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-background">
              <img src={actor.image} alt={actor.name} className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-sm tracking-wide">{actor.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedActor.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mt-8 mb-12">
            {/* Large Portrait Image */}
            <div className="w-48 md:w-64 shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4]">
              <img src={selectedActor.image} alt={selectedActor.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Info & Actions */}
            <div className="flex-1 flex flex-col justify-end md:pb-4">
              <div className="mb-6">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">{selectedActor.name}</h2>
                <p className="text-2xl text-gray-400 font-medium">{selectedActor.nameEn}</p>
              </div>
              
              <div className="flex gap-4">
                <button className="px-8 py-3.5 bg-accent text-background font-bold rounded-2xl hover:bg-accent/90 transition-colors flex items-center gap-2 text-lg shadow-lg shadow-accent/20">
                  <Heart className="w-5 h-5 fill-current" />
                  팔로우
                </button>
                <button className="px-4 py-3.5 bg-card border border-white/10 rounded-2xl hover:bg-white/5 transition-colors text-white shadow-lg">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            {/* Left Column */}
            <div className="space-y-8">
              <section className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">소개</h3>
                <p className="text-secondary leading-relaxed mb-6">{selectedActor.bio}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                    <p className="text-sm text-secondary mb-1">팔로워</p>
                    <p className="text-xl font-bold text-white">{selectedActor.followers}</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                    <p className="text-sm text-secondary mb-1">참여 작품</p>
                    <p className="text-xl font-bold text-white">{selectedActor.works.length}</p>
                  </div>
                </div>
              </section>

              <section className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">최신 소식</h3>
                <div className="space-y-4">
                  {selectedActor.news.map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block group cursor-pointer">
                      <p className="text-sm text-gray-300 group-hover:text-accent transition-colors line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-secondary mt-1">{item.date}</p>
                    </a>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: AI Timeline */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">작품 활동 타임라인</h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {selectedActor.works.map((work, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-card/80 backdrop-blur-md text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-accent/20">
                      {work.type === "Drama" ? <Tv className="w-4 h-4" /> : <Film className="w-4 h-4" />}
                    </div>
                    
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-5 hover:border-accent/30 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-accent font-bold">{work.year}</span>
                        <span className="text-xs px-2 py-1 bg-white/5 rounded text-secondary">{work.type}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{work.title}</h4>
                      <p className="text-sm text-gray-400">배역: {work.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
