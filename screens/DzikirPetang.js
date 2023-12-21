import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { DzikirPetang as data } from "../data/petang";
import Animated from "react-native-reanimated";
import { useTheme } from "../themes/ThemeProvider";
import { screenHeight, screenWidth } from "../constants/scale";
import DzikirView from "../components/DzikirView";
import FooterDzikir from "../components/FooterDzikir";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function DzikirPetang() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const pagerRef = useRef();

  const { colors, dark, setScheme } = useTheme();

  const ToggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  const styles = StyleSheet.create({
    teks: {
      color: colors.teks,
      fontFamily: "Montserrat_600SemiBold",
    },
    pressed: {
      opacity: 0.7,
    },
  });

  return (
    <>
      <View
        style={{
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: screenWidth / 10,
          paddingVertical: screenHeight / 30,
        }}>
        <Animated.Text
          style={{
            color: colors.teks,
            fontFamily: "Montserrat_600SemiBold",
            fontSize: screenWidth / 17,
          }}
          sharedTransitionTag="teksTagPetang">
          Dzikir Petang
        </Animated.Text>
        <AnimatedPressable
          sharedTransitionTag="ThemeTag"
          onPress={ToggleTheme}
          style={styles.toggleContainer}>
          <Ionicons
            name={dark ? "moon-sharp" : "sunny-outline"}
            size={screenWidth / 10}
            color={dark ? "#881FDB" : "black"}
          />
        </AnimatedPressable>
      </View>
      <DzikirView
        data={data}
        pagerRef={pagerRef}
        setCurrentPosition={setCurrentPosition}
      />
      <FooterDzikir
        currentPosition={currentPosition}
        pagerRef={pagerRef}
        data={data}
      />
    </>
  );
}
