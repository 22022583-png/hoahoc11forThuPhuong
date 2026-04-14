'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ArrowLeft, Home, Send, Loader, Zap } from 'lucide-react';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export default function AIAssistant() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imageResult, setImageResult] = useState<string>('');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ user: string; ai: string }[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isChatting, setIsChatting] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!image) return;
    setIsAnalyzing(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const imageData = await fileToGenerativePart(image);
      const prompt = 'Phân tích đề bài Hóa học trong ảnh này, giải thích và đưa ra lời giải chi tiết với công thức hóa học.';

      const result = await model.generateContent([prompt, imageData]);
      const response = await result.response;
      setImageResult(response.text());
    } catch (error) {
      console.error('Error analyzing image:', error);
      setImageResult('❌ Lỗi khi phân tích ảnh. Vui lòng thử lại.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const sendChatMessage = async () => {
    if (!chatMessage.trim()) return;
    setIsChatting(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const prompt = `Bạn là trợ lý Hóa học chuyên nghiệp. Trả lời câu hỏi về Hóa học 11 Kỳ 2 (Hydrocarbon, Alcohol, Aldehyde, Acid). Sử dụng công thức LaTeX trong dấu $ hoặc $$ nếu cần. Câu hỏi: ${chatMessage}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiResponse = response.text();

      setChatHistory([...chatHistory, { user: chatMessage, ai: aiResponse }]);
      setChatMessage('');
    } catch (error) {
      console.error('Error chatting:', error);
      setChatHistory([...chatHistory, { user: chatMessage, ai: '❌ Lỗi khi kết nối AI. Vui lòng thử lại.' }]);
      setChatMessage('');
    } finally {
      setIsChatting(false);
    }
  };

  async function fileToGenerativePart(file: File) {
    const base64 = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: {
        data: base64.split(',')[1],
        mimeType: file.type,
      },
    };
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
              <ArrowLeft size={20} />
              <span>Quay lại</span>
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🤖 Trợ Lý AI Hóa Học
            </h1>
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition">
              <Home size={20} />
            </Link>
          </div>
          <p className="text-center text-slate-300">Tra cứu đề bài qua ảnh và hỏi đáp với AI</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Image Analysis */}
          <section className="glass rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-300">
              <Zap className="inline mr-2" size={24} />
              Tra Cứu Qua Ảnh
            </h2>
            
            {/* Upload area */}
            <label className="space-y-4 cursor-pointer">
              <div className="border-2 border-dashed border-cyan-500/50 rounded-lg p-6 text-center hover:border-cyan-400 transition">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="space-y-2">
                  <p className="text-slate-300">📸 Nhấn để chọn ảnh đề bài</p>
                  <p className="text-xs text-slate-500">PNG, JPG, GIF (tối đa 5MB)</p>
                </div>
              </div>
            </label>

            {/* Image preview with scan effect */}
            {imagePreview && (
              <div className="mt-6 relative">
                <div className="relative overflow-hidden rounded-lg border border-purple-500/30">
                  <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover" />
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse" />
                  )}
                </div>
              </div>
            )}

            {/* Analyze button */}
            <button
              onClick={analyzeImage}
              disabled={!image || isAnalyzing}
              className="w-full mt-6 btn-gradient text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  <span>Đang Scan Ảnh...</span>
                </>
              ) : (
                <>
                  <Zap size={18} />
                  <span>Phân Tích Đề Bài</span>
                </>
              )}
            </button>

            {/* Result */}
            {imageResult && (
              <div className="mt-6 space-y-3">
                <div className="glass rounded-lg p-4 border border-green-500/20 max-h-96 overflow-y-auto">
                  <p className="text-slate-200 whitespace-pre-wrap text-sm" dangerouslySetInnerHTML={{ __html: imageResult.replace(/\n/g, '<br>') }} />
                </div>
              </div>
            )}
          </section>

          {/* Chatbot */}
          <section className="glass rounded-xl p-8 border border-purple-500/20 flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">💬 Chatbot Hóa Học</h2>
            
            {/* Chat history */}
            <div className="flex-1 space-y-4 mb-6 overflow-y-auto max-h-96 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
              {chatHistory.length === 0 ? (
                <p className="text-center text-slate-400 py-8">Hỏi gì đó về Hóa Học Kỳ 2...</p>
              ) : (
                chatHistory.map((msg, index) => (
                  <div key={index} className="space-y-2">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-lg max-w-xs">
                        <p className="text-sm">{msg.user}</p>
                      </div>
                    </div>
                    {/* AI response */}
                    <div className="flex justify-start">
                      <div className="bg-slate-700 px-4 py-2 rounded-lg max-w-xs">
                        <p className="text-sm text-slate-200">{msg.ai}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                placeholder="Hỏi về công thức, phản ứng..."
                className="flex-1 bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-cyan-500 placeholder-slate-500"
                disabled={isChatting}
              />
              <button
                onClick={sendChatMessage}
                disabled={isChatting || !chatMessage.trim()}
                className="btn-gradient text-white p-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isChatting ? <Loader size={20} className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}