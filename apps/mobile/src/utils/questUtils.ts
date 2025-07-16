// App-specific utility functions

/**
 * Calculate the percentage progress for a quest
 */
export const calculateQuestProgress = (
  currentValue: number,
  totalValue: number
): number => {
  if (totalValue === 0) return 0;
  return Math.min(Math.round((currentValue / totalValue) * 100), 100);
};

/**
 * Format quest difficulty with proper styling
 */
export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "#34C759"; // Green
    case "medium":
      return "#FF9500"; // Orange
    case "hard":
      return "#FF3B30"; // Red
    default:
      return "#8E8E93"; // Gray
  }
};

/**
 * Get category color for quest categories
 */
export const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case "learning":
      return "#007AFF"; // Blue
    case "fitness":
      return "#FF2D92"; // Pink
    case "work":
      return "#5856D6"; // Purple
    case "personal":
      return "#32ADE6"; // Light Blue
    default:
      return "#8E8E93"; // Gray
  }
};
