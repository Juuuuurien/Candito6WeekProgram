import React from "react";
import { View, Text } from "react-native";

const ExerciseScreen = ({ navigation, route }) => {
  console.log(route.params);

  return (
    <View>
      <Text>{route.params.title}</Text>
    </View>
  );
};

export default ExerciseScreen;
