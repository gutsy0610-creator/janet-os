"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "My Feed", href: "/feed", icon: Activity },
  { name: "Drama Library", href: "/dramas", icon: Film },
  { name: "Actors", href: "/actors", icon: Users },
  { name: "Movies", href: "/movies", icon: Video },
  { name: "International", href: "/international", icon: Globe },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "AI Assistant", href: "/assistant", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/5 bg-background/80 backdrop-blur-2xl hidden md:flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-widest text-white">JANET <span className="text-accent font-light">OS</span></h1>
        <p className="text-xs text-secondary mt-1 tracking-wide">Personal Drama Intelligence</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
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
  );
}
