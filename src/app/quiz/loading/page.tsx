'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizLoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/quiz-results');
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-gray-800 px-4">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mb-6" />
      <h1 className="text-2xl font-semibold mb-2">Calculating your crypto alter ego...</h1>
      <p className="text-sm text-gray-500">Consulting the blockchain spirits 🔮</p>
    </main>
  );
}