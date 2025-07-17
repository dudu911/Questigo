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
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 p-4">
        <View className="items-center mb-8 pt-6">
          <Text className="text-4xl font-bold text-gray-900 mb-3">
            Questigo
          </Text>
          <Text className="text-lg text-gray-600 text-center font-medium">
            Your Adventure Awaits
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-gray-900 mb-3">
            Active Quests
          </Text>
          <Text className="text-base text-gray-600 mb-6">
            Complete quests to earn points and unlock new adventures across the
            platform.
          </Text>

          {sampleQuests.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              progress={questProgress[quest.id]}
            />
          ))}
        </View>

        <View className="items-center mt-8 pb-8">
          <Text className="text-xs text-gray-500 text-center">
            Built with React Native & Expo • {formatDate(new Date())}
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
