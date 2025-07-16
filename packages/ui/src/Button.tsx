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
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-4 py-2 text-sm";
      case "large":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 text-white hover:bg-blue-600";
      case "secondary":
        return "bg-gray-100 text-black hover:bg-gray-200";
      case "outline":
        return "bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-50";
      default:
        return "bg-blue-500 text-white hover:bg-blue-600";
    }
  };

  const baseClasses =
    "rounded-lg border-none font-semibold transition-all duration-200 ease-in-out";
  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      className={`${baseClasses} ${getSizeClasses()} ${getVariantClasses()} ${disabledClasses}`}
      onClick={onPress}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};
