'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MathContent } from '@/components/MathContent';
import { ChevronLeft, Home } from 'lucide-react';

const chapterContent: Record<string, { title: string; content: string }> = {
  alkane: {
    title: 'Hydrocarbon - Alkane',
    content: `
# Alkane: Cấu Tạo và Tính Chất

## Công Thức Chung

Công thức chung của alkane là $C_nH_{2n+2}$ hoặc $C_nH_{2n}$ (cycloalkane).

## Tính Chất Vật Lý
- Không màu, không mùi
- Tăng điểm sôi theo số nguyên tử C

## Phản Ứng Thế

$$CH_4 + Cl_2 \\xrightarrow{h\\nu} CH_3Cl + HCl$$

Điều kiện: Ánh sáng hoặc nhiệt độ cao.

## Bài Tập Minh Họa
Tính khối lượng Cần thiết của $CH_4$ để tạo 10g $CH_3Cl$.
`
  },
  alcohol: {
    title: 'Alcohol',
    content: `
# Alcohol: Cấu Tạo và Tính Chất

## Định Nghĩa
Alcohol là hợp chất hữu cơ có nhóm chức -OH gắn trực tiếp vào nguyên tử carbon no.

## Bảng Tên Gọi IUPAC
- Methanol: $CH_3OH$
- Ethanol: $C_2H_5OH$
- Propanol: $C_3H_7OH$

## Phản Ứng Thế

$$C_2H_5OH + HCl \\rightarrow C_2H_5Cl + H_2O$$

Điều kiện: $H_2SO_4$ đặc, nhiệt.

## Phản Ứng Tách Kinh

$$C_2H_5OH \\xrightarrow{H_2SO_4} C_2H_4 + H_2O$$

Điều kiện: 170°C.

## Bài Tập Minh Họa
Viết phương trình phản ứng của ethanol với axit nitric.
`
  },
  alkene: {
    title: 'Hydrocarbon - Alkene',
    content: `
# Alkene: Cấu Tạo và Tính Chất

## Công Thức Chung

Công thức chung của alkene là $C_nH_{2n}$.

## Phản Ứng Cộng

$$CH_2=CH_2 + H_2 \\rightarrow CH_3-CH_3$$

Điều kiện: Ni, nhiệt độ.

## Bài Tập
Viết phương trình phản ứng của ethene với nước brom.
`
  },
  alkyne: {
    title: 'Hydrocarbon - Alkyne',
    content: `
# Alkyne: Cấu Tạo và Tính Chất

## Công Thức Chung

Công thức chung của alkyne là $C_nH_{2n-2}$.

## Phản Ứng Hydrogenation

$$C_2H_2 + H_2 \\xrightarrow{Ni} C_2H_4 \\xrightarrow{Ni} C_2H_6$$

Sản phẩm trung gian: Alkene

## Đặc Điểm
- Liên kết ba rất hoạt động
- Dễ tham gia phản ứng cộng
- Sử dụng trong hàn
`
  },
  // Thêm các chapter khác tương tự
};

export default function ChapterDetail() {
  const params = useParams();
  const chapterId = params.id as string;
  const content = chapterContent[chapterId] || { title: 'Chương chưa có', content: 'Nội dung đang cập nhật.' };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link href="/chapters" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-4">
            <ChevronLeft size={20} />
            <span>Quay lại Danh Sách Chương</span>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            {content.title}
          </h1>
        </header>

        <div className="glass rounded-xl p-8 border border-cyan-500/20 shadow-xl shadow-cyan-500/10">
          <MathContent content={content.content} />
        </div>

        <div className="mt-8 flex justify-between">
          <Link href="/chapters" className="inline-flex items-center gap-2 btn-gradient text-white px-6 py-3 rounded-lg transition">
            <ChevronLeft size={20} />
            <span>Các Chương Khác</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition">
            <Home size={20} />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}