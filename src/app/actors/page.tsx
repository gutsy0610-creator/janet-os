"use client";

import { motion } from "framer-motion";
import { Search, Heart, Share2, Calendar as CalendarIcon, Star, Tv, Film } from "lucide-react";

const mockActor = {
  name: "Park Jihoon",
  nameKo: "박지훈",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
  bio: "Park Ji-hoon is a South Korean singer and actor. He is known for his participation in the reality competition show Produce 101 Season 2 and as a member of the boy band Wanna One.",
  followers: "2.4M",
  works: [
    { year: 2024, title: "Fantasy Sonata", type: "Drama", role: "Sajo Hyun / Ak-hee" },
    { year: 2022, title: "Weak Hero Class 1", type: "Drama", role: "Yeon Shi-eun" },
    { year: 2021, title: "At a Distance, Spring Is Green", type: "Drama", role: "Yeo Joon" },
  ],
  news: [
    { title: "Park Jihoon confirmed for new webtoon adaptation...", date: "2 days ago" },
    { title: "Behind the scenes of Park Jihoon's latest photoshoot", date: "1 week ago" },
  ]
};

export default function ActorsDirectory() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-12 pb-24">
      {/* Profile Header */}
      <div className="relative h-64 rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-card to-card/50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />
        
        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
          <div className="w-40 h-40 rounded-full border-4 border-background overflow-hidden bg-card shadow-2xl">
            <img src={mockActor.image} alt={mockActor.name} className="w-full h-full object-cover" />
          </div>
          <div className="mb-4">
            <h2 className="text-4xl font-bold text-white mb-1">{mockActor.name}</h2>
            <p className="text-xl text-secondary">{mockActor.nameKo}</p>
          </div>
        </div>
        
        <div className="absolute bottom-6 right-8 flex gap-3">
          <button className="p-3 bg-card/80 backdrop-blur-md border border-white/10 rounded-full hover:bg-accent/20 hover:text-accent transition-colors text-white">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="px-6 py-3 bg-accent text-background font-bold rounded-full hover:bg-accent/90 transition-colors flex items-center gap-2">
            <Heart className="w-5 h-5 fill-current" />
            Follow
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        {/* Left Column */}
        <div className="space-y-8">
          <section className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="text-secondary leading-relaxed mb-6">{mockActor.bio}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <p className="text-sm text-secondary mb-1">Followers</p>
                <p className="text-xl font-bold text-white">{mockActor.followers}</p>
              </div>
              <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <p className="text-sm text-secondary mb-1">Works</p>
                <p className="text-xl font-bold text-white">{mockActor.works.length}</p>
              </div>
            </div>
          </section>

          <section className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Latest Intelligence</h3>
            <div className="space-y-4">
              {mockActor.news.map((item, i) => (
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
          <h3 className="text-2xl font-bold text-white mb-6">AI Timeline</h3>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {mockActor.works.map((work, i) => (
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
                  <p className="text-sm text-gray-400">Role: {work.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
