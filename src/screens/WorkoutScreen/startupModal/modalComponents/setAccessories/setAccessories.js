import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AccesoryPicker from "./accessoryPicker";
import AsyncStorage from "@react-native-community/async-storage";
import BackButton from "../../../../../components/global/backButton";
import { globalStyles } from "../../../../../styles/global";

const welcome = ({ navigation, setVisibility }) => {
  const [submit, handleSubmit] = useState(null);

  let saveWorkoutData = async (value) => {
    try {
      const accessoryExercises = { accessoryExercises: value };
      const accJSON = JSON.stringify(accessoryExercises);
      await AsyncStorage.mergeItem("workoutData", accJSON);
    } catch (err) {
      console.log("ERROR. There was an error initializing date in workoutData");
      console.log(err);
    }
  };

  return (
    <View style={{ ...globalStyles.container, flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 2 }}>
        <Text style={globalStyles.textHeader}>Accessory exercises.</Text>
      </View>
      <View style={{ flex: 5 }}>
        <Text style={globalStyles.textSubHeader}>
          Which accessory exercises do you want to perform?
        </Text>
        <AccesoryPicker onSave={saveWorkoutData} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <BackButton
          style={{ flex: 1 }}
          textStyle={{ alignItems: "flex-start" }}
          onPress={() => {
            navigation.navigate("setORM");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  finishButton: {
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    height: 5,
  },
});

export default welcome;
