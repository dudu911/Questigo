import React from "react";
import { View, Text } from "react-native";
import { Quest } from "@questigo/shared";
import { getDifficultyColor, getCategoryColor } from "../utils/questUtils";

interface QuestCardProps {
  quest: Quest;
  progress: number;
}

export const QuestCard: React.FC<QuestCardProps> = ({ quest, progress }) => {
  return (
    <View className="bg-white rounded-3xl p-4 mb-4 shadow-sm">
      <Text className="text-xl font-semibold text-gray-900 mb-2">{quest.title}</Text>
      <Text className="text-sm text-gray-600 mb-3 leading-5">{quest.description}</Text>
      <View className="flex-row justify-between mb-2">
        <Text 
          className="text-xs font-semibold uppercase"
          style={{ color: getCategoryColor(quest.category) }}
        >
          {quest.category}
        </Text>
        <Text 
          className="text-xs font-semibold uppercase"
          style={{ color: getDifficultyColor(quest.difficulty) }}
        >
          {quest.difficulty}
        </Text>
      </View>
      <View className="flex-row justify-between mb-3">
        <Text className="text-sm text-gray-600">{quest.points} points</Text>
        <Text className="text-sm text-gray-600">{quest.estimatedTime}m</Text>
      </View>
      <View className="mt-2">
        <View className="h-2 bg-gray-200 rounded overflow-hidden">
          <View 
            className="h-full bg-blue-500 rounded"
            style={{ width: `${progress || 0}%` }}
          />
        </View>
        <Text className="text-xs text-gray-600 mt-1">{progress || 0}% complete</Text>
      </View>
    </View>
  );
};
