import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { globalStyles, colors, headerStyles } from "../../styles/global";
import CalendarScreen from "./MainStackScreens/CalendarScreen";

import SettingsStackScreen from "./ModalStackScreens/SettingsStackScreen";
import NoWorkoutsScreen from "./ModalStackScreens/NoWorkoutsScreen";
import AsyncStorage from "@react-native-community/async-storage";
import { AppLoading } from "expo";

const MainStack = createStackNavigator();
const ModalStack = createStackNavigator();

const ExerciseScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Exercise here!!</Text>
      <Button
        title="Navigate"
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
    </View>
  );
};

const RootScreen = () => {
  // State should be set depending on the data within AsyncStorage
  const [ready, setReady] = useState(false);

  //check data within AsyncStorage
  useEffect(() => {
    const checkData = async () => {
      await AsyncStorage.getItem("workoutData").then((value) => {
        const myData = JSON.parse(value);
        if (myData.startDate) {
          console.log("Values are found showing workout page");
          setReady(true);
        } else {
          console.log("Values are not found showing no workouts page");
          setReady(false);
        }
      });
    };

    checkData();
  });

  if (ready) {
    return (
      <MainStack.Navigator screenOptions={globalStyles.headerStyles}>
        <MainStack.Screen
          name="CalendarScreen"
          component={CalendarScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen name="ExerciseScreen" component={ExerciseScreen} />
      </MainStack.Navigator>
    );
  } else {
    return (
      <ModalStack.Navigator
        headerMode="float"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { ...globalStyles.headerBackgroundColor },
          headerTintColor: "#fff",
          headerTitleStyle: { ...globalStyles.headerTitleStyle },
        }}
      >
        <ModalStack.Screen
          name="NoWorkoutsScreen"
          component={NoWorkoutsScreen}
        />
        <ModalStack.Screen
          screenOptions={{ title: "Workout Settings" }}
          name="SettingsStackScreen"
          component={SettingsStackScreen}
        />
      </ModalStack.Navigator>
    );
  }
};

const WorkoutScreen = () => {
  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
};

export default RootScreen;
