// Hydrocarbon Bank - 300 Questions (200 MC + 50 T/F items + 50 Essay)

export const hydrocarbonBank = {
  part1: [ // 200+ Multiple Choice
    { id: "HC_P1_001", q: "Chất nào sau đây là hydrocarbon no?", options: ["$C_2H_2$", "$C_2H_4$", "$CH_4$", "$C_6H_6$"], ans: 2 },
    { id: "HC_P1_002", q: "Công thức tổng quát của alkene là:", options: ["$C_nH_{2n+2}$", "$C_nH_{2n}$", "$C_nH_{2n-2}$", "$C_nH_{2n-6}$"], ans: 1 },
    { id: "HC_P1_003", q: "Tên IUPAC của $CH_3-CH(CH_3)-CH_2-CH_3$ là:", options: ["2-methylbutane", "Pentane", "Isopentane", "2-methylpropane"], ans: 0 },
    { id: "HC_P1_004", q: "Phản ứng đặc trưng của benzene là:", options: ["Phản ứng cộng", "Phản ứng thế", "Phản ứng trùng hợp", "Phản ứng cháy"], ans: 1 },
    { id: "HC_P1_005", q: "Sản phẩm chính khi cho propene tác dụng với HCl là:", options: ["1-chloropropane", "2-chloropropane", "1,2-dichloropropane", "cyclopropane"], ans: 1 },
    { id: "HC_P1_006", q: "Chất nào sau đây có đồng phân hình học?", options: ["Ethylene", "Propene", "But-1-ene", "But-2-ene"], ans: 3 },
    { id: "HC_P1_007", q: "Để phân biệt methane và ethylene, người ta dùng dung dịch nào?", options: ["NaCl", "Bromine", "NaOH", "HCl"], ans: 1 },
    { id: "HC_P1_008", q: "Số liên kết pi trong phân tử acetylene là:", options: ["1", "2", "3", "0"], ans: 1 },
    { id: "HC_P1_009", q: "Các nguyên tử carbon ở trạng thái lai hóa nào trong ethylene?", options: ["sp", "sp2", "sp3", "sp3d"], ans: 1 },
    { id: "HC_P1_010", q: "Số liên kết sigma và pi trong vinylacetylene là:", options: ["7 và 3", "6 và 3", "8 và 2", "5 và 4"], ans: 0 }
  ],
  part2: [ // 50 True/False with item groups
    {
      id: "HC_DS_01",
      q: "Về alkane:",
      items: [
        { text: "Chỉ chứa liên kết đơn C-C và C-H.", correct: true },
        { text: "Các nguyên tử carbon ở trạng thái sp2.", correct: false },
        { text: "Góc liên kết CCC xấp xỉ 109.5 độ.", correct: true },
        { text: "Có cấu hình phẳng.", correct: false }
      ]
    },
    {
      id: "HC_DS_02",
      q: "Về alkene:",
      items: [
        { text: "Làm mất màu bromine.", correct: true },
        { text: "Tham gia phản ứng thế.", correct: false },
        { text: "Trùng hợp tạo PE.", correct: true },
        { text: "Có liên kết đôi.", correct: true }
      ]
    }
  ],
  part3: [ // 50 Essay
    { id: "HC_TL_01", q: "Công thức phân tử của alkane có 12 H là:", ans: "C5H12" },
    { id: "HC_TL_02", q: "Tên IUPAC của $CH_3-CH(CH_3)-CH_3$:", ans: "2-methylpropane" },
    { id: "HC_TL_03", q: "CTPT của alkene có KH hơi = 21 so với H2 là:", ans: "C3H6" },
    { id: "HC_TL_04", q: "Khi CH4 tác dụng với Cl2 (1:2), sản phẩm là:", ans: "CH2Cl2" },
    { id: "HC_TL_05", q: "Công thức cấu tạo of but-2-yne:", ans: "CH3-C≡C-CH3" }
  ]
};
