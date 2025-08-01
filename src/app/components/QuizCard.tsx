import React from 'react';
import { QuizQuestion } from '../../types/quiz';

interface QuizCardProps {
    question: QuizQuestion;
    selectedValue: number | null;
    onSelect: (value: number) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, selectedValue, onSelect }) => {
    return (
        <div className="rounded-xl shadow-lg bg-white p-6 text-center max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
            <div className="flex flex-col gap-3">
                {question.choices.map((choice) => (
                    <button
                        key={choice.value}
                        onClick={() => onSelect(choice.value)}
                        className={`rounded-lg px-4 py-2 border ${selectedValue === choice.value
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'bg-white text-gray-800 border-gray-300'
                            } hover:bg-blue-100 transition`}
                    >
                        {choice.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizCard;