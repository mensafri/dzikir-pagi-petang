import landing from "../assets/landing.png";
import pagi from "../assets/pagi.png";
import petang from "../assets/petang.png";
import { Text, View, Image, StyleSheet } from "react-native";
import { screenWidth } from "../constants/scale";

const ImageLanding = Image.resolveAssetSource(landing).uri;
const ImagePagi = Image.resolveAssetSource(pagi).uri;
const ImagePetang = Image.resolveAssetSource(petang).uri;

export default function Homepage() {
  return (
    <View>
      <View>
        <Image source={{ uri: ImageLanding }} style={styles.imageTeks} />
      </View>
      <View>
        <View>
          <Image source={{ uri: ImagePagi }} style={styles.ImageDzikir} />
          <Text>Dzikir Pagi</Text>
        </View>
        <View>
          <Image source={{ uri: ImagePetang }} style={styles.ImageDzikir} />
          <Text>Dzikir Petang</Text>
        </View>
        <Text>
          “Hai orang-orang yang beriman, berdzikirlah (dengan menyebut Nama)
          Allah dzikir yang sebanyak-banyaknya. Dan bertasbihlah kepada-Nya di
          waktu pagi dan petang.” (Al-Ahzab : 41-42).
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageTeks: {
    height: screenWidth / 8,
    width: screenWidth / 4,
    marginBottom: screenWidth / 20,
    objectFit: "fill",
  },
  ImageDzikir: {
    height: screenWidth / 5.5,
    width: screenWidth / 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
