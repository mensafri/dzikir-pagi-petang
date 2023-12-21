import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import tangan from "../assets/tangan.png";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  SlideInDown,
  ZoomIn,
  SlideOutUp,
} from "react-native-reanimated";
import landing from "../assets/landing.png";
import { screenHeight, screenWidth } from "../constants/scale";

const ImageTangan = Image.resolveAssetSource(tangan).uri;
const ImageLanding = Image.resolveAssetSource(landing).uri;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Landing() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animated.Image
        entering={ZoomIn.duration(1000)}
        exiting={SlideOutUp.duration(200)}
        source={{ uri: ImageTangan }}
        style={styles.imageTangan}
      />
      <Animated.Image
        entering={ZoomIn.duration(1000)}
        sharedTransitionTag="sharedTag"
        source={{ uri: ImageLanding }}
        style={styles.imageTeks}
      />
      <AnimatedPressable
        entering={SlideInDown.duration(1000)}
        onPress={() => navigation.navigate("Homepage")}
        style={styles.buttonContainer}>
        <Text
          style={{
            fontSize: screenWidth / 20,
            fontWeight: "500",
            textAlign: "center",
            fontFamily: "Montserrat_600SemiBold",
          }}>
          Mulai
        </Text>
      </AnimatedPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageTangan: {
    height: 240,
    width: 240,
  },
  imageTeks: {
    height: screenWidth / 4,
    width: screenWidth / 2,
    objectFit: "fill",
  },
  buttonContainer: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: screenWidth / 10,
    paddingVertical: screenHeight / 140,
    paddingHorizontal: screenWidth / 13,
    top: screenHeight / 6,
  },
  pressed: {
    opacity: 0.7,
  },
});
