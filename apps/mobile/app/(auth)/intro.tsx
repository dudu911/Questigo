import { IntroCarousel } from "../../src/components/IntroCarousel";
import { View, Pressable, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const slides = [
  {
    key: "discover",
    img: require("../../assets/intro-map.png"),
    txt: "Discover hidden spots",
  },
  {
    key: "solve",
    img: require("../../assets/intro-riddle.png"),
    txt: "Solve riddles on-site",
  },
  {
    key: "team",
    img: require("../../assets/intro-team.png"),
    txt: "Play with friends",
  },
];

export default function Intro() {
  const onDone = async () => {
    await AsyncStorage.setItem("introSeen", "true");
    router.replace("/(auth)/login");
  };

  return (
    <View className="flex-1 bg-white">
      <IntroCarousel slides={slides} />
      <Pressable
        onPress={onDone}
        className="bg-blue-600 mx-6 mb-12 py-4 rounded-full"
      >
        <Text className="text-white text-center text-lg font-semibold">
          Get Started
        </Text>
      </Pressable>
    </View>
  );
}
