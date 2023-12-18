import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "../themes/ThemeProvider";
import { screenHeight, screenWidth } from "../constants/scale";

export default function HeaderDzikir({ title }) {
  const { colors, dark, setScheme } = useTheme();

  const ToggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  const styles = StyleSheet.create({
    teks: {
      color: colors.teks,
    },
    pressed: {
      opacity: 0.7,
    },
  });

  return (
    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: screenWidth / 10,
        paddingVertical: screenHeight / 30,
      }}>
      <Text
        style={[
          styles.teks,
          { fontSize: screenWidth / 17, fontWeight: "bold" },
        ]}>
        {title}
      </Text>
      <Pressable
        onPress={ToggleTheme}
        style={({ pressed }) => [
          styles.toggleContainer,
          pressed && styles.pressed,
        ]}>
        <Ionicons
          name={dark ? "moon-sharp" : "sunny-outline"}
          size={screenWidth / 10}
          color={dark ? "#881FDB" : "black"}
        />
      </Pressable>
    </View>
  );
}
