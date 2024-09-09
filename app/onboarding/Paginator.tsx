import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  Animated,
} from "react-native";
import React from "react";
import { Paragraph, XStack, YStack } from "tamagui";

export default Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <YStack pl={20}>
      <XStack>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: "clamp",
            // });
            // const opacity = scrollX.interpolate({
            //   inputRange,
          });
          return (
            <Animated.View
              style={[styles.dot, { width: dotWidth }]}
              key={i.toString()}
            />
          );
        })}
      </XStack>
      <Paragraph fontSize={20} mt={20} pl={5}>
        Skip
      </Paragraph>
    </YStack>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D33A3A",
    marginHorizontal: 5,
  },
});
