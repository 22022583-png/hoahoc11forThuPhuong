// Question types
export type QuestionType = 'multiple_choice' | 'true_false' | 'essay';

export interface Question {
  id: string;
  type: QuestionType;
  chapter: string;
  text: string;
  options?: string[]; // For multiple choice
  answer: number | string | boolean; // Index for MC, boolean for T/F, string for essay answer
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  keywords?: string[];
}

// PART I: Multiple Choice Questions (40 questions)
export const multipleChoiceQuestions: Question[] = [
  // HYDROCARBON - ALKANE
  {
    id: 'mc_001',
    type: 'multiple_choice',
    chapter: 'alkane',
    text: 'Công thức chung của alkane là:',
    options: ['$C_nH_{2n+2}$', '$C_nH_{2n}$', '$C_nH_{2n-2}$', '$C_nH_n$'],
    answer: 0,
    explanation: 'Alkane là hydrocarbon no, công thức chung là $C_nH_{2n+2}$ hoặc $C_nH_{2n}$ (cycloalkane)',
    difficulty: 'easy',
    keywords: ['alkane', 'công thức chung', 'hydrocarbon no']
  },
  {
    id: 'mc_002',
    type: 'multiple_choice',
    chapter: 'alkane',
    text: 'Trong các hợp chất sau, hợp chất nào là alkane?',
    options: ['Methanol', 'Ethane', 'Ethene', 'Ethyne'],
    answer: 1,
    explanation: 'Ethane ($C_2H_6$) là alkane với công thức $C_nH_{2n+2}$',
    difficulty: 'easy',
    keywords: ['alkane', 'ethane']
  },
  {
    id: 'mc_003',
    type: 'multiple_choice',
    chapter: 'alkane',
    text: 'Phản ứng thế của methane với chlorine được xúc tác bởi:',
    options: ['Ánh sáng hoặc nhiệt độ cao', 'Axit sulphuric', 'Xúc tác Ni', 'Dung môi nước'],
    answer: 0,
    explanation: '$CH_4 + Cl_2 \\xrightarrow{h\\nu \\ or \\ \\Delta} CH_3Cl + HCl$',
    difficulty: 'medium',
    keywords: ['phản ứng thế', 'alkane', 'chlorine']
  },
  {
    id: 'mc_004',
    type: 'multiple_choice',
    chapter: 'alkane',
    text: 'Ở điều kiện thường, alkane có bao nhiêu liên kết $\\sigma$?',
    options: ['1', '2', 'Nhiều hơn 2', 'Chỉ liên kết $\\pi$'],
    answer: 2,
    explanation: 'Alkane chứa các liên kết $\\sigma$ giữa C-C và C-H',
    difficulty: 'medium',
    keywords: ['alkane', 'liên kết sigma']
  },
  {
    id: 'mc_005',
    type: 'multiple_choice',
    chapter: 'alkane',
    text: 'Hợp chất nào có ít nhất 3 đẳng phân cấu trúc?',
    options: ['Propane', 'Butane', 'Pentane', 'Hexane'],
    answer: 2,
    explanation: 'Pentane ($C_5H_{12}$) có 3 đẳng phân cấu trúc: n-pentane, isopentane, neopentane',
    difficulty: 'hard',
    keywords: ['đẳng phân', 'cấu trúc', 'pentane']
  },
  // HYDROCARBON - ALKENE
  {
    id: 'mc_006',
    type: 'multiple_choice',
    chapter: 'alkene',
    text: 'Công thức chung của alkene là:',
    options: ['$C_nH_{2n+2}$', '$C_nH_{2n}$', '$C_nH_{2n-2}$', '$C_nH_n$'],
    answer: 1,
    explanation: 'Alkene là hydrocarbon không no, công thức chung là $C_nH_{2n}$',
    difficulty: 'easy',
    keywords: ['alkene', 'công thức chung']
  },
  {
    id: 'mc_007',
    type: 'multiple_choice',
    chapter: 'alkene',
    text: 'Alkene có đặc điểm nào sau đây?',
    options: ['Chứa liên kết đôi C=C', 'Dễ bị oxi hóa', 'Tham gia phản ứng cộng', 'Tất cả đều đúng'],
    answer: 3,
    explanation: 'Alkene có ba đặc điểm chính: liên kết đôi C=C, dễ bị oxi hóa, tham gia phản ứng cộng',
    difficulty: 'medium',
    keywords: ['alkene', 'đặc điểm']
  },
  {
    id: 'mc_008',
    type: 'multiple_choice',
    chapter: 'alkene',
    text: 'Phản ứng cộng nước vào ethene trong điều kiện nào?',
    options: ['$H_2SO_4$ loãng, nhiệt độ phòng', '$H_2SO_4$ đặc, 150-180°C', '$H_2SO_4$ loãng, 60-80°C', 'Yêu cầu xúc tác Ni'],
    answer: 2,
    explanation: '$CH_2=CH_2 + H_2O \\xrightarrow{H_2SO_4, 60-80°C} CH_3-CH_2OH$',
    difficulty: 'medium',
    keywords: ['phản ứng cộng', 'ethene', 'nước']
  },
  {
    id: 'mc_009',
    type: 'multiple_choice',
    chapter: 'alkene',
    text: 'Trong phản ứng cộng bromine vào alkene, sản phẩm là:',
    options: ['Alkene dẫn xuất', 'Dibromide', 'Aldehyde', 'Ketone'],
    answer: 1,
    explanation: '$CH_2=CH_2 + Br_2 \\rightarrow CH_2Br-CH_2Br$',
    difficulty: 'medium',
    keywords: ['phản ứng cộng', 'bromine', 'dibromide']
  },
  {
    id: 'mc_010',
    type: 'multiple_choice',
    chapter: 'alkene',
    text: 'Tính chất nào là tính chất đặc trưng của dầu mineeral chứa alkene?',
    options: ['Mất màu nước brom', 'Cháy tạo khí đen', 'Nặng hơn nước', 'Tất cả đều sai'],
    answer: 0,
    explanation: 'Alkene mất màu nước brom do phản ứng cộng qua liên kết C=C',
    difficulty: 'medium',
    keywords: ['alkene', 'nước brom', 'phản ứng cộng']
  },
  // HYDROCARBON - ALKYNE
  {
    id: 'mc_011',
    type: 'multiple_choice',
    chapter: 'alkyne',
    text: 'Công thức chung của alkyne là:',
    options: ['$C_nH_{2n+2}$', '$C_nH_{2n}$', '$C_nH_{2n-2}$', '$C_nH_n$'],
    answer: 2,
    explanation: 'Alkyne là hydrocarbon chứa liên kết ba C≡C, công thức chung là $C_nH_{2n-2}$',
    difficulty: 'easy',
    keywords: ['alkyne', 'công thức chung']
  },
  {
    id: 'mc_012',
    type: 'multiple_choice',
    chapter: 'alkyne',
    text: 'Acetylene ($C_2H_2$) có thể phản ứng với:',
    options: ['Bromine', 'Hydro trong điều kiện Ni', 'Nước trong điều kiện H+', 'Tất cả đều đúng'],
    answer: 3,
    explanation: 'Acetylene có liên kết ba rất hoạt động, có thể tham gia phản ứng cộng với Br$_2$, H$_2$, H$_2$O',
    difficulty: 'hard',
    keywords: ['alkyne', 'acetylene', 'phản ứng']
  },
  {
    id: 'mc_013',
    type: 'multiple_choice',
    chapter: 'alkyne',
    text: 'Trong phản ứng hydrogenation của acetylene, sản phẩm trung gian là:',
    options: ['Alkane', 'Alkene', 'Diene', 'Ketone'],
    answer: 1,
    explanation: 'Phản ứng từng bước: $C_2H_2 + H_2 \\rightarrow C_2H_4$ (alkene), sau đó $C_2H_4 + H_2 \\rightarrow C_2H_6$',
    difficulty: 'medium',
    keywords: ['alkyne', 'hydrogenation', 'alkene']
  },
  // ALCOHOL
  {
    id: 'mc_014',
    type: 'multiple_choice',
    chapter: 'alcohol',
    text: 'Alcohol là hợp chất có nhóm chức nào?',
    options: ['-CHO', '-COOH', '-OH', '-OCH3'],
    answer: 2,
    explanation: 'Alcohol chứa nhóm -OH gắn trực tiếp vào nguyên tử C',
    difficulty: 'easy',
    keywords: ['alcohol', 'nhóm chức']
  },
  {
    id: 'mc_015',
    type: 'multiple_choice',
    chapter: 'alcohol',
    text: 'Tên IUPAC của $C_2H_5OH$ là:',
    options: ['Methanol', 'Ethanol', 'Propanol', 'Methyl alcohol'],
    answer: 1,
    explanation: 'Chuỗi C có 2 nguyên tử, kết thúc là -ol: Ethanol',
    difficulty: 'easy',
    keywords: ['IUPAC', 'ethanol']
  },
  {
    id: 'mc_016',
    type: 'multiple_choice',
    chapter: 'alcohol',
    text: 'Phản ứng thế giữa ethanol và HCl cho sản phẩm:',
    options: ['$C_2H_5Cl$ và $H_2O$', '$C_2H_4$ và $HCl$', '$C_2H_6$ và $Cl_2$', '$C_2H_4Cl_2$'],
    answer: 0,
    explanation: '$C_2H_5OH + HCl \\rightarrow C_2H_5Cl + H_2O$ (điều kiện: $H_2SO_4$ đặc, nhiệt)',
    difficulty: 'medium',
    keywords: ['phản ứng thế', 'ethanol', 'HCl']
  },
  {
    id: 'mc_017',
    type: 'multiple_choice',
    chapter: 'alcohol',
    text: 'Khi tách kinh ethanol ($170°C$, $H_2SO_4$ đặc), sản phẩm chính là:',
    options: ['Ethane', 'Ethene', 'Ethyne', 'Diethyl ether'],
    answer: 1,
    explanation: '$C_2H_5OH \\xrightarrow{H_2SO_4, 170°C} C_2H_4 + H_2O$',
    difficulty: 'medium',
    keywords: ['tách kinh', 'ethanol', 'ethene']
  },
  {
    id: 'mc_018',
    type: 'multiple_choice',
    chapter: 'alcohol',
    text: 'Alcohol sơ cấp ($RCH_2OH$) bị oxi hóa thành:',
    options: ['Ketone', 'Aldehyde', 'Carboxylic acid', 'Alkene'],
    answer: 2,
    explanation: 'Oxi hóa mạnh alcohol sơ cấp: $RCH_2OH \\xrightarrow{[O]} R-CHO \\xrightarrow{[O]} R-COOH$',
    difficulty: 'medium',
    keywords: ['oxi hóa', 'alcohol sơ cấp']
  },
  {
    id: 'mc_019',
    type: 'multiple_choice',
    chapter: 'alcohol',
    text: 'Phản ứng của ethanol với kim loại Na:',
    options: ['Tạo $C_2H_6$', 'Tạo ethoxide và $H_2$', 'Tạo $NaOH$', 'Không phản ứng'],
    answer: 1,
    explanation: '$2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa + H_2 \\uparrow$',
    difficulty: 'hard',
    keywords: ['ethanol', 'kim loại Na', 'ethoxide']
  },
  // ALDEHYDE & KETONE
  {
    id: 'mc_020',
    type: 'multiple_choice',
    chapter: 'aldehyde',
    text: 'Công thức chung của aldehyde là:',
    options: ['$R-CO-R\'$', '$R-CHO$', '$R-COOH$', '$R-OH$'],
    answer: 1,
    explanation: 'Aldehyde có nhóm chức -CHO',
    difficulty: 'easy',
    keywords: ['aldehyde', 'công thức']
  },
  {
    id: 'mc_021',
    type: 'multiple_choice',
    chapter: 'aldehyde',
    text: 'Tên IUPAC của $CH_3CHO$ là:',
    options: ['Formaldehyde', 'Acetaldehyde', 'Propanal', 'Ethanal'],
    answer: 3,
    explanation: '2 nguyên tử C, nhóm -CHO: Ethanal',
    difficulty: 'easy',
    keywords: ['IUPAC', 'ethanal']
  },
  {
    id: 'mc_022',
    type: 'multiple_choice',
    chapter: 'aldehyde',
    text: 'Aldehyde bị oxi hóa thành:',
    options: ['Ketone', 'Alcohol', 'Carboxylic acid', 'Alkene'],
    answer: 2,
    explanation: '$R-CHO \\xrightarrow{[O]} R-COOH$',
    difficulty: 'medium',
    keywords: ['oxi hóa', 'aldehyde', 'carboxylic acid']
  },
  {
    id: 'mc_023',
    type: 'multiple_choice',
    chapter: 'aldehyde',
    text: 'Phản ứng của aldehyde với dung dịch Fehling là:',
    options: ['Tạo kết tủa trắng', 'Tạo kết tủa đỏ gạch', 'Không phản ứng', 'Tạo khí xanh'],
    answer: 1,
    explanation: 'Aldehyde tạo kết tủa đỏ gạch với dung dịch Fehling (phản ứng đặc trưng)',
    difficulty: 'medium',
    keywords: ['aldehyde', 'Fehling', 'kết tủa đỏ']
  },
  {
    id: 'mc_024',
    type: 'multiple_choice',
    chapter: 'ketone',
    text: 'Công thức chung của ketone là:',
    options: ['$R-CHO$', '$R-CO-R\'$', '$R-COOH$', '$R-OH$'],
    answer: 1,
    explanation: 'Ketone có nhóm chức $> C=O$ giữa hai chuỗi carbon',
    difficulty: 'easy',
    keywords: ['ketone', 'công thức']
  },
  {
    id: 'mc_025',
    type: 'multiple_choice',
    chapter: 'ketone',
    text: 'Ketone KHÔNG cho phản ứng nào sau đây?',
    options: ['Oxi hóa thành carboxylic acid', 'Khử thành alcohol thứ hai', 'Phản ứng Aldol', 'Tạo kết tủa với Fehling'],
    answer: 3,
    explanation: 'Ketone không cho phản ứng với dung dịch Fehling (chỉ aldehyde)',
    difficulty: 'hard',
    keywords: ['ketone', 'Fehling', 'đặc điểm']
  },
  // CARBOXYLIC ACID
  {
    id: 'mc_026',
    type: 'multiple_choice',
    chapter: 'acid',
    text: 'Công thức chung của carboxylic acid là:',
    options: ['$R-CHO$', '$R-COOH$', '$R-CO-R\'$', '$R-OH$'],
    answer: 1,
    explanation: 'Carboxylic acid có nhóm chức -COOH',
    difficulty: 'easy',
    keywords: ['carboxylic acid', 'công thức']
  },
  {
    id: 'mc_027',
    type: 'multiple_choice',
    chapter: 'acid',
    text: 'Tính chất nào là đặc trưng của carboxylic acid?',
    options: ['Không tan trong nước', 'Có mùi hơi nồng', 'Có pH < 7', 'Tất cả đều đúng'],
    answer: 3,
    explanation: 'Carboxylic acid tan trong nước, có mùi, axit yếu pH < 7',
    difficulty: 'medium',
    keywords: ['carboxylic acid', 'tính chất']
  },
  {
    id: 'mc_028',
    type: 'multiple_choice',
    chapter: 'acid',
    text: 'Formic acid ($HCOOH$) tên IUPAC là:',
    options: ['Methanoic acid', 'Ethanoic acid', 'Acetic acid', 'Propanoic acid'],
    answer: 0,
    explanation: '1 nguyên tử C: Methanoic acid',
    difficulty: 'easy',
    keywords: ['IUPAC', 'methanoic acid', 'formic acid']
  },
  {
    id: 'mc_029',
    type: 'multiple_choice',
    chapter: 'acid',
    text: 'Acetic acid phản ứng với ethanol tạo:',
    options: ['Ester', 'Aldehyde', 'Alkene', 'Ketone'],
    answer: 0,
    explanation: '$CH_3COOH + C_2H_5OH \\rightleftharpoons CH_3COOC_2H_5 + H_2O$',
    difficulty: 'medium',
    keywords: ['esterification', 'acetic acid', 'ethanol']
  },
  {
    id: 'mc_030',
    type: 'multiple_choice',
    chapter: 'acid',
    text: 'Phân biệt methanoic acid và ethanoic acid qua phản ứng:',
    options: ['Với dung dịch Na', 'Với dung dịch Fehling', 'Với kim loại Mg', 'Với dung dịch NaOH'],
    answer: 1,
    explanation: 'Methanoic acid (có nhóm -CHO) cho kết tủa đỏ với Fehling, ethanoic acid không',
    difficulty: 'hard',
    keywords: ['phân biệt', 'methanoic acid', 'Fehling']
  },
  // ARENE (Benzene)
  {
    id: 'mc_031',
    type: 'multiple_choice',
    chapter: 'arene',
    text: 'Benzene có cấu trúc:',
    options: ['Mở dây', 'Vòng lục giác với electron delocalized', 'Vòng lục giác bình thường', 'Tuyến tính'],
    answer: 1,
    explanation: 'Benzene có 6 nguyên tử C và H xếp thành vòng lục giác với hệ electron delocalized',
    difficulty: 'medium',
    keywords: ['benzene', 'cấu trúc', 'aromatic']
  },
  {
    id: 'mc_032',
    type: 'multiple_choice',
    chapter: 'arene',
    text: 'Benzene KHÔNG tham gia phản ứng nào?',
    options: ['Thế', 'Cộng', 'Oxi hóa', 'Tất cả đều tham gia'],
    answer: 1,
    explanation: 'Benzene ít tham gia phản ứng cộng do ổn định của hệ aromatic',
    difficulty: 'hard',
    keywords: ['benzene', 'phản ứng', 'aromatic']
  },
  {
    id: 'mc_033',
    type: 'multiple_choice',
    chapter: 'arene',
    text: 'Phản ứng thế nitration của benzene:',
    options: ['$C_6H_6 + HNO_3 \\rightarrow C_6H_4(NO_2)_2 + H_2O$', '$C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4} C_6H_5NO_2 + H_2O$', '$C_6H_6 + H_2NO_3 \\rightarrow C_6H_5NO + H_2O$', '$C_6H_6 + HNO_3 \\rightarrow C_6H_6NO_3$'],
    answer: 1,
    explanation: 'Nitration cần xúc tác axit: $C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4, 50-60°C} C_6H_5NO_2 + H_2O$',
    difficulty: 'medium',
    keywords: ['benzene', 'nitration', 'thế']
  },
  {
    id: 'mc_034',
    type: 'multiple_choice',
    chapter: 'arene',
    text: 'Toluene ($C_6H_5CH_3$) bị oxi hóa mạnh:',
    options: ['Benzene', 'Benzyl alcohol', 'Benzaldehyde', 'Benzoic acid'],
    answer: 3,
    explanation: 'Oxi hóa mạnh toluene: $C_6H_5CH_3 \\xrightarrow{[O]} C_6H_5COOH$',
    difficulty: 'hard',
    keywords: ['toluene', 'oxi hóa', 'benzoic acid']
  },
  // HALOGEN DERIVATIVES
  {
    id: 'mc_035',
    type: 'multiple_choice',
    chapter: 'halogen',
    text: 'Dẫn xuất halogen sơ cấp ($RCH_2X$) phản ứng loại với KOH:',
    options: ['Tạo alcohol', 'Tạo aldehyde', 'Tạo alkene', 'Tạo ketone'],
    answer: 2,
    explanation: '$RCH_2X + KOH \\xrightarrow{\\Delta} R-CH=CH_2 + KX + H_2O$ (phản ứng loại)',
    difficulty: 'medium',
    keywords: ['halogen derivative', 'phản ứng loại', 'alkene']
  },
  {
    id: 'mc_036',
    type: 'multiple_choice',
    chapter: 'halogen',
    text: 'Dẫn xuất halogen sơ cấp phản ứng thế với NaOH:',
    options: ['Tạo organic halide', 'Tạo alkene', 'Tạo alcohol', 'Tạo aldehyde'],
    answer: 2,
    explanation: '$R-CH_2Cl + NaOH \\xrightarrow{water} R-CH_2OH + NaCl$ (phản ứng thế)',
    difficulty: 'medium',
    keywords: ['halogen derivative', 'phản ứng thế', 'alcohol']
  },
  {
    id: 'mc_037',
    type: 'multiple_choice',
    chapter: 'halogen',
    text: 'Chlorobenzene ($C_6H_5Cl$) khơi hoạt động hơn ethyl chloride vì:',
    options: ['Phenyl group ổn định', 'Liên kết C-Cl mạnh hơn', 'Là halogen arene', 'Tất cả đều sai'],
    answer: 2,
    explanation: 'Chlorobenzene là halogen arene, C-Cl liên kết với carbon aromatic ít hoạt động',
    difficulty: 'hard',
    keywords: ['chlorobenzene', 'reactivity', 'halogen arene']
  },
  // ESTER & FATS
  {
    id: 'mc_038',
    type: 'multiple_choice',
    chapter: 'ester',
    text: 'Esterification là phản ứng giữa:',
    options: ['Alcohol và aldehyde', 'Alcohol và carboxylic acid', 'Alcohol và ketone', 'Alcohol và halide'],
    answer: 1,
    explanation: '$R-COOH + R\'OH \\rightleftharpoons R-COO-R\' + H_2O$ (xúc tác $H^+$)',
    difficulty: 'easy',
    keywords: ['esterification', 'ester']
  },
  {
    id: 'mc_039',
    type: 'multiple_choice',
    chapter: 'ester',
    text: 'Phản ứng xà phòng hóa (saponification) tạo ra:',
    options: ['Acid', 'Ester', 'Glycerol và muối', 'Aldehyde'],
    answer: 2,
    explanation: 'Ester + NaOH → Glycerol + Sodium salt (xà phòng)',
    difficulty: 'medium',
    keywords: ['saponification', 'ester', 'glycerol']
  },
  {
    id: 'mc_040',
    type: 'multiple_choice',
    chapter: 'ester',
    text: 'Mỹ phẩm và dược phẩm thường chứa ester vì:',
    options: ['Giá rẻ', 'Có mùi thơm', 'Dễ sản xuất', 'Tất cả đều đúng'],
    answer: 3,
    explanation: 'Ester giá rẻ, có mùi thơm, dễ tạo từ alcohol và acid',
    difficulty: 'easy',
    keywords: ['ester', 'ứng dụng']
  }
];

// PART II: True/False Questions with sub-items (4 questions, each with 4 sub-items)
export const trueFalseQuestions: Question[] = [
  {
    id: 'tf_001',
    type: 'true_false',
    chapter: 'mixed',
    text: `
Marking whether the following statements about hydrocarbons are TRUE or FALSE:
a) Alkane có thể mất màu nước brom
b) Alkene chứa ít nhất một liên kết đôi C=C
c) Alkyne có công thức $C_nH_{2n-2}$
d) Benzene dễ tham gia phản ứng cộng
    `,
    options: ['FALSE', 'TRUE', 'TRUE', 'FALSE'],
    answer: 'a-FALSE, b-TRUE, c-TRUE, d-FALSE',
    explanation: 'a) Alkane ko mất màu Br → FALSE; b) Alkene có C=C → TRUE; c) Alkyne công thức đúng → TRUE; d) Benzene ít tham gia cộng → FALSE',
    difficulty: 'medium',
    keywords: ['hydrocarbons', 'true/false']
  },
  {
    id: 'tf_002',
    type: 'true_false',
    chapter: 'mixed',
    text: `
Mark TRUE/FALSE for these alcohol statements:
a) Alcohol sơ cấp có thể bị oxi hóa thành carboxylic acid
b) Ethanol phản ứng thế với HCl cần xúc tác H₂SO₄
c) Tách kinh ethanol ở 100°C tạo ethene
d) Phản ứng của alcohol với Na tạo hydrogen gas
    `,
    options: ['TRUE', 'TRUE', 'FALSE', 'TRUE'],
    answer: 'a-TRUE, b-TRUE, c-FALSE, d-TRUE',
    explanation: 'a) Alcohol sơ cấp oxi hóa → CHO → COOH → TRUE; b) Cần H₂SO₄ đặc → TRUE; c) Cần 170°C không phải 100°C → FALSE; d) 2R-OH + 2Na → 2R-ONa + H₂ → TRUE',
    difficulty: 'medium',
    keywords: ['alcohol', 'true/false']
  },
  {
    id: 'tf_003',
    type: 'true_false',
    chapter: 'mixed',
    text: `
Determine TRUE/FALSE for these functional group statements:
a) Aldehyde cho đỏ gạch với dung dịch Fehling
b) Ketone có thể oxi hóa thành carboxylic acid
c) Carboxylic acid phản ứng với alcohol tạo ester
d) Methanoic acid có thể cho kết tủa đỏ với Fehling
    `,
    options: ['TRUE', 'FALSE', 'TRUE', 'TRUE'],
    answer: 'a-TRUE, b-FALSE, c-TRUE, d-TRUE',
    explanation: 'a) CHO + Fehling → đó gạch → TRUE; b) Ketone khó oxi hóa → FALSE; c) COOH + ROH → ester → TRUE; d) HCOOH có -CHO → đỏ gạch → TRUE',
    difficulty: 'hard',
    keywords: ['aldehyde', 'ketone', 'acid', 'true/false']
  },
  {
    id: 'tf_004',
    type: 'true_false',
    chapter: 'mixed',
    text: `
Mark TRUE/FALSE for aromatic and synthetic questions:
a) Benzene tham gia phản ứng cộng dễ dàng
b) Nitration benzene cần xúc tác H₂SO₄
c) Toluene bị oxi hóa mạnh tạo benzoic acid
d) Halogen arene ít hoạt động hơn halogen alkyl
    `,
    options: ['FALSE', 'TRUE', 'TRUE', 'TRUE'],
    answer: 'a-FALSE, b-TRUE, c-TRUE, d-TRUE',
    explanation: 'a) Benzene aromatic ổn định → FALSE; b) Nitration cần xúc tác → TRUE; c) CH₃ trên benzene oxi hóa → COOH → TRUE; d) Halogen arene ít hoạt động → TRUE',
    difficulty: 'hard',
    keywords: ['benzene', 'aromatic', 'true/false']
  }
];

// PART III: Essay Questions (4 questions)
export const essayQuestions: Question[] = [
  {
    id: 'essay_001',
    type: 'essay',
    chapter: 'alkane',
    text: 'Viết phương trình phản ứng thế từng bước giữa methane ($CH_4$) với chlorine. Giải thích điều kiện và tính chất của từng sản phẩm.',
    answer: `
$CH_4 + Cl_2 \\xrightarrow{hv \\ or \\ \\Delta} CH_3Cl + HCl$ (chloromethane)
$CH_3Cl + Cl_2 \\xrightarrow{hv} CH_2Cl_2 + HCl$ (dichloromethane)
$CH_2Cl_2 + Cl_2 \\xrightarrow{hv} CHCl_3 + HCl$ (chloroform)
$CHCl_3 + Cl_2 \\xrightarrow{hv} CCl_4 + HCl$ (carbon tetrachloride)

Điều kiện: Ánh sáng hoặc nhiệt độ cao
Sản phẩm: Từ chất lỏng đến rắn, độc tính tăng
    `,
    explanation: 'Phản ứng thế tự do theo cơ chế radical, từng bước thay thế H bằng Cl',
    difficulty: 'hard',
    keywords: ['alkane', 'substitution', 'radical']
  },
  {
    id: 'essay_002',
    type: 'essay',
    chapter: 'alcohol',
    text: 'So sánh hai phản ứng của ethanol: (1) tách kinh và (2) phản ứng thế với HCl. Trình bày phương trình, điều kiện, sản phẩm.',
    answer: `
1) Tách kinh:
$C_2H_5OH \\xrightarrow{H_2SO_4 \\ đặc, 170°C} C_2H_4 + H_2O$
Sản phẩm: Ethene (khí)

2) Phản ứng thế:
$C_2H_5OH + HCl \\xrightarrow{H_2SO_4 \\ đặc} C_2H_5Cl + H_2O$
Sản phẩm: Chloroethane (chất lỏng)

Khác biệt:
- Tách kinh: Loại OH, tạo liên kết đôi
- Thế: Thay OH bằng Cl, giữ chuỗi carbon
- Nhiệt độ tách kinh cao hơn
- Sản phẩm tách kinh là unsaturated, thế là saturated
    `,
    explanation: 'Hai phản ứng competed, tách kinh yêu cầu nhiệt độ cao hơn',
    difficulty: 'hard',
    keywords: ['alcohol', 'elimination', 'substitution']
  },
  {
    id: 'essay_003',
    type: 'essay',
    chapter: 'acid',
    text: 'Viết phương trình phản ứng esterification và saponification của methyl acetate. Giải thích ứng dụng trong công nghiệp.',
    answer: `
1) Esterification (tạo ester):
$CH_3COOH + CH_3OH \\rightleftharpoons CH_3COOCH_3 + H2O$
Xúc tác: Axit sulphuric đặc
Điều kiện: Nung nóng

2) Saponification (xà phòng hóa):
$CH_3COOCH_3 + NaOH \\rightarrow CH_3COONa + CH_3OH$
Sản phẩm: Sodium acetate + methanol

Ứng dụng:
- Ester là chất mùi thơm dùng trong mỹ phẩm
- Saponification tạo muối dùng làm xà phòng
- Chế biến dầu mỡ trong công nghiệp lương thực
    `,
    explanation: 'Esterification và saponification là phản ứng ngược nhau',
    difficulty: 'hard',
    keywords: ['ester', 'esterification', 'saponification']
  },
  {
    id: 'essay_004',
    type: 'essay',
    chapter: 'mixed',
    text: 'Trình bày chuỗi phản ứng: Ethene → Ethanol → Aldehyde → Carboxylic acid. Viết phương trình, điều kiện, tên sản phẩm.',
    answer: `
1) Ethene → Ethanol (phản ứng cộng):
$C_2H_4 + H_2O \\xrightarrow{H_2SO_4, 60-80°C} C_2H_5OH$

2) Ethanol → Aldehyde (oxi hóa nhẹ):
$C_2H_5OH \\xrightarrow{[O] \\ oxy}} CH_3CHO + H_2O$
Dùng: K₂Cr₂O₇, $H_2SO_4$ hoặc $KMnO_4$

3) Aldehyde → Carboxylic acid (oxi hóa mạnh):
$CH_3CHO \\xrightarrow{[O]} CH_3COOH$
Dùng: Excess $KMnO_4$

Tên: Ethene → Ethanol → Ethanal → Ethanoic acid

Tính chất:
- Ethene: Mất màu Br₂
- Ethanol: Phúc tạp
- Ethanal: Đỏ gạch với Fehling
- Ethanoic acid: Axit, phản ứng với Na, base, alcohol
    `,
    explanation: 'Chuỗi phản ứng từ hydrocarbon đến carboxylic acid',
    difficulty: 'hard',
    keywords: ['alkene', 'oxidation', 'synthesis']
  }
];

export const allQuestions: Question[] = [
  ...multipleChoiceQuestions,
  ...trueFalseQuestions,
  ...essayQuestions
];

// Flower types for rewards (50 types)
export const flowerTypes = [
  { name: 'Rose', emoji: '🌹', rarity: 'common' },
  { name: 'Tulip', emoji: '🌷', rarity: 'common' },
  { name: 'Sunflower', emoji: '🌻', rarity: 'common' },
  { name: 'Blossom', emoji: '🌸', rarity: 'common' },
  { name: 'Cherry Blossom', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Hibiscus', emoji: '🌺', rarity: 'uncommon' },
  { name: 'Lotus', emoji: '🪷', rarity: 'rare' },
  { name: 'Sakura', emoji: '🌸', rarity: 'rare' },
  { name: 'Daisy', emoji: '🌼', rarity: 'common' },
  { name: 'Lavender', emoji: '💜', rarity: 'uncommon' },
  { name: 'Orchid', emoji: '🪴', rarity: 'rare' },
  { name: 'Peony', emoji: '🌹', rarity: 'uncommon' },
  { name: 'Iris', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Lily', emoji: '🌼', rarity: 'rare' },
  { name: 'Magnolia', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Carnation', emoji: '🌷', rarity: 'common' },
  { name: 'Bluebell', emoji: '💙', rarity: 'uncommon' },
  { name: 'Daffodil', emoji: '🌼', rarity: 'common' },
  { name: 'Primrose', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Poppy', emoji: '🔴', rarity: 'uncommon' },
  { name: 'Marigold', emoji: '🌼', rarity: 'common' },
  { name: 'Zinnia', emoji: '🌸', rarity: 'common' },
  { name: 'Cosmos', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Chrysanth', emoji: '🌼', rarity: 'uncommon' },
  { name: 'Hydrangea', emoji: '💙', rarity: 'rare' },
  { name: 'Camellia', emoji: '🌸', rarity: 'rare' },
  { name: 'Azalea', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Rhododendron', emoji: '🌸', rarity: 'rare' },
  { name: 'Jasmine', emoji: '🌼', rarity: 'uncommon' },
  { name: 'Honeysuckle', emoji: '🌼', rarity: 'uncommon' },
  { name: 'Wisteria', emoji: '💜', rarity: 'rare' },
  { name: 'Clematis', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Begonia', emoji: '🌸', rarity: 'common' },
  { name: 'Fuchsia', emoji: '💜', rarity: 'uncommon' },
  { name: 'Geranium', emoji: '🌸', rarity: 'common' },
  { name: 'Dahlia', emoji: '🌼', rarity: 'uncommon' },
  { name: 'Gladiolus', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Heather', emoji: '💜', rarity: 'uncommon' },
  { name: 'Freesia', emoji: '🌼', rarity: 'uncommon' },
  { name: 'Snapdragon', emoji: '🌸', rarity: 'uncommon' },
  { name: 'Black Rose', emoji: '🖤', rarity: 'legendary' },
  { name: 'Golden Rose', emoji: '✨', rarity: 'legendary' },
  { name: 'Blue Lotus', emoji: '🪷', rarity: 'legendary' },
  { name: 'Fire Lily', emoji: '🔥', rarity: 'legendary' },
  { name: 'Moonflower', emoji: '🌙', rarity: 'legendary' },
  { name: 'Starflower', emoji: '⭐', rarity: 'legendary' },
  { name: 'Rainbow Tulip', emoji: '🌈', rarity: 'legendary' },
  { name: 'Diamond Rose', emoji: '💎', rarity: 'legendary' },
  { name: 'Phoenix Flower', emoji: '🔥', rarity: 'mythic' },
  { name: 'Dragon Orchid', emoji: '🐉', rarity: 'mythic' }
];

export interface TestStructure {
  part: 'I' | 'II' | 'III';
  name: string;
  count: number;
  pointPerQuestion: number;
  totalPoints: number;
}

export const testStructure: TestStructure[] = [
  { part: 'I', name: 'Multiple Choice', count: 40, pointPerQuestion: 0.25, totalPoints: 10 },
  { part: 'II', name: 'True/False', count: 4, pointPerQuestion: 1, totalPoints: 4 },
  { part: 'III', name: 'Essay', count: 4, pointPerQuestion: 1.5, totalPoints: 6 }
];
