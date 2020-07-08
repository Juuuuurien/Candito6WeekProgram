import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./startupModal/modalComponents/WelcomeScreen";

const Stack = createStackNavigator();

const ModalStack = () => {
  <Stack.Navigator initialRouteName="Welcome" mode="modal">
    <Stack.Screen name="Welcome">
      {() => {
        return (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Hello from stack modal!!</Text>
          </View>
        );
      }}
    </Stack.Screen>
  </Stack.Navigator>;
};

export default ModalStack;
