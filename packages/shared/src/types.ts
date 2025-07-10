// Common types used across the Questigo platform
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  points: number;
  estimatedTime: number; // in minutes
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface QuestProgress {
  id: string;
  userId: string;
  questId: string;
  status: "not_started" | "in_progress" | "completed";
  progress: number; // 0-100
  startedAt?: Date;
  completedAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Common constants
export const QUEST_CATEGORIES = [
  "Adventure",
  "Learning",
  "Fitness",
  "Creative",
  "Social",
  "Professional",
] as const;

export const DIFFICULTY_LEVELS = ["easy", "medium", "hard"] as const;

export const QUEST_STATUS = [
  "not_started",
  "in_progress",
  "completed",
] as const;
