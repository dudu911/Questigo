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

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: `${height}px`,
    backgroundColor,
    borderRadius: `${height / 2}px`,
    overflow: "hidden",
    ...style,
  };

  const fillStyle: React.CSSProperties = {
    height: "100%",
    width: `${clampedProgress}%`,
    backgroundColor: color,
    transition: "width 0.3s ease",
    borderRadius: `${height / 2}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={fillStyle} />
    </div>
  );
};
