import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { globalStyles } from "../../../styles/global";
import WorkoutScreenContext from "../workoutScreenContext";
import CircleButton from "../../../components/global/smallButtonCircle";
import StartupModal from "../startupModal/startupModal";

const addWorkoutScreen = () => {
  return (
    <View
      style={{
        ...globalStyles.container,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.addPrompt}>You have not started a program.</Text>
      <Text>Tap the Add button to create a 6 week program.</Text>
      <WorkoutScreenContext.Consumer>
        {(context) => {
          return (
            <CircleButton
              style={{ top: "25%" }}
              text="+"
              onPress={() => {
                context.setVisibility(true);
              }}
            />
          );
        }}
      </WorkoutScreenContext.Consumer>
      <StartupModal />
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackgroundView: {
    backgroundColor: "#5DB075",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  addPrompt: {
    fontSize: 18,
  },
});

export default addWorkoutScreen;
