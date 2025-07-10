"use client";

import { useState } from "react";
import { Quest, generateId, formatDate } from "@questigo/shared";
import { QuestCard } from "@questigo/ui";

// Sample quest data
const sampleQuests: Quest[] = [
  {
    id: generateId(),
    title: "Learn React Hooks",
    description:
      "Master the fundamentals of React hooks including useState, useEffect, and custom hooks.",
    category: "Learning",
    difficulty: "medium",
    points: 150,
    estimatedTime: 120,
    createdBy: "system",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: generateId(),
    title: "Morning Run",
    description:
      "Start your day with a 5km run in the park. Build consistency and improve your fitness.",
    category: "Fitness",
    difficulty: "easy",
    points: 100,
    estimatedTime: 45,
    createdBy: "system",
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
  },
  {
    id: generateId(),
    title: "Build a Mobile App",
    description:
      "Create a complete mobile application using React Native from scratch.",
    category: "Professional",
    difficulty: "hard",
    points: 500,
    estimatedTime: 480,
    createdBy: "system",
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
  },
];

export default function Home() {
  const [questProgress, setQuestProgress] = useState<{ [key: string]: number }>(
    {
      [sampleQuests[0].id]: 75,
      [sampleQuests[1].id]: 0,
      [sampleQuests[2].id]: 25,
    }
  );

  const handleStartQuest = (questId: string) => {
    setQuestProgress((prev) => ({
      ...prev,
      [questId]: 10,
    }));
  };

  const handleViewQuest = (questId: string) => {
    console.log("Viewing quest:", questId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Questigo
          </h1>
          <p className="text-xl text-gray-600">
            Your journey to personal growth starts here
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Project Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900">Cross-Platform</h3>
              <p className="text-sm text-blue-700">Web & Mobile Apps</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900">
                Shared Components
              </h3>
              <p className="text-sm text-green-700">Reusable UI Library</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900">TypeScript</h3>
              <p className="text-sm text-purple-700">Type-Safe Development</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Sample Quests
          </h2>
          <p className="text-gray-600 mb-6">
            These quest cards demonstrate the shared UI components working
            across web and mobile platforms:
          </p>

          <div className="space-y-4">
            {sampleQuests.map((quest) => (
              <QuestCard
                key={quest.id}
                quest={quest}
                progress={questProgress[quest.id] || 0}
                onStartQuest={() => handleStartQuest(quest.id)}
                onViewQuest={() => handleViewQuest(quest.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Built with Next.js, React Native, and TypeScript •{" "}
            {formatDate(new Date())}
          </p>
        </div>
      </div>
    </div>
  );
}
