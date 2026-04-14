'use client';

import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface QuestionProps {
  question: any;
  onAnswer: (answer: any) => void;
  selectedAnswer?: any;
}

export default function Question({ question, onAnswer, selectedAnswer }: QuestionProps) {
  const renderMathText = (text: string) => {
    const parts = text.split(/(\$[^$]+\$)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleSelect = (optionIndex: number) => {
    onAnswer(optionIndex);
  };

  const handleTrueFalse = (answer: boolean) => {
    onAnswer(answer);
  };

  const handleItemAnswer = (index: number, answer: boolean) => {
    onAnswer({
      ...selectedAnswer,
      [index]: answer,
    });
  };

  const handleEssay = (answer: string) => {
    onAnswer(answer);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {renderMathText(question.question)}
      </h3>

      {question.type === 'multiple_choice' && (
        <div className="space-y-2">
          {question.options.map((option: string, index: number) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={index}
                checked={selectedAnswer === index}
                onChange={() => handleSelect(index)}
                className="text-blue-500"
              />
              <span>{renderMathText(option)}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'true_false' && (
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={selectedAnswer === true}
              onChange={() => handleTrueFalse(true)}
              className="text-blue-500"
            />
            <span>Đúng</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={selectedAnswer === false}
              onChange={() => handleTrueFalse(false)}
              className="text-blue-500"
            />
            <span>Sai</span>
          </label>
        </div>
      )}

      {question.type === 'true_false_items' && (
        <div className="space-y-4">
          {question.items.map((item: any, index: number) => (
            <div key={index} className="rounded-xl border border-slate-200/50 bg-slate-50/80 p-4">
              <p className="text-sm mb-3 text-slate-800">
                {renderMathText(item.text)}
              </p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${question.id}-item-${index}`}
                    checked={selectedAnswer?.[index] === true}
                    onChange={() => handleItemAnswer(index, true)}
                    className="text-blue-500"
                  />
                  <span>Đúng</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${question.id}-item-${index}`}
                    checked={selectedAnswer?.[index] === false}
                    onChange={() => handleItemAnswer(index, false)}
                    className="text-blue-500"
                  />
                  <span>Sai</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      )}

      {question.type === 'essay' && (
        <textarea
          value={selectedAnswer || ''}
          onChange={(e) => handleEssay(e.target.value)}
          placeholder="Nhập đáp án của bạn..."
          className="w-full p-3 border rounded-lg"
          rows={4}
        />
      )}
    </div>
  );
}