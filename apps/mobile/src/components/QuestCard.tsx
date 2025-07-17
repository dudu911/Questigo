import React from "react";
import { View, Text } from "react-native";
import { Quest } from "@questigo/shared";
import { getDifficultyColor, getCategoryColor } from "../utils/questUtils";

interface QuestCardProps {
  quest: Quest;
  progress: number;
}

export const QuestCard: React.FC<QuestCardProps> = ({ quest, progress }) => {
  const getDifficultyBadgeStyle = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-success-500";
      case "medium":
        return "bg-warning-500";
      case "hard":
        return "bg-danger-500";
      case "expert":
        return "bg-accent-500";
      default:
        return "bg-primary-500";
    }
  };

  return (
    <View className="quest-card mb-6 bg-white rounded-2xl p-6 shadow-quest-card">
      <View className="flex-row justify-between items-start mb-3">
        <View className="flex-1 mr-3">
          <Text className="text-xl font-display font-bold text-gray-900 mb-1">{quest.title}</Text>
          <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {quest.category}
          </Text>
        </View>
        <View className={`${getDifficultyBadgeStyle(quest.difficulty)} px-3 py-1 rounded-full`}>
          <Text className="text-xs font-bold text-white uppercase tracking-wide">
            {quest.difficulty}
          </Text>
        </View>
      </View>

      <Text className="text-base text-gray-700 mb-4 leading-6">{quest.description}</Text>

      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center">
          <Text className="text-primary-600 font-bold text-lg">{quest.points}</Text>
          <Text className="text-gray-500 text-sm ml-1">points</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-gray-600 font-medium">{quest.estimatedTime}</Text>
          <Text className="text-gray-500 text-sm ml-1">min</Text>
        </View>
      </View>

      {progress > 0 && (
        <View className="mt-3">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-sm font-medium text-gray-700">Progress</Text>
            <Text className="text-sm font-bold text-primary-600">{progress}%</Text>
          </View>
          <View className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <View 
              className="h-full bg-primary-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </View>
        </View>
      )}
    </View>
  );
};
