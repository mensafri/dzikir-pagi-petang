import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./screens/Landing";
import Homepage from "./screens/Homepage";
import { useFonts } from "expo-font";
import { Amiri_400Regular } from "@expo-google-fonts/amiri";
import {
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { ThemeProvider } from "./themes/ThemeProvider";
import * as SplashScreen from "expo-splash-screen";
import DzikirPagi from "./screens/DzikirPagi";
import DzikirPetang from "./screens/DzikirPetang";
import { useCallback } from "react";

const RootNavigator = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Amiri_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <ThemeProvider>
        <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
          <RootNavigator.Screen name="Landing" component={Landing} />
          <RootNavigator.Screen name="Homepage" component={Homepage} />
          <RootNavigator.Screen name="Pagi" component={DzikirPagi} />
          <RootNavigator.Screen name="Petang" component={DzikirPetang} />
        </RootNavigator.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
