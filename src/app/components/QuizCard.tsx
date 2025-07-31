// components/QuizCard.tsx
import { QuizQuestion } from '@/types/quiz';
import { RadioGroup } from '@headlessui/react';

interface QuizCardProps {
  question: QuizQuestion;
  selected: number | null;
  onSelect: (value: number) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, selected, onSelect }) => {
  return (
    <div className="w-full p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md">
      <h4 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">
        {question.question}
      </h4>
      <RadioGroup value={selected} onChange={onSelect}>
        <div className="space-y-2">
          {question.choices.map((choice, index) => (
            <RadioGroup.Option
              key={index}
              value={choice.value}
              className={({ checked }) =>
                `cursor-pointer rounded-xl px-4 py-2 border ${
                  checked
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-300'
                }`
              }
            >
              {choice.label}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
