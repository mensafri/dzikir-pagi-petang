import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import PagerView from "react-native-pager-view";
import { DzikirPagi as data } from "../data/pagi";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { screenHeight, screenWidth } from "../constants/scale";
import * as Progress from "react-native-progress";
import { useTheme } from "../themes/ThemeProvider";

export default function DzikirPagi() {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const { colors, dark, setScheme } = useTheme();
  const [currentPosition, setCurrentPosition] = useState(0);
  const pagerRef = useRef();

  const ToggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  const onPageChange = (e) => {
    const position = e.nativeEvent.position;
    setCurrentPosition(e.nativeEvent.position);
    const totalData = data.length;

    const calculatedProgress = (position + 1) / totalData;
    setProgress(calculatedProgress);
  };

  const handleNextPage = () => {
    if (pagerRef.current) {
      const nextPage =
        currentPosition + 1 < data.length
          ? currentPosition + 1
          : currentPosition;
      pagerRef.current.setPage(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (pagerRef.current) {
      const prevPage =
        currentPosition - 1 >= 0 ? currentPosition - 1 : currentPosition;
      pagerRef.current.setPage(prevPage);
    }
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
    pressed: {
      opacity: 0.7,
    },
    bottomButton: {
      backgroundColor: "#881FDB",
      position: "absolute",
      bottom: 0,
      left: screenWidth / 2.8,
      paddingHorizontal: screenWidth * 0.1,
      borderTopLeftRadius: screenWidth / 7.5,
      borderTopRightRadius: screenWidth / 7.5,
      paddingBottom: screenWidth / 80,
      paddingTop: screenHeight / 100,
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
        <Text
          style={[
            styles.teks,
            { fontSize: screenWidth / 17, fontWeight: "bold" },
          ]}>
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
              height: screenHeight - 270,
            }}>
            <Text
              style={[
                styles.teks,
                {
                  marginVertical: screenHeight / 50,
                  fontSize: screenWidth / 20,
                  backgroundColor: "#881FDB",
                  color: "white",
                  textAlign: "center",
                  borderRadius: screenWidth / 10,
                  paddingVertical: screenHeight / 160,
                  paddingHorizontal: screenWidth / 100,
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
      <View
        style={{
          backgroundColor: colors.background,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: screenWidth / 15,
          paddingBottom: screenWidth / 17,
        }}>
        <Pressable
          onPress={handlePreviousPage}
          style={({ pressed }) => [
            { flexDirection: "row", alignItems: "center" },
            pressed && styles.pressed,
          ]}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={screenWidth / 14}
            color={dark ? "white" : "black"}
          />
          <Text style={[styles.teks, { fontSize: screenWidth / 25 }]}>
            back
          </Text>
        </Pressable>
        <Pressable
          onPress={handleNextPage}
          style={({ pressed }) => [
            { flexDirection: "row", alignItems: "center" },
            pressed && styles.pressed,
          ]}>
          <Text style={[styles.teks, { fontSize: screenWidth / 25 }]}>
            next
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={screenWidth / 14}
            color={dark ? "white" : "black"}
          />
        </Pressable>
      </View>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [
          styles.bottomButton,
          pressed && styles.pressed,
        ]}>
        <MaterialIcons
          name="home-filled"
          size={screenWidth / 10}
          color="white"
        />
        <Text style={{ textAlign: "center", color: "white" }}>Home</Text>
      </Pressable>
    </>
  );
}
