import React from "react";

interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  backgroundColor?: string;
  height?: number;
  style?: React.CSSProperties;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = "#007AFF",
  backgroundColor = "#F2F2F7",
  height = 8,
  style,
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      className="w-full bg-gray-200 rounded-full overflow-hidden"
      style={{ height: `${height}px`, backgroundColor, ...style }}
    >
      <div
        className="h-full bg-blue-500 transition-all duration-300 ease-out rounded-full"
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: color,
          height: `${height}px`,
        }}
      />
    </div>
  );
};
