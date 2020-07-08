import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CalendarList } from "react-native-calendars";

import { globalStyles } from "../../styles/global";

const MainStack = createStackNavigator();

const CalendarScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Calendar here!!</Text>
      <Button
        title="Navigate"
        onPress={() => {
          navigation.navigate("ExerciseScreen");
        }}
      ></Button>
    </View>
  );
};

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

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="CalendarScreen" component={CalendarScreen} />
      <MainStack.Screen name="ExerciseScreen" component={ExerciseScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
