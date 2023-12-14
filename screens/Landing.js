import { StyleSheet, Text, View, Image, Button } from "react-native";
import tangan from "../assets/tangan.png";
import { useNavigation } from "@react-navigation/native";
import landing from "../assets/landing.png";
import { screenWidth } from "../constants/scale";

const ImageTangan = Image.resolveAssetSource(tangan).uri;
const ImageLanding = Image.resolveAssetSource(landing).uri;

export default function Landing() {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={{ uri: ImageTangan }} style={styles.imageTangan} />
      <Image source={{ uri: ImageLanding }} style={styles.imageTeks} />
      <Text>Design by @gholmocc</Text>
      <Text>Coding by @mensafri</Text>
      <Button title="Pindah" onPress={() => navigation.navigate("Homepage")} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageTangan: {
    height: 240,
    width: 240,
  },
  imageTeks: {
    height: screenWidth / 5.5,
    width: screenWidth / 3,
    marginBottom: screenWidth / 20,
  },
});
