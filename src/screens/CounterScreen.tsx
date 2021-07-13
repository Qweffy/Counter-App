import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FloatButton } from "../components/atoms/FloatButton";

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <FloatButton title="+1" onPress={() => setCounter(counter + 1)} />
      <FloatButton
        title="-1"
        position="bl"
        onPress={() => setCounter(counter - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 40,
    top: -15,
  },
});
