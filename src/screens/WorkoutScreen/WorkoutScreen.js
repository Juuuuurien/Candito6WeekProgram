import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { globalStyles } from "../../styles/global";
import CalendarScreen from "./MainStackScreens/CalendarScreen";
import SettingsStackScreen from "./SetupStackScreens/SettingsStackScreen";
import NoWorkoutsScreen from "./SetupStackScreens/NoWorkoutsScreen";
import AsyncStorage from "@react-native-community/async-storage";

import { WorkoutScreenContext } from "./WorkoutScreenContext";

// === WOKROUT SCREEN === //
// WorkoutScreen contains 2 screens that are displayed depending on the state of AsyncStorage.

// If data is present, then the CalendarScreen is shown, as the user has started a program.
// If no data is present, then the SetupScreen is shown, as the use has not started a program.

// Each screen is a stack navigator, and which screen is shown depends on state.

const MainStack = createStackNavigator();
const SetupStack = createStackNavigator();

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
  const [dataPresent, setDataPresent] = useState(false);

  // Check AsyncStorage for user data.
  useEffect(() => {
    const checkData = async () => {
      await AsyncStorage.getItem("workoutData").then((value) => {
        const myData = JSON.parse(value);
        if (myData.startDate) {
          setDataPresent(true);
        } else {
          setDataPresent(false);
        }
      });
    };
    checkData();
  });

  // If
  if (dataPresent) {
    return (
      <WorkoutScreenContext.Provider value={setDataPresent}>
        <MainStack.Navigator screenOptions={globalStyles.headerStyles}>
          <MainStack.Screen
            name="CalendarScreen"
            component={CalendarScreen}
            initialParams={{ dataPresentState: setDataPresent }}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        </MainStack.Navigator>
      </WorkoutScreenContext.Provider>
    );
  } else {
    return (
      <SetupStack.Navigator
        headerMode="float"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { ...globalStyles.headerBackgroundColor },
          headerTintColor: "#fff",
          headerTitleStyle: { ...globalStyles.headerTitleStyle },
        }}
      >
        <SetupStack.Screen
          name="NoWorkoutsScreen"
          component={NoWorkoutsScreen}
        />
        <SetupStack.Screen
          screenOptions={{ title: "Workout Settings" }}
          name="SettingsStackScreen"
          component={SettingsStackScreen}
        />
      </SetupStack.Navigator>
    );
  }
};

export default RootScreen;
