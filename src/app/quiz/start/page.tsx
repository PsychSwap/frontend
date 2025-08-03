'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { quizQuestions } from '@/data/quizQuestions';
import { QuizChoice, MBTITrait } from '@/types/quiz';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuizStartPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, { value: number; impact: Partial<Record<MBTITrait, number>> }>
  >({});
  const [isFinished, setIsFinished] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const router = useRouter();

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  const handleChoice = (choice: QuizChoice) => {
    const nextIndex = currentIndex + 1;

    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        value: choice.value,
        impact: choice.mbtiImpact,
      },
    }));

    if (nextIndex < totalQuestions) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
      setShowLoading(true);
    }
  };

  useEffect(() => {
    if (isFinished) {
      const scores: Record<MBTITrait, number> = {
        E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
      };

      Object.values(answers).forEach(({ value, impact }) => {
        Object.entries(impact).forEach(([trait, impactValue]) => {
          scores[trait as MBTITrait] += (impactValue || 0) * value;
        });
      });

      const result =
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');

      // Simulate loading before pushing to results
      setTimeout(() => {
        router.push(`/quiz-results?mbti=${result}`);
      }, 2000); // Show loading screen for 2 seconds
    }
  }, [isFinished, answers, router]);

  const progressPercent = Math.round((currentIndex / totalQuestions) * 100);

  if (showLoading) {
    return (
      <main className="flex flex-col items-center justify-center h-screen bg-white text-gray-800 px-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mb-6" />
        <h1 className="text-2xl font-semibold mb-2">Calculating your crypto alter ego...</h1>
        <p className="text-sm text-gray-500">Consulting the blockchain spirits 🔮</p>
      </main>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-10">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-purple-600 rounded-full transition-all"
            style={{ width: `${Math.min(progressPercent, 100)}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Question {Math.min(currentIndex + 1, totalQuestions)} of {totalQuestions}
        </p>
      </div>

      {/* Quiz Card */}
      <AnimatePresence mode="wait">
        {!isFinished && (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <h2 className="text-lg font-semibold mb-6">{currentQuestion.question}</h2>
            <div className="flex flex-col gap-3">
              {currentQuestion.choices.map(choice => (
                <button
                  key={choice.value}
                  onClick={() => handleChoice(choice)}
                  className="py-2 px-4 rounded-xl bg-purple-100 hover:bg-purple-200 transition"
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}