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
    name: "Park Jihoon",
    nameKo: "박지훈",
    image: "/images_왕사남.jfif",
    cover: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1600&auto=format&fit=crop&q=80",
    bio: "Park Ji-hoon is a South Korean singer and actor. Known for his stellar performance in 'The Man Who Lives With the King' and 'Weak Hero Class 1', he continues to impress with his wide acting spectrum.",
    followers: "3.2M",
    works: [
      { year: 2026, title: "The Man Who Lives With the King", type: "Movie", role: "King" },
      { year: 2024, title: "Fantasy Sonata", type: "Drama", role: "Sajo Hyun / Ak-hee" },
      { year: 2022, title: "Weak Hero Class 1", type: "Drama", role: "Yeon Shi-eun" },
    ],
    news: [
      { title: "Park Jihoon wins Best New Actor at Baeksang Arts Awards", date: "1 day ago" },
      { title: "TVING 'Legend of the Cook' hits No.1 in viewership ratings", date: "2 hours ago" },
    ]
  },
  {
    id: "seo-inguk",
    name: "Seo In-guk",
    nameKo: "서인국",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
    cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600&auto=format&fit=crop&q=80",
    bio: "Seo In-guk is a South Korean singer-songwriter and actor. He launched his singing career after winning the talent reality show Superstar K in 2009, and made his acting breakthrough in Reply 1997.",
    followers: "4.1M",
    works: [
      { year: 2023, title: "Death's Game", type: "Drama", role: "Choi Yee-jae" },
      { year: 2022, title: "Café Minamdang", type: "Drama", role: "Nam Han-joon" },
      { year: 2021, title: "Doom at Your Service", type: "Drama", role: "Myul Mang" },
    ],
    news: [
      { title: "Seo In-guk hints at a new music album release", date: "3 days ago" },
      { title: "Upcoming fan meeting tour announced for Asia", date: "2 weeks ago" },
    ]
  },
  {
    id: "byun-wooseok",
    name: "Byun Woo-seok",
    nameKo: "변우석",
    image: "/변우석.jfif",
    cover: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1600&auto=format&fit=crop&q=80",
    bio: "Byun Woo-seok is a South Korean actor and model. He gained massive popularity through his role as Ryu Sun-jae in the hit drama 'Lovely Runner'.",
    followers: "5.8M",
    works: [
      { year: 2024, title: "Lovely Runner", type: "Drama", role: "Ryu Sun-jae" },
      { year: 2023, title: "Strong Girl Nam-soon", type: "Drama", role: "Ryu Shi-oh" },
      { year: 2022, title: "20th Century Girl", type: "Movie", role: "Poong Woon-ho" },
    ],
    news: [
      { title: "Byun Woo-seok's 'Lovely Runner' syndrome continues globally", date: "5 hours ago" },
      { title: "Selected as the new global ambassador for luxury brand", date: "1 week ago" },
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
            <span className="font-semibold">{actor.nameKo}</span>
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
          <div className="relative h-64 rounded-3xl overflow-hidden mt-8 mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-card to-card/50" />
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" style={{ backgroundImage: `url('${selectedActor.cover}')` }} />
            
            <div className="absolute -bottom-16 left-8 flex items-end gap-6">
              <div className="w-40 h-40 rounded-full border-4 border-background overflow-hidden bg-card shadow-2xl">
                <img src={selectedActor.image} alt={selectedActor.name} className="w-full h-full object-cover" />
              </div>
              <div className="mb-4">
                <h2 className="text-4xl font-bold text-white mb-1">{selectedActor.name}</h2>
                <p className="text-xl text-secondary">{selectedActor.nameKo}</p>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-8 flex gap-3">
              <button className="p-3 bg-card/80 backdrop-blur-md border border-white/10 rounded-full hover:bg-accent/20 hover:text-accent transition-colors text-white">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-accent text-background font-bold rounded-full hover:bg-accent/90 transition-colors flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current" />
                팔로우
              </button>
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
                    <div key={i} className="group cursor-pointer">
                      <p className="text-sm text-gray-300 group-hover:text-accent transition-colors line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-secondary mt-1">{item.date}</p>
                    </div>
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
