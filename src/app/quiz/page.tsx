'use client';
// QuizPage.tsx
// Tinder-style quiz entry page with two options:
// 1. Choose your archetype if you already know your MBTI
// 2. Take the quiz to discover your DeFi personality

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/PSButton";
import { Card, CardContent } from "@/app/components/ArchetypeCard";
import ScrollArea from "@/app/components/ArchetypeScrollArea";
import Link from "next/link";

type Personality = {
  name: string;
  mbti: string;
  emoji: string;
  summary: string;
  imagePath: string;
};

const personalities: Personality[] = [
  {
    name: "The Chill Strategist",
    mbti: "ISFP",
    emoji: "🧊",
    summary: "Sensitive but strategic, prefers harmony, makes measured crypto moves.",
    imagePath: "/personality_types/The_Chill_Strategist.png",
  },
  {
    name: "The Stable Sergeant",
    mbti: "ISTJ",
    emoji: "🛡️",
    summary: "Trusts fundamentals, follows routines, serious about safety.",
    imagePath: "/personality_types/The_Stable_Sergeant.png",
  },
  {
    name: "The Meme Magician",
    mbti: "ENFP",
    emoji: "🎭",
    summary: "FOMO-powered, loves the story behind coins, driven by curiosity.",
    imagePath: "/personality_types/The_Meme_Magician.png",
  },
  {
    name: "The DeFi Deacon",
    mbti: "INFJ",
    emoji: "🕊️",
    summary: "Feels the future in protocols, not hype.",
    imagePath: "/personality_types/The_DeFi_Deacon.png",
  },
  {
    name: "The Yield Hunter",
    mbti: "ESTP",
    emoji: "⛏️",
    summary: "Driven by challenge and reward, goes where the numbers lead.",
    imagePath: "/personality_types/The_Yield_Hunter.png",
  },
  {
    name: "The Bitcoin Believer",
    mbti: "ISFJ",
    emoji: "🟠",
    summary: "Holds the line no matter the storm.",
    imagePath: "/personality_types/The_Bitcoin_Believer.png",
  },
  {
    name: "The Swing Trader",
    mbti: "ENTP",
    emoji: "⚡",
    summary: "Witty and wild, always riding the next chart twist.",
    imagePath: "/personality_types/The_Swing_Trader.png",
  },
  {
    name: "The Privacy Pioneer",
    mbti: "INTP",
    emoji: "🕶️",
    summary: "Stays in the shadows, values sovereignty above all.",
    imagePath: "/personality_types/The_Privacy_Pioneer.png",
  },
  {
    name: "The Altcoin Cowboy",
    mbti: "ESTJ",
    emoji: "🤠",
    summary: "Leads meme movements, directs the show, controls the risk.",
    imagePath: "/personality_types/The_Altcoin_Cowboy.png",
  },
  {
    name: "The Innovation Investor",
    mbti: "ENTJ",
    emoji: "🚀",
    summary: "Wants to win the game by redesigning it.",
    imagePath: "/personality_types/The_Innovation_Investor.png",
  },
  {
    name: "The NFT Enthusiast",
    mbti: "ESFP",
    emoji: "🎨",
    summary: "Thinks in JPGs, feels in floor prices.",
    imagePath: "/personality_types/The_NFT_Enthusiast.png",
  },
  {
    name: "The Gaming Guild Master",
    mbti: "INFP",
    emoji: "🧝‍♀️",
    summary: "Grows digital kingdoms with emotion and imagination.",
    imagePath: "/personality_types/The_Gaming_Guild_Master.png",
  },
  {
    name: "The Airdrop Alchemist",
    mbti: "INTJ",
    emoji: "🧪",
    summary: "Plans 5 steps ahead, finds value where others miss it.",
    imagePath: "/personality_types/The_Airdrop_Alchemist.png",
  },
  {
    name: "The Risk Oracle",
    mbti: "INFJ",
    emoji: "🧿",
    summary: "Guides others, stays calm in multichain chaos.",
    imagePath: "/personality_types/The_Risk_Oracle.png",
  },
  {
    name: "The Rebase Ronin",
    mbti: "ISTP",
    emoji: "🧬",
    summary: "Finds serenity in passive growth. Cuts losses fast.",
    imagePath: "/personality_types/The_Rebase_Ronin.png",
  },
  {
    name: "The Degen Masquerader",
    mbti: "ESFJ",
    emoji: "🎭",
    summary: "Narrative surfer, quick to adapt, knows what’s hot today.",
    imagePath: "/personality_types/The_Degen_Masquerader.png",
  },
];

export default function QuizPage() {
  const [showAll, setShowAll] = useState(false);
  const [centerIndex, setCenterIndex] = useState(Math.floor(personalities.length / 2)); // Start at center

  // Helper to wrap index for infinite carousel
  function getWrappedIndex(idx: number) {
    const len = personalities.length;
    return ((idx % len) + len) % len;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex flex-col items-center py-8 px-2">
      {/* Header Section */}
      <div className="w-full max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 font-sans">
          Discover Your DeFi Archetype
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4 font-sans">
          Are you a Chill Strategist, Meme Magician, or Altcoin Cowboy? Find your DeFi personality and unlock a strategy that fits your vibe.
        </p>
        <span className="inline-block bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-base font-semibold mb-2">
          "Swap like your personality depends on it."
        </span>
      </div>

      {/* Carousel Card Selector */}
      <div className="relative w-full max-w-4xl mx-auto overflow-x-visible mb-8">
        <div className="flex justify-between items-center mb-4">
          <button
            aria-label="Previous"
            onClick={() => setCenterIndex(prev => getWrappedIndex(prev - 1))}
            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 shadow transition"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex-1 flex justify-center">
            <span className="text-lg font-semibold text-purple-700 mb-8">Swipe or use arrows to browse</span>
          </div>
          <button
            aria-label="Next"
            onClick={() => setCenterIndex(prev => getWrappedIndex(prev + 1))}
            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 shadow transition"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div
          className="flex items-stretch justify-center overflow-x-visible select-none relative"
          style={{ touchAction: 'pan-x' }}
        >
          {[...Array(5)].map((_, i) => {
            const idx = getWrappedIndex(centerIndex - 2 + i);
            const p = personalities[idx];
            const pos = i - 2; // -2, -1, 0, 1, 2
            const isCenter = pos === 0;
            const isSide = Math.abs(pos) === 1;
            return (
              <div
                key={p.name}
                className={`transition-all duration-300 ease-in-out flex flex-col items-center mx-2 w-64 h-80 rounded-3xl p-4 flex-shrink-0 max-w-xs min-w-[220px] ${isCenter
                    ? 'z-20 scale-110 opacity-100 shadow-xl border-4 border-purple-400 bg-white' :
                    isSide
                      ? 'z-10 scale-95 opacity-70 shadow-md border-2 border-purple-200 bg-white' :
                      'z-0 scale-90 opacity-40 pointer-events-none'
                  }`}
                style={{
                  transform: isCenter
                    ? 'scale(1.08)' : isSide
                      ? 'scale(0.96)' : 'scale(0.92)',
                  transition: 'transform 0.3s, opacity 0.3s',
                }}
              >
                <Image src={p.imagePath} alt={p.name} width={120} height={120} className="mb-2 rounded-full border-2 border-purple-200 bg-purple-50" />
                <h2 className="text-lg font-semibold text-center">{p.emoji} {p.name}</h2>
                <p className="text-sm text-purple-500 text-center">{p.mbti}</p>
                <p className="mt-1 text-sm text-center text-gray-600">{p.summary}</p>
                {isCenter && (
                  <Button variant="primary" className="w-full mt-4">Select</Button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-10 mt-8 text-center">
        <h3 className="text-xl font-bold text-purple-700 mb-8 font-sans">How it works</h3>
        <div className="flex flex-col md:flex-row justify-center items-stretch">
          {[
            {
              icon: "🧑‍🎤",
              title: "1. Pick or discover your archetype",
              desc: "Choose from the carousel or take the quiz to find your match.",
              bg: "bg-purple-200",
            },
            {
              icon: "🔎",
              title: "2. Get your DeFi strategy",
              desc: "See your personality-driven trading approach and token suggestions.",
              bg: "bg-blue-200",
            },
            {
              icon: "💸",
              title: "3. Swap with confidence",
              desc: "Trade directly with a strategy that fits your vibe.",
              bg: "bg-green-200",
            },
          ].map(({ icon, title, desc, bg }, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-xs mx-auto mr-12">
              <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-3 text-2xl`}>
                {icon}
              </div>
              <span className="font-semibold text-gray-800 mb-1">{title}</span>
              <span className="text-sm text-gray-500">{desc}</span>
            </div>
          ))}
        </div>
      </div>


      {/* Secondary CTA */}
      <div className="w-full max-w-xl mx-auto text-center mt-8">
        <p className="text-lg text-gray-700 mb-4 font-sans">
          Not sure which archetype fits you? Take our quick, playful quiz to discover your DeFi self!
        </p>
        <Link href="/quiz/start">
          <Button variant="secondary" className="text-lg px-8 py-3">Take the Quiz</Button>
        </Link>
      </div>
    </div>
  );
}