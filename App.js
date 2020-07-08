import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [appReady, setAppReady] = useState(false);

  // Initialize data on start up.
  const initializeData = async () => {
    try {
      console.log("Checking workoutData...");
      const valueJSON = await AsyncStorage.getItem("workoutData");
      if (valueJSON !== null) {
        console.log("Data in workoutData found!");
        const parsedValue = JSON.parse(valueJSON);
        return parsedValue;
      } else {
        console.log("workoutData undefined, setting blank data now...");
        const data = {
          startDate: null,
          oneRepMaxes: null,
          accessoryExercises: null,
        };
        try {
          const emptyData = JSON.stringify(data);
          await AsyncStorage.setItem("workoutData", emptyData);
        } catch (err) {
          console.log("Error trying to set empty data");
        }
        console.log("Empty data has been set!");
      }
    } catch (e) {
      console.log("Error attempting to retrieve data.");
    }
    console.log("Done retrieving data");
  };

  // let [fontsLoaded] = useFonts({
  //   "Inter-Black": require("./src/assets/fonts/Inter/Inter-Black.ttf"),
  //   "Inter-Bold": require("./src/assets/fonts/Inter/Inter-Bold.ttf"),
  //   "Inter-ExtraBold": require("./src/assets/fonts/Inter/Inter-ExtraBold.ttf"),
  //   "Inter-ExtraLight": require("./src/assets/fonts/Inter/Inter-ExtraLight.ttf"),
  //   "Inter-Light": require("./src/assets/fonts/Inter/Inter-Light.ttf"),
  //   "Inter-Medium": require("./src/assets/fonts/Inter/Inter-Medium.ttf"),
  //   "Inter-Regular": require("./src/assets/fonts/Inter/Inter-Regular.ttf"),
  //   "Inter-SemiBold": require("./src/assets/fonts/Inter/Inter-SemiBold.ttf"),
  //   "Inter-Thin": require("./src/assets/fonts/Inter/Inter-Thin.ttf"),
  // });

  const loadFonts = async () => {
    await Font.loadAsync({
      "Inter-Black": require("./src/assets/fonts/Inter/Inter-Black.ttf"),
      "Inter-Bold": require("./src/assets/fonts/Inter/Inter-Bold.ttf"),
      "Inter-ExtraBold": require("./src/assets/fonts/Inter/Inter-ExtraBold.ttf"),
      "Inter-ExtraLight": require("./src/assets/fonts/Inter/Inter-ExtraLight.ttf"),
      "Inter-Light": require("./src/assets/fonts/Inter/Inter-Light.ttf"),
      "Inter-Medium": require("./src/assets/fonts/Inter/Inter-Medium.ttf"),
      "Inter-Regular": require("./src/assets/fonts/Inter/Inter-Regular.ttf"),
      "Inter-SemiBold": require("./src/assets/fonts/Inter/Inter-SemiBold.ttf"),
      "Inter-Thin": require("./src/assets/fonts/Inter/Inter-Thin.ttf"),
    });
  };

  const loadApp = async () => {
    await loadFonts();
    await initializeData();
    setAppReady(true);
  };

  useEffect(() => {
    loadApp();
  }, []);

  const appTheme = {
    dark: true,
    colors: {
      primary: "#32343e",
      background: "#282931",
      card: "#32343e",
      text: "#ffffff",
      border: "#282931",
    },
  };

  if (appReady) {
    // getData("workoutData").then((data) => console.log(data));
    return (
      <NavigationContainer theme={appTheme}>
        <HomeScreen />
      </NavigationContainer>
    );
  } else {
    return (
      // <View
      //   style={{
      //     alignItems: "center",
      //     justifyContent: "center",
      //     height: "100%",
      //     width: "100%",
      //     backgroundColor: "#5DB075",
      //   }}
      // >
      //   <Text
      //     style={{
      //       fontSize: 56,
      //       color: "white",
      //       fontWeight: "bold",
      //       textAlign: "center",
      //     }}
      //   >
      //     Candito Training
      //   </Text>
      // </View>
      <AppLoading />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
