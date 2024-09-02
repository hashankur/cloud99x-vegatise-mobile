import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Image source={item.image} style={[styles.image, { width }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    paddingTop: 45,
    paddingBottom: 45,
  },
  title: {
    fontWeight: "900",
    fontSize: 24,
    marginBottom: 10,
    paddingTop: 13,
    paddingHorizontal: 8,
    // textAlign: "center",
  },
  description: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 10,
    paddingHorizontal: 8,
    // paddingHorizontal: 64,
  },
});
