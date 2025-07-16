import React from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { formatDate } from "@questigo/shared";
import { QuestCard } from "../components/QuestCard";
import { sampleQuests, initialQuestProgress } from "../constants/sampleData";
import { useQuestProgress } from "../hooks/useQuestProgress";

export const HomeScreen: React.FC = () => {
  const { questProgress } = useQuestProgress(initialQuestProgress);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 p-4">
        <View className="items-center mb-6 pt-5">
          <Text className="text-3xl font-bold text-gray-900 mb-2">Questigo Mobile</Text>
          <Text className="text-lg text-gray-600 text-center">Cross-platform monorepo demo</Text>
        </View>

        <View className="mb-6">
          <Text className="text-2xl font-semibold text-gray-900 mb-2">Sample Quests</Text>
          <Text className="text-base text-gray-600 mb-4">
            This demonstrates shared types and utilities working across
            platforms.
          </Text>

          {sampleQuests.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              progress={questProgress[quest.id]}
            />
          ))}
        </View>

        <View className="items-center mt-6 pb-5">
          <Text className="text-xs text-gray-500 text-center">
            Built with React Native & Expo • {formatDate(new Date())}
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
