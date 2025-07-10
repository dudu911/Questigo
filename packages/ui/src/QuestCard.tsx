import React from "react";
import { Quest, formatTime } from "@questigo/shared";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";

interface QuestCardProps {
  quest: Quest;
  progress?: number;
  onStartQuest?: () => void;
  onViewQuest?: () => void;
  style?: React.CSSProperties;
}

export const QuestCard: React.FC<QuestCardProps> = ({
  quest,
  progress = 0,
  onStartQuest,
  onViewQuest,
  style,
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "#34C759";
      case "medium":
        return "#FF9500";
      case "hard":
        return "#FF3B30";
      default:
        return "#007AFF";
    }
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "16px",
    margin: "8px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #E5E5EA",
    ...style,
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "8px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#000",
    margin: "0 0 4px 0",
  };

  const categoryStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#8E8E93",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const difficultyBadgeStyle: React.CSSProperties = {
    backgroundColor: getDifficultyColor(quest.difficulty),
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase",
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#666",
    margin: "8px 0",
    lineHeight: "1.4",
  };

  const metaStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "12px 0",
    fontSize: "12px",
    color: "#8E8E93",
  };

  const actionsStyle: React.CSSProperties = {
    display: "flex",
    gap: "8px",
    marginTop: "12px",
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div>
          <h3 style={titleStyle}>{quest.title}</h3>
          <p style={categoryStyle}>{quest.category}</p>
        </div>
        <span style={difficultyBadgeStyle}>{quest.difficulty}</span>
      </div>

      <p style={descriptionStyle}>{quest.description}</p>

      <div style={metaStyle}>
        <span>{formatTime(quest.estimatedTime)}</span>
        <span>{quest.points} points</span>
      </div>

      {progress > 0 && (
        <div style={{ margin: "8px 0" }}>
          <ProgressBar progress={progress} />
          <p
            style={{ fontSize: "12px", color: "#8E8E93", margin: "4px 0 0 0" }}
          >
            {progress}% complete
          </p>
        </div>
      )}

      <div style={actionsStyle}>
        {progress === 0 ? (
          <Button variant="primary" size="small" onPress={onStartQuest}>
            Start Quest
          </Button>
        ) : progress < 100 ? (
          <Button variant="secondary" size="small" onPress={onViewQuest}>
            Continue
          </Button>
        ) : (
          <Button variant="outline" size="small" onPress={onViewQuest}>
            View Completed
          </Button>
        )}
      </div>
    </div>
  );
};
