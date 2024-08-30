import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  View,
} from "react-native";
import { Paragraph, XStack, YStack } from "tamagui";
import slides from "slides";
import OnboardingItem from "./OnboardingItem";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
