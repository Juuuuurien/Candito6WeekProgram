import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Button,
} from "react-native";
import SettingsStackScreen from "./ModalStackScreens/SettingsStackScreen";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutScreen from "./WorkoutScreen";
import { globalStyles } from "../../styles/global";

const MainStack = createStackNavigator();

const ModalStackNavigator = () => {
  return (
    <MainStack.Navigator headerMode="float">
      <MainStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <MainStack.Screen
        name="SettingsStackScreen"
        component={SettingsStackScreen}
      />
    </MainStack.Navigator>
  );
};

export default ModalStackNavigator;
