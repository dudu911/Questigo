import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Quest, generateId, formatDate } from "@questigo/shared";

// Sample quest data
const sampleQuests: Quest[] = [
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

export default function App() {
  const [questProgress] = useState<{ [key: string]: number }>({
    [sampleQuests[0].id]: 60,
    [sampleQuests[1].id]: 100,
  });

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
            <View key={quest.id} style={styles.questCard}>
              <Text style={styles.questTitle}>{quest.title}</Text>
              <Text style={styles.questDescription}>{quest.description}</Text>
              <View style={styles.questMeta}>
                <Text style={styles.questCategory}>{quest.category}</Text>
                <Text style={styles.questDifficulty}>{quest.difficulty}</Text>
              </View>
              <View style={styles.questStats}>
                <Text style={styles.questPoints}>{quest.points} points</Text>
                <Text style={styles.questTime}>{quest.estimatedTime}m</Text>
              </View>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${questProgress[quest.id] || 0}%` },
                    ]}
                  />
                </View>
                <Text style={styles.progressText}>
                  {questProgress[quest.id] || 0}% complete
                </Text>
              </View>
            </View>
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
}

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
  questCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  questTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  questDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
    lineHeight: 20,
  },
  questMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  questCategory: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  questDifficulty: {
    fontSize: 12,
    color: "#FF9500",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  questStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  questPoints: {
    fontSize: 14,
    color: "#666",
  },
  questTime: {
    fontSize: 14,
    color: "#666",
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
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
