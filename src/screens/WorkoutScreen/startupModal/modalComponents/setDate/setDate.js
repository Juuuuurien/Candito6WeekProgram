import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import AsyncStorage from "@react-native-community/async-storage";
import BackButton from "../../../../../components/global/backButton";
import NextButton from "../../../../../components/global/nextButton";
import { globalStyles } from "../../../../../styles/global";

const setDate = ({ navigation }) => {
  const [selectedDay, setDay] = useState(null);

  let saveWorkoutData = async (value) => {
    try {
      const selectedDayJSON = JSON.stringify(value);
      await AsyncStorage.mergeItem("workoutData", selectedDayJSON);
    } catch (err) {
      console.log("ERROR. There was an error initializing date in workoutData");
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={globalStyles.textHeader}>
          When do you want to start the program?
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <Calendar
          onDayPress={(day) => {
            setDay(day.dateString);
          }}
          markedDates={{
            [selectedDay]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "lightgreen",
              selectedTextColor: "white",
            },
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <BackButton
          style={{ flex: 1 }}
          textStyle={{ alignItems: "flex-start" }}
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />
        <NextButton
          style={{ flex: 1 }}
          textStyle={{ alignItems: "flex-end" }}
          onPress={() => {
            navigation.navigate("setORM");
            if (selectedDay) {
              const selectedDayObj = {
                startingDate: selectedDay,
              };
              saveWorkoutData(selectedDayObj);
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    ...globalStyles.container,
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  buttonContainer: { ...globalStyles.container, flexDirection: "row", flex: 1 },
});

export default setDate;
