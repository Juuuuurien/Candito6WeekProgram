import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { globalStyles, colors, headerStyles } from "../../styles/global";
import AddWorkoutScreen from "./addWorkoutScreen/addWorkoutScreen";
import WorkoutScreenContext from "./workoutScreenContext";
import WorkoutCalendar from "./CalendarScreen/CalendarComponent";
import SettingsModal from "./SettingsModal";
import CalendarScreen from "./MainStackScreens/CalendarScreen";

import SettingsStackScreen from "./ModalStackScreens/SettingsStackScreen";
import NoWorkoutsScreen from "./ModalStackScreens/NoWorkoutsScreen";
import AsyncStorage from "@react-native-community/async-storage";
import { AppLoading } from "expo";

// const Workout = () => {
//   const [startDate, setStartDate] = useState(false);
//   const [visibility, setVisibility] = useState(false);

//   const WorkoutProvider = (props) => {
//     return (
//       <WorkoutScreenContext.Provider
//         value={{
//           setStartDate: setStartDate,
//           setVisibility: setVisibility,
//           visibility: visibility,
//         }}
//       >
//         {props.children}
//       </WorkoutScreenContext.Provider>
//     );
//   };

//   if (!startDate) {
//     return (
//       <View style={{ flex: 1 }}>
//         <WorkoutProvider>
//           <AddWorkoutScreen />
//         </WorkoutProvider>
//       </View>
//     );
//   } else {
//     return (
//       <View style={{ flex: 1 }}>
//         <WorkoutCalendar></WorkoutCalendar>
//       </View>
//     );
//   }
// };

// const Stack = createStackNavigator();

// const WorkoutScreen = () => {
//   //get current date for header title.
//   const moment = require("moment");
//   const today = moment().format("dddd, MMMM Do YYYY");

//   return (
//     <Stack.Navigator
//       initialRouteName={Workout}
//       screenOptions={{
//         title: today,
//         headerShown: true,
//         headerTitleAlign: "center",
//         headerStyle: { ...globalStyles.headerBackgroundColor },
//         headerTintColor: "#fff",
//         headerTitleStyle: { ...globalStyles.headerTitleStyle },
//         cardStyle: { backgroundColor: colors.darkerGray },
//       }}
//     >
//       <Stack.Screen name="Workout" component={Workout} headerMode="float" />
//       <Stack.Screen
//         name="SettingsModal"
//         component={SettingsModal}
//         headerMode="float"
//       />
//     </Stack.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   modalBackgroundView: {
//     backgroundColor: "#5DB075",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalView: {
//     width: "90%",
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     elevation: 5,
//   },
//   buttonText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//   },
//   addPrompt: {
//     fontSize: 18,
//   },
// });

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
