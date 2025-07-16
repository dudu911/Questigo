import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View className="items-center justify-center flex-1" style={{ width: width * 0.8 }}>
        <Image 
          source={slides[currentIndex].img} 
          className="mb-5" 
          style={{ width: 250, height: 250, resizeMode: "contain" }}
        />
        <Text className="text-lg text-center text-gray-800 mb-5">
          {slides[currentIndex].txt}
        </Text>
      </View>

      <View className="flex-row items-center justify-center my-5">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`w-2.5 h-2.5 rounded-full mx-1 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </View>

      <View className="flex-row justify-between mb-5" style={{ width: width * 0.8 }}>
        <TouchableOpacity 
          onPress={prevSlide} 
          style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "#3B82F6", borderRadius: 5 }}
        >
          <Text className="text-white text-base">Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={nextSlide} 
          style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "#3B82F6", borderRadius: 5 }}
        >
          <Text className="text-white text-base">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
