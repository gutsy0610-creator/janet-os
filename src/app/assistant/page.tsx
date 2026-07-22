"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const initialMessages = [
  {
    id: 1,
    role: "assistant",
    content: "Hello Janet. I've analyzed your recent watch history and compiled the latest news about Park Jihoon. What would you like to explore today?"
  }
];

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Mock AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: "Based on your interest in 'Hospital Playlist' and character-driven stories, I highly recommend 'Doctor Slump'. It features a great balance of medical drama and heartwarming moments. Would you like me to add it to your Watchlist?"
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] max-w-4xl mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Personal Intelligence
          </h2>
          <p className="text-secondary text-sm">Always learning your preferences.</p>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 glass-card rounded-2xl flex flex-col overflow-hidden border border-white/10">
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex gap-4", msg.role === "user" ? "flex-row-reverse" : "flex-row")}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg",
                msg.role === "user" 
                  ? "bg-gradient-to-tr from-accent to-highlight text-background" 
                  : "bg-card border border-white/10 text-accent"
              )}>
                {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              
              <div className={cn(
                "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                msg.role === "user" 
                  ? "bg-accent text-background rounded-tr-sm font-medium" 
                  : "bg-card/60 backdrop-blur-md border border-white/5 text-gray-200 rounded-tl-sm"
              )}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-background/50 border-t border-white/5">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about dramas, actors, or news..." 
              className="w-full bg-card border border-white/10 text-white rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:border-accent/50 transition-colors placeholder-secondary/50"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 p-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide pb-1">
            {["What should I watch tonight?", "Any new Park Jihoon news?", "Recommend a medical drama"].map((suggestion, i) => (
              <button 
                key={i}
                type="button"
                onClick={() => setInput(suggestion)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full border border-white/10 bg-card/50 text-xs text-secondary hover:text-white hover:border-accent/50 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
