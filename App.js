import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./screens/Landing";
import Homepage from "./screens/Homepage";

const RootNavigator = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
        <RootNavigator.Screen name="Landing" component={Landing} />
        <RootNavigator.Screen name="Homepage" component={Homepage} />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
