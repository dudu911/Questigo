import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const introSeen = await AsyncStorage.getItem("introSeen");

      console.log("Intro seen status:", introSeen);

      if (introSeen === "true") {
        // User has seen intro, go to main app
        router.replace("/home");
      } else {
        // First time user, show intro
        router.replace("/(auth)/intro");
      }
    } catch (error) {
      console.error("Error checking intro status:", error);
      // Default to intro on error
      router.replace("/(auth)/intro");
    } finally {
      setIsLoading(false);
    }
  };

  const resetIntroStatus = async () => {
    try {
      await AsyncStorage.removeItem("introSeen");
      console.log("Intro status reset!");
      router.replace("/(auth)/intro");
    } catch (error) {
      console.error("Error resetting intro status:", error);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.text}>Loading...</Text>

        {/* Development helper - long press to show reset option */}
        <Pressable
          style={styles.hiddenArea}
          onLongPress={() => setShowReset(true)}
        />

        {showReset && (
          <View style={styles.resetContainer}>
            <Text style={styles.resetText}>Development Options:</Text>
            <Pressable style={styles.resetButton} onPress={resetIntroStatus}>
              <Text style={styles.resetButtonText}>Reset Intro</Text>
            </Pressable>
            <Pressable
              style={styles.cancelButton}
              onPress={() => setShowReset(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </View>
        )}
      </View>
    );
  }

  // This shouldn't be reached due to redirects, but just in case
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  hiddenArea: {
    position: "absolute",
    bottom: 50,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: "transparent",
  },
  resetContainer: {
    position: "absolute",
    bottom: 100,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  resetText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  resetButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  resetButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  cancelButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
