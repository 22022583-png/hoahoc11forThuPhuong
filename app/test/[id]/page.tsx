'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { multipleChoiceQuestions, trueFalseQuestions, essayQuestions, flowerTypes } from '@/lib/constants/questions';
import { hydrocarbonBank } from '@/app/constants/hydrocarbonBank';
import Question from '@/components/Question';
import Confetti from 'react-confetti';
import { ArrowLeft, Home, CheckCircle, AlertCircle } from 'lucide-react';
import { updateProgress, addFlowerToList } from '@/lib/personalization';

export default function TestPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.id as string;

  const [allQuestions, setAllQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [rewardFlower, setRewardFlower] = useState<any | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [testStats, setTestStats] = useState({ partI: 0, partII: 0, partIII: 0 });

  useEffect(() => {
    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const buildHydrocarbonQuiz = () => {
      const selectedMC = shuffleArray([...hydrocarbonBank.part1]).slice(0, 20).map((q) => ({ ...q, type: 'multiple_choice' }));
      const selectedTF = shuffleArray([...hydrocarbonBank.part2]).slice(0, 5).map((q) => ({ ...q, type: 'true_false_items' }));
      const selectedEssay = shuffleArray([...hydrocarbonBank.part3]).slice(0, 5).map((q) => ({ ...q, type: 'essay' }));

      return [...selectedMC, ...selectedTF, ...selectedEssay];
    };

    if (testId === 'hydrocarbon') {
      setAllQuestions(buildHydrocarbonQuiz());
      setAnswers({});
      setCurrentQuestion(0);
      setCompleted(false);
      setScore(0);
      setRewardFlower(null);
      setShowConfetti(false);
      setTestStats({ partI: 0, partII: 0, partIII: 0 });
      return;
    }

    const shuffledMC = shuffleArray([...multipleChoiceQuestions]).slice(0, 40);
    const shuffledTF = shuffleArray([...trueFalseQuestions]).slice(0, 4);
    const shuffledEssay = shuffleArray([...essayQuestions]).slice(0, 4);

    const allQ = [...shuffledMC, ...shuffledTF, ...shuffledEssay];
    setAllQuestions(shuffleArray(allQ));
  }, [testId]);

  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const handleAnswer = (answer: any) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const normalizeAnswer = (value: string) =>
    value
      .replace(/\$/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();

  const isEssayAnswerCorrect = (userAnswer: string, correctAnswer: string) => {
    if (!userAnswer) {
      return false;
    }
    return normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
  };

  const submitTest = () => {
    let partIScore = 0; // Multiple Choice
    let partIIScore = 0; // True/False grouped items
    let partIIIScore = 0; // Essay

    allQuestions.forEach((q, index) => {
      const userAnswer = answers[index];

      if (q.type === 'multiple_choice') {
        if (userAnswer === q.ans) {
          partIScore += 0.25;
        }
      } else if (q.type === 'true_false') {
        if (userAnswer === q.ans) {
          partIIScore += 1;
        }
      } else if (q.type === 'true_false_items') {
        if (userAnswer && typeof userAnswer === 'object') {
          q.items.forEach((item: any, itemIndex: number) => {
            if (userAnswer[itemIndex] === item.correct) {
              partIIScore += 0.125;
            }
          });
        }
      } else if (q.type === 'essay') {
        if (isEssayAnswerCorrect(userAnswer || '', q.ans)) {
          partIIIScore += 0.5;
        }
      }
    });

    const finalScore = partIScore + partIIScore + partIIIScore;
    setScore(finalScore);
    setTestStats({ partI: partIScore, partII: partIIScore, partIII: partIIIScore });

    // Update progress to localStorage if score >= 5
    if (finalScore >= 5) {
      updateProgress('test', Math.min(finalScore * 10, 100));
    }

    // Reward logic - use centralized addFlowerToList function
    if (finalScore >= 8) {
      const result = addFlowerToList();
      if (result?.isNew) {
        setRewardFlower(result.flower);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    }

    setCompleted(true);
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-4 flex items-center justify-center">
        {showConfetti && <Confetti />}
        <div className="glass rounded-xl p-8 text-center max-w-md border border-cyan-500/20">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-green-400" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-cyan-400 mb-4">Hoàn Thành!</h1>
          <p className="text-lg mb-2">Điểm số của bạn:</p>
          <p className="text-4xl font-bold text-purple-400 mb-6">{score.toFixed(1)}/10</p>
          
          <div className="space-y-2 mb-6 text-sm">
            <p>Phần I (MC): {testStats.partI.toFixed(2)}</p>
            <p>Phần II (T/F): {testStats.partII.toFixed(2)}</p>
            <p>Phần III (Tự luận): {testStats.partIII.toFixed(2)}</p>
          </div>

          {rewardFlower && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-lg border border-green-500/20">
              <p className="text-green-400 font-semibold mb-2">🎉 Chúc mừng! Bạn nhận được:</p>
              <div className="text-6xl mb-2">{rewardFlower.emoji}</div>
              <p className="text-white">{rewardFlower.name}</p>
              <p className="text-xs text-slate-400 mt-1">({rewardFlower.rarity})</p>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => router.push('/test')}
              className="flex-1 btn-gradient text-white px-4 py-2 rounded-lg transition"
            >
              Làm Lại
            </button>
            <button
              onClick={() => router.push('/')}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (allQuestions.length === 0) {
    return <div className="min-h-screen bg-slate-950 text-white p-4 flex items-center justify-center">Đang tải...</div>;
  }

  const currentQ = allQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / allQuestions.length) * 100;

  const currentPart =
    currentQ?.type === 'multiple_choice'
      ? 'I'
      : currentQ?.type === 'true_false_items'
      ? 'II'
      : currentQ?.type === 'true_false'
      ? 'II'
      : 'III';

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => router.push('/test')}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
            >
              <ArrowLeft size={20} />
              <span>Quay lại</span>
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Đề Thi Kỳ II
            </h1>
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition"
            >
              <Home size={20} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-slate-300">Phần {currentPart} - Câu {currentQuestion + 1}/{allQuestions.length}</span>
              <span className="text-sm text-slate-300">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </header>

        {/* Question */}
        <div className="glass rounded-xl p-8 border border-cyan-500/20 mb-6">
          <Question
            question={currentQ}
            onAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestion]}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition"
          >
            <ArrowLeft size={18} />
            Câu Trước
          </button>

          <div className="flex gap-2">
            {answers[currentQuestion] ? (
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle size={18} />
                Đã trả lời
              </span>
            ) : (
              <span className="flex items-center gap-2 text-yellow-400">
                <AlertCircle size={18} />
                Chưa trả lời
              </span>
            )}
          </div>

          {currentQuestion < allQuestions.length - 1 ? (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-2 btn-gradient text-white px-6 py-3 rounded-lg transition"
            >
              Câu Tiếp
              <ArrowLeft size={18} className="rotate-180" />
            </button>
          ) : (
            <button
              onClick={submitTest}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition font-semibold"
            >
              Nộp Bài Thi
            </button>
          )}
        </div>
      </div>
    </div>
  );
}