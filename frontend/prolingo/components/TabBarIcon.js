import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export const TabBarIcon = ({ color, icon }) => {
  const styles = StyleSheet.create({
    image: {
      width: 40,
      height: 40,
      tintColor: color
    },
  });

  return (
    <View>
      <Image source={icon} resizeMode="contain" style={styles.image} />
    </View>
  );
};
