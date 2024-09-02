import { Contact } from "@tamagui/lucide-icons";
import React, { useEffect, useRef } from "react";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Iconify } from "react-native-iconify";
import Svg, { G, Circle } from "react-native-svg";
// import { ChevronRight } from "@tamagui/lucide-icons";

export default NextButton = ({ percentage, scrollTo }) => {
  const size = 60;
  const strokeWidth = 5;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progress, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progress.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );

    return () => {
      progress.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation={"-90"} origin={center}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#c2c2c2"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            stroke="#D33A3A"
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        style={styles.button}
        activeOpacity={0.6}
      >
        <Text>
          <Iconify icon="icon-park-solid:right-c" size={30} color="#D33A3A" />;
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    borderRadius: 100,
    color: "#D33A3A",
    justifyContent: "center",
    alignItems: "center",
  },
});
