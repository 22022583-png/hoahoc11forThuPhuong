import Link from 'next/link';

const tests = [
  { id: 'specialized_alkane', title: 'Đề ôn tập chuyên đề Alkane', type: 'specialized' },
  { id: 'comprehensive', title: 'Đề ôn tập tổng hợp Kỳ 2', type: 'comprehensive' },
];

export default function TestSelection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Chọn Đề Thi</h1>
          <p className="text-lg text-gray-600">Luyện tập và kiểm tra kiến thức</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((test) => (
            <div key={test.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">{test.title}</h2>
              <p className="text-gray-600 mb-4">
                {test.type === 'specialized' ? '48 câu chuyên đề' : '48 câu tổng hợp'}
              </p>
              <Link
                href={`/test/${test.id}`}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition block text-center"
              >
                Bắt Đầu Làm Bài
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