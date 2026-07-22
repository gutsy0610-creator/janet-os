"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Activity,
  Film,
  Users,
  Video,
  Globe,
  Calendar,
  Bookmark,
  MessageSquare,
  Settings,
  Menu,
  X,
  Smartphone
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "홈", href: "/", icon: Home },
  { name: "내 피드", href: "/feed", icon: Activity },
  { name: "드라마 라이브러리", href: "/dramas", icon: Film },
  { name: "배우", href: "/actors", icon: Users },
  { name: "영화", href: "/movies", icon: Video },
  { name: "인기 숏츠", href: "/shorts", icon: Smartphone },
  { name: "AI 비서", href: "/assistant", icon: MessageSquare },
  { name: "설정", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-background/90 backdrop-blur-md border-b border-white/5 z-40 flex items-center justify-between px-4 md:hidden">
        <h1 className="text-lg font-bold tracking-widest text-white">JANET <span className="text-accent font-light">OS</span></h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white hover:text-accent transition-colors">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <aside 
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 border-r border-white/5 bg-background/95 backdrop-blur-3xl flex flex-col transition-transform duration-300 md:translate-x-0 md:bg-background/80 md:z-40",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        )}
      >
        <div className="p-6 hidden md:block">
          <h1 className="text-xl font-bold tracking-widest text-white">JANET <span className="text-accent font-light">OS</span></h1>
          <p className="text-xs text-secondary mt-1 tracking-wide">Personal Drama Intelligence</p>
        </div>
        <div className="p-6 md:hidden flex justify-between items-center">
           <h1 className="text-xl font-bold tracking-widest text-white">Menu</h1>
           <button onClick={() => setIsOpen(false)} className="text-secondary hover:text-white"><X className="w-5 h-5"/></button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 px-3 space-y-1 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className="block relative">
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-accent/10 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div
                  className={cn(
                    "relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200",
                    isActive
                      ? "text-accent font-medium"
                      : "text-secondary hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", isActive ? "text-accent" : "text-secondary")} strokeWidth={isActive ? 2.5 : 1.5} />
                  <span className="text-sm tracking-wide">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-card/50 border border-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-highlight flex items-center justify-center text-xs font-bold text-background">
              J
            </div>
            <div>
              <p className="text-sm font-medium text-white">Janet</p>
              <p className="text-xs text-secondary">Owner</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
