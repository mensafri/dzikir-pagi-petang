import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./screens/Landing";
import Homepage from "./screens/Homepage";
import { ThemeProvider } from "./themes/ThemeProvider";
import DzikirPagi from "./screens/DzikirPagi";
import DzikirPetang from "./screens/DzikirPetang";

const RootNavigator = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
          <RootNavigator.Screen name="Landing" component={Landing} />
          <RootNavigator.Screen name="Homepage" component={Homepage} />
          <RootNavigator.Screen name="Pagi" component={DzikirPagi} />
          <RootNavigator.Screen name="Petang" component={DzikirPetang} />
        </RootNavigator.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
