import React from 'react';
import { Card, CardContent } from '@/app/components/ui/card';

interface ArchetypeCardProps {
  id: string;
  name: string;
  mbti: string[];
  description: string;
  image: string;
  selected: boolean;
  onChoose: (id: string) => void;
}

export function ArchetypeCard({ id, name, mbti, description, image, selected, onChoose }: ArchetypeCardProps) {
  return (
    <Card
      className={`relative flex-shrink-0 w-72 sm:w-80 rounded-3xl bg-white shadow-lg transition-all duration-200 border-4 ${
        selected
          ? 'border-purple-400 shadow-xl animate-glow'
          : 'border-transparent hover:border-blue-300 hover:shadow-2xl'
      } group cursor-pointer mx-1`}
      tabIndex={0}
      onClick={() => onChoose(id)}
    >
      <CardContent className="flex flex-col items-center p-6">
        <div className="w-28 h-28 mb-4 rounded-full bg-purple-50 flex items-center justify-center overflow-hidden border-2 border-purple-200">
          <img
            src={image}
            alt={name}
            className="object-contain w-24 h-24 drop-shadow-md"
            draggable={false}
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1 font-sans">
          {name}
        </h3>
        <div className="text-sm text-purple-500 font-semibold mb-2">
          {mbti.join(', ')}
        </div>
        <p className="text-gray-600 text-base mb-4 font-sans">
          {description}
        </p>
        <button
          className={`w-full py-2 rounded-xl font-bold text-lg transition-all duration-150 font-sans ${
            selected
              ? 'bg-gradient-to-r from-purple-500 to-blue-400 text-white shadow-md scale-105'
              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
          }`}
          onClick={e => {
            e.stopPropagation();
            onChoose(id);
          }}
        >
          Choose this character
        </button>
      </CardContent>
      {/* Glowing border animation */}
      <style jsx>{`
        .animate-glow {
          box-shadow: 0 0 0 4px #c4b5fd, 0 0 24px 8px #a78bfa44;
        }
      `}</style>
    </Card>
  );
}

export { Card, CardContent };