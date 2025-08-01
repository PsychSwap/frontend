'use client';

import { useSearchParams } from 'next/navigation';
import { mbtiToArchetype } from '../../data/personalityMap';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function QuizResultsPage() {
  const searchParams = useSearchParams();
  const mbti = searchParams.get('mbti')?.toUpperCase();
  const [result, setResult] = useState<typeof mbtiToArchetype[keyof typeof mbtiToArchetype] | null>(null);

  useEffect(() => {
    if (mbti && mbtiToArchetype[mbti]) {
      setResult(mbtiToArchetype[mbti]);
    }
  }, [mbti]);

  if (!mbti || !result) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-2xl font-semibold mb-4">Oops! Invalid or missing MBTI type.</h1>
        <Link href="/quiz/start" className="text-blue-500 underline">
          Take the quiz
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="text-center mb-10">
        <div className="text-6xl">{result.icon}</div>
        <h1 className="text-3xl font-bold mt-4">{result.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{result.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800">
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h2 className="text-base font-semibold mb-1">Risk Level</h2>
          <p>{result.riskLevel}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h2 className="text-base font-semibold mb-1">Novelty Appetite</h2>
          <p>{result.noveltyAppetite}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h2 className="text-base font-semibold mb-1">Holding Time</h2>
          <p>{result.holdingTime}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow sm:col-span-2">
          <h2 className="text-base font-semibold mb-1">Favorite Token Pairs</h2>
          <ul className="list-disc list-inside">
            {result.tokenPairs.map((pair, idx) => (
              <li key={idx}>{pair}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow sm:col-span-2">
          <h2 className="text-base font-semibold mb-1">Strategy</h2>
          <p>{result.strategy}</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link href="/quiz/start" className="text-blue-600 hover:underline text-sm">
          Retake Quiz
        </Link>
      </div>
    </div>
  );
}
