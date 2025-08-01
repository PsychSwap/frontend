// src/components/QuizPage.tsx

import React, { useState } from 'react';
import { quizQuestions } from '../../data/quizQuestions';
import { QuizQuestion, MBTITrait } from '../../types/quiz';
import QuizCard from './QuizCard';

const calculateMBTI = (answers: Record<string, number>, questions: QuizQuestion[]): string => {
    const traitScores: Record<MBTITrait, number> = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0,
    };

    questions.forEach((question) => {
        const value = answers[question.id];
        const choice = question.choices.find((c) => c.value === value);
        if (choice) {
            for (const trait in choice.mbtiImpact) {
                const t = trait as MBTITrait;
                traitScores[t] += choice.mbtiImpact[t] ?? 0;
            }
        }
    });

    return [
        traitScores.E >= traitScores.I ? 'E' : 'I',
        traitScores.S >= traitScores.N ? 'S' : 'N',
        traitScores.T >= traitScores.F ? 'T' : 'F',
        traitScores.J >= traitScores.P ? 'J' : 'P',
    ].join('');
};

const QuizPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [showResult, setShowResult] = useState(false);

    const currentQuestion = quizQuestions[currentIndex];

    const handleAnswer = (value: number) => {
        const updated = { ...answers, [currentQuestion.id]: value };
        setAnswers(updated);

        if (currentIndex < quizQuestions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setAnswers({});
        setCurrentIndex(0);
        setShowResult(false);
    };

    const mbtiType = showResult ? calculateMBTI(answers, quizQuestions) : '';

    return (
        <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white">
            {!showResult ? (
                <>
                    <QuizCard
                        question={currentQuestion}
                        selectedValue={answers[currentQuestion.id] ?? null}
                        onSelect={handleAnswer}
                    />
                    <p className="mt-4 text-gray-600">
                        Question {currentIndex + 1} of {quizQuestions.length}
                    </p>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Your Personality Type:</h2>
                    <div className="text-5xl font-mono mb-4">{mbtiType}</div>
                    {/* Optional: Add MBTI description mapping here */}
                    <button
                        onClick={handleRestart}
                        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500"
                    >
                        Retake Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizPage;