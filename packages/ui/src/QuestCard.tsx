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
        return "bg-green-500";
      case "medium":
        return "bg-orange-500";
      case "hard":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div
      className="bg-white rounded-xl p-4 my-2 shadow-sm border border-gray-200"
      style={style}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold text-black mb-1">
            {quest.title}
          </h3>
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {quest.category}
          </p>
        </div>
        <span
          className={`${getDifficultyColor(quest.difficulty)} text-white px-2 py-1 rounded text-xs font-semibold uppercase`}
        >
          {quest.difficulty}
        </span>
      </div>

      <p className="text-sm text-gray-600 my-2 leading-relaxed">
        {quest.description}
      </p>

      <div className="flex justify-between items-center my-3 text-xs text-gray-500">
        <span>{formatTime(quest.estimatedTime)}</span>
        <span>{quest.points} points</span>
      </div>

      {progress > 0 && (
        <div className="my-2">
          <ProgressBar progress={progress} />
          <p className="text-xs text-gray-500 mt-1">{progress}% complete</p>
        </div>
      )}

      <div className="flex gap-2 mt-3">
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
