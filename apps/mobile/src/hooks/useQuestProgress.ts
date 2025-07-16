import { useState, useEffect } from "react";

/**
 * Custom hook for managing quest progress state
 */
export const useQuestProgress = (initialProgress: {
  [key: string]: number;
}) => {
  const [questProgress, setQuestProgress] = useState(initialProgress);

  const updateProgress = (questId: string, progress: number) => {
    setQuestProgress((prev) => ({
      ...prev,
      [questId]: Math.min(Math.max(progress, 0), 100), // Clamp between 0-100
    }));
  };

  const incrementProgress = (questId: string, increment: number = 10) => {
    setQuestProgress((prev) => ({
      ...prev,
      [questId]: Math.min((prev[questId] || 0) + increment, 100),
    }));
  };

  const resetProgress = (questId: string) => {
    setQuestProgress((prev) => ({
      ...prev,
      [questId]: 0,
    }));
  };

  return {
    questProgress,
    updateProgress,
    incrementProgress,
    resetProgress,
  };
};
