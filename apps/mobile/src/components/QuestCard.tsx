import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Quest } from "@questigo/shared";
import { getDifficultyColor, getCategoryColor } from "../utils/questUtils";

interface QuestCardProps {
  quest: Quest;
  progress: number;
}

export const QuestCard: React.FC<QuestCardProps> = ({ quest, progress }) => {
  return (
    <View style={styles.questCard}>
      <Text style={styles.questTitle}>{quest.title}</Text>
      <Text style={styles.questDescription}>{quest.description}</Text>
      <View style={styles.questMeta}>
        <Text
          style={[
            styles.questCategory,
            { color: getCategoryColor(quest.category) },
          ]}
        >
          {quest.category}
        </Text>
        <Text
          style={[
            styles.questDifficulty,
            { color: getDifficultyColor(quest.difficulty) },
          ]}
        >
          {quest.difficulty}
        </Text>
      </View>
      <View style={styles.questStats}>
        <Text style={styles.questPoints}>{quest.points} points</Text>
        <Text style={styles.questTime}>{quest.estimatedTime}m</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress || 0}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress || 0}% complete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "600",
    textTransform: "uppercase",
  },
  questDifficulty: {
    fontSize: 12,
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
});
