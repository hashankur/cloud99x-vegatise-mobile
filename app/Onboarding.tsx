import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Animated,
} from "react-native";
import { Paragraph, XStack, YStack } from "tamagui";
import slides from "slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const viewableitemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View>
      <View>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableitemsChanged}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      {/* <NextButton/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
