import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import PagerView from "react-native-pager-view";
import { DzikirPagi as data } from "../data/pagi";
import { Ionicons } from "@expo/vector-icons";
import React, { Fragment, useRef, useState } from "react";
import { screenHeight, screenWidth } from "../constants/scale";
import * as Progress from "react-native-progress";
import { useTheme } from "../themes/ThemeProvider";

export default function DzikirPagi() {
  const [progress, setProgress] = useState(0);
  const { colors, dark, setScheme } = useTheme();
  const pagerRef = useRef();

  const ToggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  const onPageChange = (e) => {
    const currentPosition = e.nativeEvent.position;
    const totalData = data.length;

    const calculatedProgress = (currentPosition + 1) / totalData;
    setProgress(calculatedProgress);
  };

  const styles = StyleSheet.create({
    pagerContainer: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    teks: {
      color: colors.teks,
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
        <Text style={[styles.teks, { fontSize: screenWidth / 17 }]}>
          Dzikir Pagi
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
      <View
        style={{
          backgroundColor: colors.background,
        }}>
        <Progress.Bar
          progress={progress}
          width={screenWidth}
          height={screenHeight / 100}
          color="#881FDB"
          unfilledColor="#F4F4F4"
          borderColor={colors.background}
        />
      </View>
      <PagerView
        initialPage={0}
        ref={pagerRef}
        style={styles.pagerContainer}
        onPageSelected={onPageChange}>
        {data.map((item) => (
          <View
            key={item.no}
            style={{
              paddingHorizontal: screenWidth / 15,
              height: screenHeight - 250,
            }}>
            <Text
              style={[
                styles.teks,
                {
                  marginVertical: screenHeight / 50,
                  fontSize: screenWidth / 20,
                },
              ]}>
              Dibaca {item.jumlah} kali
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text
                style={[
                  styles.teks,
                  {
                    fontSize: screenWidth / 15,
                    textAlign: "center",
                  },
                ]}>
                {item.arab}
              </Text>
              <Text
                style={[
                  styles.teks,
                  {
                    fontSize: screenWidth / 25,
                  },
                ]}>
                {item.indo}
              </Text>
              <View
                style={{
                  backgroundColor: colors.teks,
                  width: screenWidth - 50,
                  height: screenHeight / 500,
                  marginVertical: screenHeight / 80,
                }}></View>
              <Text style={[styles.teks, { fontSize: screenWidth / 30 }]}>
                {item.dalil}
              </Text>
            </ScrollView>
          </View>
        ))}
      </PagerView>
      <View style={{ backgroundColor: colors.background }}></View>
    </>
  );
}
