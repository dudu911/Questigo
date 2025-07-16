import { Quest, generateId } from "@questigo/shared";

export const sampleQuests: Quest[] = [
  {
    id: generateId(),
    title: "Learn React Native",
    description: "Master React Native development for iOS and Android apps.",
    category: "Learning",
    difficulty: "medium",
    points: 200,
    estimatedTime: 180,
    createdBy: "system",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: generateId(),
    title: "Evening Workout",
    description: "Complete a 30-minute full-body workout routine.",
    category: "Fitness",
    difficulty: "easy",
    points: 80,
    estimatedTime: 30,
    createdBy: "system",
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
  },
];

export const initialQuestProgress: { [key: string]: number } = {
  [sampleQuests[0].id]: 60,
  [sampleQuests[1].id]: 100,
};
