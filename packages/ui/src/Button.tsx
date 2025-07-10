import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  style,
}) => {
  const getButtonStyle = () => {
    const baseStyle: React.CSSProperties = {
      padding:
        size === "small"
          ? "8px 16px"
          : size === "large"
            ? "16px 32px"
            : "12px 24px",
      borderRadius: "8px",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      fontSize: size === "small" ? "14px" : size === "large" ? "18px" : "16px",
      fontWeight: "600",
      transition: "all 0.2s ease",
      opacity: disabled ? 0.6 : 1,
      ...style,
    };

    switch (variant) {
      case "primary":
        return {
          ...baseStyle,
          backgroundColor: "#007AFF",
          color: "white",
        };
      case "secondary":
        return {
          ...baseStyle,
          backgroundColor: "#F2F2F7",
          color: "#000",
        };
      case "outline":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
          color: "#007AFF",
          border: "2px solid #007AFF",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <button style={getButtonStyle()} onClick={onPress} disabled={disabled}>
      {children}
    </button>
  );
};
