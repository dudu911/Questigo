import { View, Text, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
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

export function IntroCarousel() {
  return (
    <Carousel
      loop
      width={390}
      height={600}
      data={slides}
      renderItem={({ item }) => (
        <View className="flex-1 items-center justify-center px-6">
          <Image
            source={item.img}
            className="h-80 w-80 mb-10"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-navy text-center">
            {item.txt}
          </Text>
        </View>
      )}
      pagingEnabled
    />
  );
}
