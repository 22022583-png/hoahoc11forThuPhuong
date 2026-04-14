import { flowerTypes } from './constants/questions';

/**
 * Cập nhật tiến độ học tập của người dùng cho một chương
 */
export function updateProgress(chapterId: string, percentage: number): void {
  try {
    const savedProgress = localStorage.getItem('chemistry_progress');
    const progress = savedProgress ? JSON.parse(savedProgress) : {};
    
    // Lấy giá trị cao hơn (không giảm tiến độ)
    progress[chapterId] = Math.max(progress[chapterId] || 0, Math.min(percentage, 100));
    
    localStorage.setItem('chemistry_progress', JSON.stringify(progress));
  } catch (error) {
    console.error('Error updating progress:', error);
  }
}

/**
 * Thêm một bó hoa vào danh sách hoa đạt được
 * Thường gọi khi user hoàn thành một bài tập với điểm >= 8
 */
export function addFlowerToList(): { flower: any; isNew: boolean } | null {
  try {
    const savedFlowers = JSON.parse(localStorage.getItem('chemistry_flowers') || '[]');
    
    // Tìm những hoa chưa có
    const achievedFlowers = flowerTypes.filter(
      f => !savedFlowers.some((sf: any) => sf.name === f.name)
    );
    
    if (achievedFlowers.length === 0) {
      // Tất cả hoa đã được nhận
      return { flower: null, isNew: false };
    }
    
    // Chọn ngẫu nhiên một hoa từ những hoa chưa có
    const randomFlower = achievedFlowers[Math.floor(Math.random() * achievedFlowers.length)];
    
    // Thêm vào danh sách
    const newFlowers = [...savedFlowers, randomFlower];
    localStorage.setItem('chemistry_flowers', JSON.stringify(newFlowers));
    
    return { flower: randomFlower, isNew: true };
  } catch (error) {
    console.error('Error adding flower:', error);
    return null;
  }
}

/**
 * Lấy danh sách hoa đã nhận
 */
export function getCollectedFlowers(): any[] {
  try {
    return JSON.parse(localStorage.getItem('chemistry_flowers') || '[]');
  } catch (error) {
    console.error('Error getting flowers:', error);
    return [];
  }
}

/**
 * Lấy tiến độ của một chương
 */
export function getChapterProgress(chapterId: string): number {
  try {
    const progress = JSON.parse(localStorage.getItem('chemistry_progress') || '{}');
    return progress[chapterId] || 0;
  } catch (error) {
    console.error('Error getting progress:', error);
    return 0;
  }
}

/**
 * Lấy tất cả tiến độ
 */
export function getAllProgress(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem('chemistry_progress') || '{}');
  } catch (error) {
    console.error('Error getting all progress:', error);
    return {};
  }
}

/**
 * Hoàn toàn xóa tất cả dữ liệu (debug)
 */
export function clearAllData(): void {
  localStorage.removeItem('chemistry_progress');
  localStorage.removeItem('chemistry_flowers');
}
