import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Card from "../global/Card";

const Settings = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Card style={styles.settingItem}>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text}>Set Maxes</Text>
        </TouchableOpacity>
      </Card>
      <Card style={styles.settingItem}>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text}>Set Accessories</Text>
        </TouchableOpacity>
      </Card>
      <Card style={styles.settingItem}>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text}>One Rep Max Calculator</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const Stack = createStackNavigator();
const SettingsScreen = () => {
  return (
    <Stack.Navigator initialRouteName={Settings}>
      <Stack.Screen name="Settings" component={Settings} headerMode="float" />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
  },
  touch: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  settingItem: {
    flex: 1,
    margin: (20, 5, 20, 5),
  },
});

export default SettingsScreen;
