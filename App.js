import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Font } from "expo";
// import InterBold from "./assets/fonts/Inter-Bold.ttf";
// import InterSemiBold from "./assets/fonts/Inter-SemiBold.ttf";
// import InterMedium from "./assets/fonts/Inter-Medium.ttf";
// import InterRegular from "./assets/fonts/Inter-Regular.ttf";
// import InterLight from "./assets/fonts/Inter-Light.ttf";
import Home from "./screens/Home";
import Details from "./screens/Details";
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const App = () => {
  const [loaded] = useFonts({
    // InterBold,
    // InterSemiBold,
    // InterMedium,
    // InterRegular,
    // InterLight,
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Regular.ttf"),
    InterRegular: require("./assets/fonts/Inter-Light.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
