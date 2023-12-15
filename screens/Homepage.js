import landing from "../assets/landing.png";
import pagi from "../assets/pagi.png";
import petang from "../assets/petang.png";
import Animated, { SlideInDown } from "react-native-reanimated";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { screenHeight, screenWidth } from "../constants/scale";
import { useTheme } from "../themes/ThemeProvider";

const ImageLanding = Image.resolveAssetSource(landing).uri;
const ImagePagi = Image.resolveAssetSource(pagi).uri;
const ImagePetang = Image.resolveAssetSource(petang).uri;

export default function Homepage() {
  const { colors, dark, setScheme } = useTheme();

  const ToggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: screenHeight / 20,
      backgroundColor: colors.background,
    },
    headerContainer: {
      flexDirection: "row",
      marginBottom: screenHeight / 25,
      marginHorizontal: screenWidth / 10,
      justifyContent: "space-between",
    },
    imageTeks: {
      height: screenWidth / 8,
      width: screenWidth / 4,
      marginBottom: screenWidth / 20,
      objectFit: "fill",
    },
    dzikirsContainer: {
      justifyContent: "center",
      alignItems: "center",
      gap: screenHeight / 25,
    },
    dzikirContainer: {
      borderRadius: screenWidth / 20,
      borderColor: dark ? "black" : "#EEEEEE",
      borderWidth: 3,
      padding: screenWidth / 30,
      backgroundColor: dark ? "#222121" : "white",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    ImageDzikir: {
      height: screenWidth / 2.5,
      width: screenWidth / 1.5,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: screenWidth / 40,
      borderRadius: screenWidth / 40,
    },
    pressed: {
      opacity: 0.7,
    },
    teks: {
      textAlign: "center",
      fontSize: screenWidth / 28,
      color: colors.teks,
    },
    toggleContainer: {
      marginTop: screenHeight / 90,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Animated.Image
          sharedTransitionTag="sharedTag"
          source={{ uri: ImageLanding }}
          style={styles.imageTeks}
        />
        <Pressable
          onPress={ToggleTheme}
          style={({ pressed }) => [
            styles.toggleContainer,
            pressed && styles.pressed,
          ]}>
          <Ionicons
            name={dark ? "moon-sharp" : "sunny-outline"}
            size={screenWidth / 10}
            color={dark ? "white" : "black"}
          />
        </Pressable>
      </View>
      <Animated.View
        style={styles.dzikirsContainer}
        entering={SlideInDown.duration(500).easing()}>
        <Pressable
          style={({ pressed }) => [
            styles.dzikirContainer,
            pressed && styles.pressed,
          ]}>
          <Image source={{ uri: ImagePagi }} style={styles.ImageDzikir} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={styles.teks}>Dzikir Pagi</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={screenWidth / 15}
              color={dark ? "white" : "black"}
            />
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.dzikirContainer,
            pressed && styles.pressed,
          ]}>
          <Image source={{ uri: ImagePetang }} style={styles.ImageDzikir} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={styles.teks}>Dzikir Petang</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={screenWidth / 15}
              color={dark ? "white" : "black"}
            />
          </View>
        </Pressable>
        <Text
          style={[
            styles.teks,
            {
              fontSize: screenWidth / 30,
              marginHorizontal: screenWidth / 10,
              marginBottom: screenHeight / 7,
            },
          ]}>
          “Hai orang-orang yang beriman, berdzikirlah (dengan menyebut Nama)
          Allah dzikir yang sebanyak-banyaknya. Dan bertasbihlah kepada-Nya di
          waktu pagi dan petang.” (Al-Ahzab : 41-42).
        </Text>
      </Animated.View>
    </ScrollView>
  );
}
