import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  position?: "br" | "bl";
}

export const FloatButton = ({ title, onPress, position = "br" }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.fabLocation,
        position === "bl" ? styles.left : styles.right,
      ]}
      onPress={onPress}
    >
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    position: "absolute",
    bottom: 25,
  },
  right: { right: 25 },
  left: { left: 25 },
  fab: {
    backgroundColor: "#5856D6",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  fabText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
