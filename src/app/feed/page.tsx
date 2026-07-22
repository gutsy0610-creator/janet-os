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
    category: "Park Jihoon",
    categoryColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    icon: Star,
    title: "Park Jihoon confirmed for new historical drama lead role",
    source: "Soompi",
    time: "2 hours ago",
    aiSummary: "Actor Park Jihoon has officially accepted the lead role in an upcoming KBS historical drama. The series, set in the Joseon dynasty, will showcase a darker, more serious side of his acting spectrum.",
    link: "#",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    category: "Drama News",
    categoryColor: "text-accent bg-accent/10 border-accent/20",
    icon: Newspaper,
    title: "Hospital Playlist Season 3 in early discussions?",
    source: "Naver Entertainment",
    time: "5 hours ago",
    aiSummary: "Industry insiders report that director Shin Won-ho and writer Lee Woo-jung have recently held meetings to discuss a potential third season of the beloved medical drama. Fans are eagerly awaiting official confirmation.",
    link: "#",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    category: "Park Jihoon",
    categoryColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    icon: Star,
    title: "Behind the scenes: Park Jihoon's intense action training",
    source: "Dispatch",
    time: "1 day ago",
    aiSummary: "A new vlog released by Maroo Entertainment reveals Park Jihoon attending action school for three months to prepare for his intense fight scenes in 'Weak Hero Class 1', performing 90% of his own stunts.",
    link: "#",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&auto=format&fit=crop&q=60"
  }
];

export default function MyFeed() {
  return (
    <div className="p-8 max-w-4xl mx-auto w-full space-y-8 pb-24">
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">My Feed</h2>
        <p className="text-secondary flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          Curated intelligence based on your taste.
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
                      <span className="font-semibold text-highlight mr-2">AI Summary</span>
                      {item.aiSummary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-secondary font-medium">Source: {item.source}</span>
                  <a 
                    href={item.link} 
                    className="flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors"
                  >
                    Read Original <ExternalLink className="w-4 h-4" />
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
