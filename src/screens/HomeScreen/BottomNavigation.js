import React from "react";
import { View } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Workout from "../../screens/WorkoutScreen/WorkoutScreen";
import Profile from "../ProfileScreen/ProfileScreen";
import Progress from "../ProgressScreen/ProgressScreen";
import { globalStyles, colors } from "../../styles/global";
import { color } from "react-native-reanimated";

const Tabs = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Workout"
      barStyle={{
        backgroundColor: colors.darkGray,
        borderTopWidth: 1,
        borderColor: "#252525",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconSize, iconcolor;

          if (route.name === "Workout") {
            iconName = focused ? "ios-fitness" : "ios-fitness";
            iconSize = focused ? 26 : 24;
          } else if (route.name === "Progress") {
            iconName = focused ? "ios-stats" : "ios-stats";
            iconSize = focused ? 26 : 22;
          } else if (route.name === "Profile") {
            iconName = focused ? "md-person" : "md-person";
            iconSize = focused ? 26 : 22;
          }
          // You can return any component that you like here!
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name={iconName} size={iconSize} color={color} />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
        }}
      />
      <Tabs.Screen
        name="Workout"
        component={Workout}
        options={{
          tabBarLabel: "Workout",
        }}
      />
      <Tabs.Screen
        name="Progress"
        component={Progress}
        options={{
          tabBarLabel: "Progress",
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNav;
