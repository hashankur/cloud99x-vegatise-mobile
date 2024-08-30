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
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Image source={item.image} style={[styles.image, { width }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // flex: 0.5,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 10,
    // textAlign: "center",
  },
  description: {
    fontWeight: "300",
    marginBottom: 10,
    // paddingHorizontal: 64,
  },
});
