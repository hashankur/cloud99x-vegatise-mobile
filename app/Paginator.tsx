import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  Animated,
} from "react-native";
import React from "react";
// import { Container, Key } from "@tamagui/lucide-icons";
// import { Extrapolation } from "react-native-reanimated";

export default Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <View style={{ flexDirection: "row", height: 64 }}>
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
      </View>
      <Text style={styles.text}>Skip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D33A3A",
    marginHorizontal: 5,
    marginTop: 40,
    marginBottom: 0,
  },
  text: {
    fontWeight: "100",
    fontSize: 20,
    marginBottom: 10,
    paddingTop: 5,
    // textAlign: "center",
  },
});
