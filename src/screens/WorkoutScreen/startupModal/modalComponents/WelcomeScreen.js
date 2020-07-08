import React, { useState, useRef } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import LongButtonRound from "../../../../components/global/longButtonRound";

import { globalStyles } from "../../../../styles/global";

const welcome = ({ navigation }) => {
  const saveWorkoutData = async (value) => {
    try {
      const workoutDataJSON = JSON.stringify(value);
      await AsyncStorage.setItem("workoutData", workoutDataJSON);
    } catch (err) {
      console.log("ERROR. There was an error initializing empty workoutData");
      console.log(err);
    }
  };

  console.log("rendering");

  return (
    <View style={{ flex: 1, padding: 35 }}>
      <View style={{ justifyContent: "center", flex: 6 }}>
        <Text style={{ ...globalStyles.textHeader, textAlign: "center" }}>
          To start a program, we need to set some things up.
        </Text>
      </View>
      <View style={{ flex: 5 }}>
        <LongButtonRound
          text="Continue"
          onPress={() => {
            navigation.navigate("setDate");
            console.log("navigating");
            const initialData = {
              startingDate: 0,
              oneRepMaxes: 0,
              accessoryExercises: 0,
            };

            saveWorkoutData(initialData);
          }}
        ></LongButtonRound>
      </View>
    </View>
  );
};

export default welcome;
