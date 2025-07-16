import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { formatDate } from "@questigo/shared";
import { QuestCard } from "../components/QuestCard";
import { sampleQuests, initialQuestProgress } from "../constants/sampleData";
import { useQuestProgress } from "../hooks/useQuestProgress";

export const HomeScreen: React.FC = () => {
  const { questProgress } = useQuestProgress(initialQuestProgress);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Questigo Mobile</Text>
          <Text style={styles.subtitle}>Cross-platform monorepo demo</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sample Quests</Text>
          <Text style={styles.sectionDescription}>
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

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Built with React Native & Expo • {formatDate(new Date())}
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  footer: {
    alignItems: "center",
    marginTop: 24,
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});
