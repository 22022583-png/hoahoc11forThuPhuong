'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MathContent } from '@/components/MathContent';
import { ArrowLeft, Home, CheckCircle, Award, Zap } from 'lucide-react';
import Link from 'next/link';
import Confetti from 'react-confetti';
import { updateProgress, addFlowerToList } from '@/lib/personalization';

// Content for each chapter
const learningContent: Record<string, { 
  title: string; 
  icon: string;
  sections: { title: string; content: string }[] 
}> = {
  alcohol: {
    title: 'Alcohol - Hợp Chất Hữu Cơ Có Nhóm -OH',
    icon: '🍹',
    sections: [
      {
        title: '1. Định Nghĩa và Phân Loại',
        content: `
## Định Nghĩa
Alcohol là các hợp chất hữu cơ chứa một hoặc nhiều nhóm -OH gắn **trực tiếp vào nguyên tử carbon no** (không phải vòng benzene).

### Công Thức Chung
$$R-OH$$

## Phân Loại Alcohol
**Dựa theo số nhóm -OH:**
- Alcohol đơn chức: $R-OH$ (1 nhóm -OH)
- Alcohol đa chức: $R-(OH)_2, R-(OH)_3$... (nhiều nhóm -OH)

**Dựa theo loại carbon:**
1. **Alcohol sơ cấp**: Nhóm -OH gắn vào carbon đơn liên với tối đa 1 carbon khác
   - Ví dụ: $CH_3-CH_2-OH$ (Ethanol)
   
2. **Alcohol thứ cấp**: Nhóm -OH gắn vào carbon kết nối với 2 carbon khác
   - Ví dụ: $(CH_3)_2-CHOH$ (Propan-2-ol)
   
3. **Alcohol bậc ba**: Nhóm -OH gắn vào carbon kết nối với 3 carbon khác
   - Ví dụ: $(CH_3)_3-COH$ (2-methylpropan-2-ol)
`
      },
      {
        title: '2. Danh Pháp IUPAC',
        content: `
## Quy Tắc Đặt Tên IUPAC
**Cách 1: Từ tên alkane**
- Bỏ chữ "e" ở cuối, thêm "-ol"
- Ví dụ: Methane → Methanol

**Cách 2: Từ số chuỗi C**
- Đếm số carbon (bao gồm carbon của -OH)
- -: ngếu -OH trên carbon C1 → Ethanol (2C)
- Nếu -OH trên carbon C2 → Propan-2-ol (3C, -OH ở vị trí 2)

### Ví Dụ Danh Pháp
| Công Thức | Tên IUPAC | Tên Thông Thường |
|-----------|----------|-----------------|
| $CH_3OH$ | Methanol | Methyl alcohol |
| $C_2H_5OH$ | Ethanol | Ethyl alcohol |
| $CH_3CHOHCH_3$ | Propan-2-ol | Isopropyl alcohol |
| $HOCH_2CH_2OH$ | Ethane-1,2-diol | Ethylene glycol |
| $CH_2OHCHOHCH_2OH$ | Propane-1,2,3-triol | Glycerol |

### Quy Tắc Đặt Tên Chi Tiết
1. Tìm chuỗi carbon dài nhất chứa -OH
2. Đánh số từ đầu sao cho -OH có số nhỏ nhất
3. Nêu vị trí của -OH trước tên alkane
4. Thêm hậu tố "-ol"

Ví dụ: $CH_3CH(OH)CH_2CH_3$ → But-2-ol (đánh số: C1-C2(OH)-C3-C4)
`
      },
      {
        title: '3. Tính Chất Vật Lý',
        content: `
## Tính Chất Nổi Bật

### Tan Trong Nước
- Alcohol **tan trong nước** nhờ liên kết hydrogen giữa nhóm -OH với H₂O
- Khả năng tan giảm khi số carbon tăng
- Alcohol đa chức cực kỳ tan trong nước

### Tiêu Điểm Sôi
- **Cao hơn** alkane tương ứng vì có liên kết hydrogen
- Tăng theo số carbon và số nhóm -OH

| Hợp chất | Tiêu Điểm Sôi (°C) |
|---------|-----------------|
| Methane ($CH_4$) | -161 |
| Methanol ($CH_3OH$) | 64 |
| Ethane ($C_2H_6$) | -88 |
| Ethanol ($C_2H_5OH$) | 78 |

### Mùi và Hình Dạng
- Alcohol nhẹ có mùi đặc trưng
- Liquid (nước) hoặc chất lỏng trong điều kiện thường
`
      },
      {
        title: '4. Phản Ứng Hóa Học',
        content: `
## Phản Ứng Thế (Substitution)

### Phản Ứng Với Axit Bình Thường
Alcohol phản ứng với axit **loại** mạnh nhưng **không phản ứng thế** dễ dàng.

### Phản Ứng Với Natri (Na)
**Phản ứng QUAN TRỌNG:**

$$2R-OH + 2Na \\rightarrow 2R-ONa + H_2 \\uparrow$$

**Ví dụ cụ thể:**
$$2CH_3CH_2OH + 2Na \\rightarrow 2CH_3CH_2ONa + H_2 \\uparrow$$

**Độc lập xác nhận phản ứng:** Khí H₂ tạo tiếng nổ "pop" khi đốt

### Phản Ứng Với HCl
$$C_2H_5OH + HCl \\xrightarrow{H_2SO_4 \\ đặc, \\ nhiệt} C_2H_5Cl + H_2O$$

**Điều kiện:** Axit sulphuric đặc, nhiệt độ cao (60-70°C)

## Phản Ứng Tách Kinh (Dehydration)

### Tách Nước Từ Alcohol
$$C_2H_5OH \\xrightarrow{H_2SO_4 \\ đặc, \\ 140°C} C_2H_4 + H_2O$$
(Tạo **alkene**)

$$2C_2H_5OH \\xrightarrow{H_2SO_4 \\ đặc, \\ 140°C} C_2H_5-O-C_2H_5 + H_2O$$
(Tạo **ether** - 3 điểm tại 140°C, ether sinh ra khi duyệt ở 140°C)

### Lưu Ý Quan Trọng
- **140°C**: Tạo ether ($C_2H_5-O-C_2H_5$)
- **170°C**: Tạo alkene ($C_2H_4$)

## Phản Ứng Oxi Hóa (Oxidation)

### Alcohol Sơ Cấp
$$RCH_2OH \\xrightarrow{[O]} R-CHO \\xrightarrow{[O]} R-COOH$$

**Ví dụ:**
$$CH_3CH_2OH \\xrightarrow{K_2Cr_2O_7, H_2SO_4} CH_3CHO \\xrightarrow{K_2Cr_2O_7, H_2SO_4} CH_3COOH$$

### Alcohol Thứ Cấp
$$R_2CHOH \\xrightarrow{[O]} R_2C=O$$
(Tạo **ketone**, dừng ở đó)

### Alcohol Bậc Ba
**KHÔNG bị oxi hóa** (không được đặc biệt gọi "bậc ba")

## Phản Ứng Esterification
$$R-OH + R'-COOH \\xrightarrow{H^+} R'-COO-R + H_2O$$

**Ví dụ:**
$$CH_3OH + CH_3COOH \\xrightarrow{H_2SO_4} CH_3COOCH_3 + H_2O$$
(Tạo **methyl acetate** - có mùi đặc trưng)
`
      },
      {
        title: '5. Bài Tập Minh Họa',
        content: `
## Bài 1: Phản Ứng Với Natri
**Câu hỏi:** Viết phương trình phản ứng: $2CH_3CH_2OH + 2Na \\rightarrow ?$

**Áp dụng:**
$$2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa (\\text{sodium ethoxide}) + H_2 \\uparrow$$

## Bài 2: Tách Kinh
**Câu hỏi:** Ở 170°C, ethanol phản ứng với H₂SO₄ đặc tạo gì?

**Đáp án:**
$$C_2H_5OH \\xrightarrow{H_2SO_4, 170°C} C_2H_4 + H_2O$$
Sản phẩm: **Ethene** (alkene, khí không màu)

## Bài 3: Oxi Hóa
**Câu hỏi:** Ethanol bị oxi hóa lần lượt tạo gì?

**Đáp án:**
$$CH_3CH_2OH \\xrightarrow{[O]} CH_3CHO (l) \\xrightarrow{[O]} CH_3COOH$$
- Lần 1: **Ethanal** (acetaldehyde)
- Lần 2: **Ethanoic acid** (acetic acid)

## Bài 4: Esterification
**Câu hỏi:** Ethanol với acetic acid tạo gì?

**Đáp án:**
$$CH_3COOH + C_2H_5OH \\xrightarrow{H^+} CH_3COOC_2H_5 + H_2O$$
Sản phẩm: **Ethyl acetate** (hương quả, acetate để bảo quản)
`
      }
    ]
  },
  phenol: {
    title: 'Phenol - Axit Hữu Cơ Yếu Dựa Trên Vòng Benzene',
    icon: '🧫',
    sections: [
      {
        title: '1. Định Nghĩa Phenol',
        content: `
## Định Nghĩa
Phenol là hợp chất có nhóm -OH **gắn trực tiếp vào vòng benzene**, không gắn vào carbon alkyl.

### Công Thức Chung
$$C_6H_5-OH$$

### Phân Biệt Với Alcohol
| Đặc điểm | Alcohol | Phenol |
|---------|---------|--------|
| Nhóm -OH gắn vào | Carbon sp³ | Carbon sp² (vòng benzene) |
| Công thức | $R-OH$ | $C_6H_5-OH$ (hay ArOH) |
| Tính axit | Tính kiềm yếu | **Axit yếu** |
| Ví dụ | Ethanol | Phenol (hydroxy-benzene) |
| Mùi | Quenched | Đặc trưng, cắn cơ |

## Lịch Sử
- Phát hiện năm 1834
- Ban đầu gọi là "acid carbolic" vì tính axit
- Sử dụng làm **thuốc sát khuẩn** cổ điển
`
      },
      {
        title: '2. Danh Pháp IUPAC',
        content: `
## Tên IUPAC
- **Hydroxy-benzene** (tên chính thức)
- **Phenol** (tên thông thường quốc tế)

## Các Đồng Phân Thế
Khi có 2 nhóm -OH trên vòng benzene:

### **Orto-phenol** (1,2-dihydroxybenzene)
- Nhóm -OH cạnh nhau (vị trí 1,2)
- Tính axit: **Mạnh nhất**
- Dễ tạo liên kết hydrogen nội bộ

### **Meta-phenol** (1,3-dihydroxybenzene)
- Nhóm -OH cách 1 carbon (vị trí 1,3)
- Tính axit: **Trung bình**

### **Para-phenol** (1,4-dihydroxybenzene)
- Nhóm -OH đối diện (vị trí 1,4)
- Tính axit: **Yếu nhất**
`
      },
      {
        title: '3. Tính Chất Vật Lý',
        content: `
## Tính Chất Nổi Bật

### Hình Trạng
- **Rắn trắng tinh thể** ở điều kiện thường
- Tiêu điểm nóng chảy: **40.5°C** (dễ nóng chảy)
- Tiêu điểm sôi: **181.8°C** (cao vì liên kết hydrogen)

### Tan Trong Nước
- Tan trong nước lạnh, **đặc biệt tan trong nước nóng**
- Tan trong các dung môi hữu cơ (cồn, ether, dầu)
- Tính tan giảm khi hạ nhiệt độ (trích ly phenol = hạ nhiệt từ 60°C → 20°C)

### Mùi Đặc Trưng
- Mùi **cắn cơ, không chịu được**
- Độc hại khi hít phải
- Tóc quay xanh khi tiếp xúc

### Mầu Sắc Đặc Biệt
- Phenol **không dùng trong nuôi cấy** (còn có ảnh hưởng)
- Với FeCl₃: **Tím sẫm** (phản ứng đặc trưng)
`
      },
      {
        title: '4. Tính Axit Của Phenol',
        content: `
## So Sánh Tính Axit

### Thứ Tự Tính Axit
$$\\text{Alcohol} < \\text{Nước} < \\text{Phenol} < \\text{Axit Carboxylic}$$

### Hằng Số Phân Ly (Ka)
- **Alcohol**: Gần như không axit
- **Nước**: $Ka \\approx 10^{-15}$
- **Phenol**: $Ka \\approx 10^{-10}$ (**axit yếu**)
- **Acetic acid** ($CH_3COOH$): $Ka \\approx 1.8 \\times 10^{-5}$ (axit mạnh)

## Lý Do Phenol Có Tính Axit
Vòng benzene **ổn định hóa** anion phenoxide $(C_6H_5O^-)$ thông qua **resonance (cộng hưởng)**:
- Electron âm trong vòng có thể phân tán ra
- Phân tử lý thuyết được ổn định
- Giảm năng lượng của anion
- Dễ tách ri proton

## Phản Ứng Của Phenol (Axit)
$$C_6H_5OH + NaOH \\rightarrow C_6H_5ONa + H_2O$$
$$2C_6H_5OH + Ca(OH)_2 \\rightarrow (C_6H_5O)_2Ca + 2H_2O$$

**So sánh:**
- **Alcohol** không phản ứng với base yếu
- **Phenol** phản ứng với base yếu (NaOH) vì là axit yếu
`
      },
      {
        title: '5. Phản Ứng Của Phenol',
        content: `
## 1. Phản Ứng Với Kim Loại
$$2C_6H_5OH + 2Na \\rightarrow 2C_6H_5ONa + H_2 \\uparrow$$

## 2. Phản Ứng Với Axit
### Với HCl (khí)
$$C_6H_5OH + HCl(g) \\xrightarrow{\\text{không điều kiện}} C_6H_5Cl + H_2O$$
**Điều kiện:** Bình hay khí - **KHÔNG cần xúc tác, nhiệt độ thường**

**Lý do:** Phenol chứa lợn -OH với hệ aromatic → đặc biệt hoạt động thế phủ

### Với HBr
$$C_6H_5OH + HBr \\rightarrow C_6H_5Br + H_2O$$

### Với HI
$$C_6H_5OH + HI \\rightarrow C_6H_5I + H_2O$$

## 3. Phản Ứng Thế Electrophilic

### Nitration (Tạo Nitrophenol)
$$C_6H_5OH + HNO_3 \\xrightarrow{H_2SO_4} \\text{O}_2N-C_6H_4-OH + H_2O$$

**Sản phẩm:** 
- **Orto-nitrophenol** 🔴 (chính)
- **Para-nitrophenol** 🔴 (chính)
- Meta-nitrophenol (nhỏ)

**Lý do:** Nhóm -OH **aktivate** vòng → dễ thế

### Halogenation (Tạo Halogenophenol)
$$C_6H_5OH + 3Br_2 \\rightarrow Br_3-C_6H_2-OH + 3HBr$$

**Sản phẩm:** **2,4,6-tribromophenol** (antiseptisch)

## 4. Phản Ứng Condense (축合)

### Với Formaldehyde
$$nC_6H_5OH + nCH_2O \\rightarrow \\text{Resin}$$

**Sản phẩm:** Phenolic resin (Bakelite) - dùng làm nhựa cứng

## 5. Phản Ứng Với FeCl₃ (Phản Ứng Đặc Trưng)
$$3C_6H_5OH + FeCl_3 \\rightarrow (C_6H_5O)_3Fe + 3HCl$$

**Hiện tượng:** Dung dịch **chuyển sang màu tím sẫm**

**Động cơ:** Tạo liên kết phối tử chủ-phụ giữa phenol và Fe³⁺

**Tiêu chí:** Dễ nhất để **phát hiện phenol** trong dung dịch
`
      },
      {
        title: '6. Ứng Dụng Phenol',
        content: `
## Ứng Dụng Chính

### 1. Tạo Nhựa Bakelite
$$nC_6H_5OH + nCH_2O \\rightarrow \\text{Phenolic resin}$$
- Nhựa cứng, chịu lực
- Dùng trong cách điện, tay cầm nape, vv

### 2. Sát Khuẩn và Khử Trùng
- **Lysol** (phenol + xà phòng): **Sát khuẩn**
- **Hexachlorophene**: **Khử trùng trong sữa tắm**
- **Chlorhexidine**: **Mouthwash**

### 3. Xử Lý Nước
- Phenol là **chất ô nhiễm** → phải xử lý trong wastewater
- Chlorine denature phenol → **chlorophenol** (genau thơm hơn)

### 4. Dược Phẩm
- **Aspirin** (Acetylsalicylic acid): Từ **acetyl phenol**
- **Paracetamol**: N-acetyl-para-aminophenol

### 5. Sa Phòng và Mỹ Phẩm
- Sử dụng phenol derivatives làm **toner da**
- **Exfoliating** trong tẩy tế bào

## Độc Tính
- **LD₅₀** (chút chết): ~160 mg/kg (thử nghiệm chuột)
- **Độc** qua da, hít, và nuôi cấy
- **Gây bỏng hóa học** nếu tiếp xúc
`
      }
    ]
  }
};

export default function LearningPage() {
  const params = useParams();
  const router = useRouter();
  const chapterId = params.id as string;
  const content = learningContent[chapterId];

  const [completedSections, setCompletedSections] = useState<boolean[]>([]);
  const [showReward, setShowReward] = useState(false);
  const [reward, setReward] = useState<any | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (content) {
      setCompletedSections(new Array(content.sections.length).fill(false));
    }
  }, [content]);

  const handleSectionComplete = (index: number) => {
    const newCompleted = [...completedSections];
    newCompleted[index] = true;
    setCompletedSections(newCompleted);

    // Check if all sections are completed
    if (newCompleted.every(c => c)) {
      completeChapter();
    }
  };

  const completeChapter = () => {
    // Update progress
    updateProgress(chapterId, 100);

    // Add flower reward
    const result = addFlowerToList();
    if (result?.isNew) {
      setReward(result.flower);
      setShowReward(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  if (!content) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-cyan-400">Chương không tồn tại</h1>
          <Link href="/" className="text-purple-400 hover:text-purple-300 mt-4 block">
            Quay lại Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const allCompleted = completedSections.every(c => c);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      {showConfetti && <Confetti />}
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
            >
              <ArrowLeft size={20} />
              <span>Quay lại</span>
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center flex-1">
              {content.icon} {content.title}
            </h1>
            <Link href="/" className="text-slate-400 hover:text-slate-300 transition">
              <Home size={20} />
            </Link>
          </div>
        </header>

        {/* Reward Modal */}
        {showReward && reward && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="glass rounded-xl p-8 text-center max-w-md border border-cyan-500/20">
              <div className="text-6xl mb-4">{reward.emoji}</div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">Chúc mừng!</h2>
              <p className="text-purple-300 mb-2">{reward.name}</p>
              <p className="text-xs text-slate-400 mb-6">({reward.rarity})</p>
              <button
                onClick={() => setShowReward(false)}
                className="btn-gradient text-white px-6 py-2 rounded-lg"
              >
                Tiếp tục
              </button>
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-semibold text-slate-300">Tiến độ Chương</h2>
            <span className="text-sm text-cyan-300 font-mono">
              {completedSections.filter(c => c).length} / {completedSections.length}
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500"
              style={{ width: `${(completedSections.filter(c => c).length / completedSections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {content.sections.map((section, index) => (
            <section key={index} className="glass rounded-xl p-8 border border-cyan-500/20">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-cyan-300">{section.title}</h2>
                <button
                  onClick={() => handleSectionComplete(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    completedSections[index]
                      ? 'bg-green-600/20 text-green-300 border border-green-500/50'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <CheckCircle size={18} />
                  <span>{completedSections[index] ? 'Đã học' : 'Đánh dấu hoàn thành'}</span>
                </button>
              </div>

              {/* Content with Math */}
              <div className="prose prose-invert max-w-none">
                <MathContent content={section.content} />
              </div>
            </section>
          ))}
        </div>

        {/* Completion Button */}
        {allCompleted ? (
          <div className="mt-8 p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30 text-center">
            <div className="flex justify-center mb-3">
              <Award className="text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-green-300 mb-2">Chương hoàn thành!</h3>
            <p className="text-slate-300 mb-4">Bạn đã học toàn bộ nội dung và nhận được một bó hoa phần thưởng.</p>
            <div className="flex gap-3 justify-center">
              <Link href="/" className="btn-gradient text-white px-6 py-2 rounded-lg">
                ← Quay lại Dashboard
              </Link>
              <Link href="/test" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
                → Làm Bài Test
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
            <div className="flex justify-center mb-3">
              <Zap className="text-yellow-400" size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-300 mb-2">Bạn đã hoàn thành {completedSections.filter(c => c).length}/{completedSections.length} phần</h3>
            <p className="text-slate-400">Nhấn "Đánh dấu hoàn thành" ở mỗi phần để tiếp hành</p>
          </div>
        )}
      </div>
    </div>
  );
}
