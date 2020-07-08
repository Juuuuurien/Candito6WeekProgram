import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { globalStyles, headerStyles } from "../../styles/global";

const Progress = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the ProgressScreen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const ProgressScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={Progress}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: { ...globalStyles.headerBackgroundColor },
        headerTintColor: "#fff",
        headerTitleStyle: { ...globalStyles.headerTitleStyle },
      }}
    >
      <Stack.Screen name="Progress" component={Progress} headerMode="float" />
    </Stack.Navigator>
  );
};

export default ProgressScreen;
