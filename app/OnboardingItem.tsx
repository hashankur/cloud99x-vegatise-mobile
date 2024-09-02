import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { H1, Paragraph, XStack, YStack } from "tamagui";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <YStack flex={1} width={width}>
      <YStack pb={70}>
        <Paragraph fontSize={25} fontWeight={700} pt={30} px={20}>
          {item.title}
        </Paragraph>
        <Paragraph fontSize={16} fontWeight={500} px={20}>
          {item.description}
        </Paragraph>
      </YStack>
      <Image source={item.image} style={[styles.image, { width }]} />
    </YStack>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
  },
});
