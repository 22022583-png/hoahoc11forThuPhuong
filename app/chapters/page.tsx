import Link from 'next/link';

const chapters = [
  { id: 'alkane', name: 'Hydrocarbon - Alkane', description: 'Cấu tạo, tính chất, phản ứng thế.' },
  { id: 'alkene', name: 'Hydrocarbon - Alkene', description: 'Cấu tạo, tính chất, phản ứng cộng.' },
  { id: 'alkyne', name: 'Hydrocarbon - Alkyne', description: 'Cấu tạo, tính chất, phản ứng.' },
  { id: 'arene', name: 'Hydrocarbon - Arene', description: 'Benzen và dẫn xuất.' },
  { id: 'halogen_derivatives', name: 'Dẫn xuất Halogen', description: 'Alkyl halogen, tính chất.' },
  { id: 'alcohol', name: 'Alcohol', description: 'Cấu tạo, tính chất, phản ứng.' },
  { id: 'phenol', name: 'Phenol', description: 'Tính chất đặc trưng.' },
  { id: 'aldehyde', name: 'Aldehyde', description: 'Tính chất oxi hóa.' },
  { id: 'ketone', name: 'Ketone', description: 'Tính chất.' },
  { id: 'carboxylic_acid', name: 'Carboxylic Acid', description: 'Tính axit, este hóa.' },
];

export default function Chapters() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Kho Tài Liệu Lý Thuyết</h1>
          <p className="text-lg text-gray-600">Hóa Học 11 Kỳ 2 - Chi Tiết & Chuyên Sâu</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{chapter.name}</h2>
              <p className="text-gray-600 mb-4">{chapter.description}</p>
              <Link
                href={`/chapters/${chapter.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Học Ngay
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-blue-500 hover:underline">Quay lại Dashboard</Link>
        </div>
      </div>
    </div>
  );
}