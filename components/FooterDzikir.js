import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/ThemeProvider";
import { screenHeight, screenWidth } from "../constants/scale";

export default function FooterDzikir({ pagerRef, currentPosition, data }) {
  const navigation = useNavigation();
  const { colors, dark } = useTheme();

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
