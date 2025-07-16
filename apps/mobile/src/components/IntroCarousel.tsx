import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

interface Slide {
  key: string;
  img: any;
  txt: string;
}

interface IntroCarouselProps {
  slides: Slide[];
}

const { width } = Dimensions.get("window");

export function IntroCarousel({ slides }: IntroCarouselProps) {
  return (
    <View className="flex-1">
      <Carousel
        loop
        width={width}
        height={600}
        autoPlay={false}
        data={slides}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View className="flex-1 items-center justify-center px-6">
            <Image
              source={item.img}
              style={{ width: 250, height: 250, resizeMode: "contain" }}
              className="mb-8"
            />
            <Text className="text-2xl font-bold text-gray-800 text-center">
              {item.txt}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
