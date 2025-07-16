import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
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
    <View style={styles.container}>
      <View style={styles.slideContainer}>
        <Image source={slides[currentIndex].img} style={styles.image} />
        <Text style={styles.text}>{slides[currentIndex].txt}</Text>
      </View>

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity onPress={prevSlide} style={styles.navButton}>
          <Text style={styles.navText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextSlide} style={styles.navButton}>
          <Text style={styles.navText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slideContainer: {
    width: width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#007AFF",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.8,
    marginBottom: 20,
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  navText: {
    color: "white",
    fontSize: 16,
  },
});
