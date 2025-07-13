import { View, Text, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

interface Slide {
  key: string;
  img: any;
  txt: string;
}

interface IntroCarouselProps {
  slides: Slide[];
}

export function IntroCarousel({ slides }: IntroCarouselProps) {
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
