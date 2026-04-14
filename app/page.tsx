'use client';

import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Beaker, TestTube, Atom, Flame, Wind, Zap, Droplets, BookOpen, Award, Sparkles } from 'lucide-react';
import { getChapterProgress, getCollectedFlowers } from '@/lib/personalization';

const chapters = [
  { 
    id: 'alkane', 
    name: 'Hydrocarbon - Alkane', 
    icon: Flame,
    formula: '$C_nH_{2n+2}$',
    description: 'Các hợp chất no chứa C và H'
  },
  { 
    id: 'alkene', 
    name: 'Hydrocarbon - Alkene', 
    icon: Zap,
    formula: '$C_nH_{2n}$',
    description: 'Chứa liên kết đôi C=C'
  },
  { 
    id: 'alkyne', 
    name: 'Hydrocarbon - Alkyne', 
    icon: Wind,
    formula: '$C_nH_{2n-2}$',
    description: 'Chứa liên kết ba C≡C'
  },
  { 
    id: 'arene', 
    name: 'Hydrocarbon - Arene', 
    icon: Atom,
    formula: '$C_6H_6$ (Benzene)',
    description: 'Vòng aromatic, ổn định cao'
  },
  { 
    id: 'halogen_derivatives', 
    name: 'Dẫn xuất Halogen', 
    icon: Beaker,
    formula: '$R-X$ (X: F, Cl, Br, I)',
    description: 'Thế halogen vào hydrocacbon'
  },
  { 
    id: 'alcohol', 
    name: 'Alcohol', 
    icon: Droplets,
    formula: '$R-OH$',
    description: 'Nhóm -OH gắn trên C mơ'
  },
  { 
    id: 'phenol', 
    name: 'Phenol', 
    icon: Sparkles,
    formula: '$C_6H_5-OH$',
    description: 'Nhóm -OH gắn trên vòng benzene'
  },
  { 
    id: 'aldehyde', 
    name: 'Aldehyde', 
    icon: TestTube,
    formula: '$R-CHO$',
    description: 'Nhóm chức carbonyl cuối chuỗi'
  },
  { 
    id: 'ketone', 
    name: 'Ketone', 
    icon: Beaker,
    formula: '$R-CO-R\'$',
    description: 'Nhóm carbonyl giữa chuỗi'
  },
  { 
    id: 'carboxylic_acid', 
    name: 'Carboxylic Acid', 
    icon: BookOpen,
    formula: '$R-COOH$',
    description: 'Axit hữu cơ yếu'
  },
];

export default function Dashboard() {
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [flowers, setFlowers] = useState<any[]>([]);
  const [suggestion, setSuggestion] = useState<string>('');

  useEffect(() => {
    // Load data from localStorage using personalization functions
    const allProgress: Record<string, number> = {};
    chapters.forEach((chapter) => {
      allProgress[chapter.id] = getChapterProgress(chapter.id);
    });
    setProgress(allProgress);
    
    const savedFlowers = getCollectedFlowers();
    setFlowers(savedFlowers);

    // Generate suggestion
    const hydrocarbonScore = allProgress['alkane'] || 0;
    if (hydrocarbonScore < 50) {
      setSuggestion('💡 Hãy bắt đầu học từ chương Hydrocarbon - Alkane để có nền tảng vững chắc!');
    } else if (hydrocarbonScore < 100) {
      setSuggestion('✨ Bạn đang tiến bộ tốt! Tiếp tục hoàn thành các chương còn lại.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Hóa Học 11 - Kỳ 2
          </h1>
          <p className="text-lg text-slate-300">Học Tập Cá Nhân Hóa với AI</p>
          {suggestion && (
            <div className="mt-4 p-4 bg-yellow-500 text-black rounded-lg">
              {suggestion}
            </div>
          )}
        </header>

        <section className="glass rounded-xl p-8 border border-cyan-500/20 mb-6">
          <h2 className="text-2xl font-semibold mb-6">📚 Tổng Quan Các Chương</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapters.map((chapter) => {
              const Icon = chapter.icon;
              return (
                <Link key={chapter.id} href={`/learn/${chapter.id}`}>
                  <div className="glass rounded-lg p-4 border border-purple-500/20 hover:border-cyan-500/40 transition group cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition flex-shrink-0" />
                          <h3 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition">{chapter.name}</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-2">{chapter.description}</p>
                      </div>
                    </div>
                    
                    {/* Formula Display */}
                    <div className="mb-3 p-2 bg-slate-800/50 rounded border border-purple-500/20">
                      <p className="text-xs text-slate-400 mb-1">Công thức:</p>
                      <div className="text-sm text-cyan-300 font-mono">
                        <InlineMath math={chapter.formula} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-400">
                        Tiến độ: <span className="text-cyan-300 font-semibold">{progress[chapter.id] || 0}%</span>
                      </p>
                      <div className="text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-2 py-1 rounded text-cyan-300 group-hover:text-purple-300 transition">
                        Học →
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="glass rounded-xl p-8 border border-cyan-500/20 mb-6">
          <h2 className="text-2xl font-semibold mb-6">⚡ Truy Cập Nhanh</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/chapters" className="btn-gradient text-white px-6 py-3 rounded-lg transition font-semibold hover:shadow-lg hover:shadow-cyan-500/20">
              📖 Học Lý Thuyết
            </Link>
            <Link href="/test" className="btn-gradient text-white px-6 py-3 rounded-lg transition font-semibold hover:shadow-lg hover:shadow-purple-500/20">
              ✏️ Làm Bài Kiểm Tra
            </Link>
            <Link href="/ai" className="btn-gradient text-white px-6 py-3 rounded-lg transition font-semibold hover:shadow-lg hover:shadow-pink-500/20">
              🤖 Tra Cứu AI
            </Link>
          </div>
        </section>

        <section className="glass rounded-xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-300">🌸 Vườn Hoa Phần Thưởng</h2>
          {flowers.length === 0 ? (
            <p className="text-slate-400 text-center py-8">
              Hãy đạt điểm ≥ 8 trong bài kiểm tra để nhận hoa! 🌺
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {flowers.map((flower, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition border border-purple-500/20"
                  title={`${flower.name} (${flower.rarity})`}
                >
                  <div className="text-4xl mb-2">{flower.emoji}</div>
                  <p className="text-xs text-center text-slate-300">{flower.name}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
