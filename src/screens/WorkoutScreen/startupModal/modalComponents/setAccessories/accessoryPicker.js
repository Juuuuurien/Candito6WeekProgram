import React, { useState, useRef, useContext } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Picker } from "@react-native-community/picker";
import { Formik } from "formik";
import workoutScreenContext from "../../../workoutScreenContext";
import { globalStyles } from "../../../../../styles/global";
import LongButtonRound from "../../../../../components/global/longButtonRound";

const accessoryPicker = ({ onSave, setVisibility }) => {
  let getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("workoutData");
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      // console.log(data);
    } catch (e) {
      console.log(e);
    }

    console.log("Done.");
  };

  return (
    <Formik
      initialValues={{ verticalPull: "", horizontalPull: "", shoulders: "" }}
      onSubmit={(values) => {
        onSave(values);
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <View style={{ flex: 2, marginTop: " 10%" }}>
            <Picker
              mode="dropdown"
              selectedValue={values.verticalPull}
              style={{
                width: "100%",
              }}
              onValueChange={handleChange("verticalPull")}
            >
              <Picker.Item label="(Vertical Pull)" value="" />
              <Picker.Item label="Pull-ups" value="Pull-ups" />
              <Picker.Item label="Chin-Ups" value="Chin-ups" />
              <Picker.Item label="Lat Pulldowns" value="Lat Pulldowns" />
            </Picker>
            <Picker
              selectedValue={values.horizontalPull}
              style={{
                width: "100%",
              }}
              onValueChange={handleChange("horizontalPull")}
            >
              <Picker.Item label="(Horizontal Pull)" value="" />
              <Picker.Item label="Dumbbell Row" value="Dumbbell Row" />
              <Picker.Item label="Barbell Row" value="Barbell Row" />
              <Picker.Item label="Machine Row" value="Machine Row" />
            </Picker>
            <Picker
              selectedValue={values.shoulders}
              style={{
                width: "100%",
              }}
              onValueChange={handleChange("shoulders")}
            >
              <Picker.Item label="(Shoulders)" value="" />
              <Picker.Item
                label="Standing Overhead Press"
                value="Standing Overhead Press"
              />
              <Picker.Item
                label="Seated Overhead Press"
                value="Seated Overhead Press"
              />
              <Picker.Item label="Military Press" value="Military Press" />
              <Picker.Item
                label="Lateral Dumbbell Raise"
                value="Lateral Dumbbell Raise"
              />
            </Picker>
          </View>
          <View style={{ flex: 2 }}>
            <workoutScreenContext.Consumer>
              {(context) => {
                return (
                  <LongButtonRound
                    style={{
                      ...styles.finishButton,
                      width: "100%",
                    }}
                    textStyle={{ fontFamily: "Inter-Bold", fontSize: 26 }}
                    text="Finish"
                    handleSubmitChanger={handleSubmit}
                    onPress={() => {
                      handleSubmit();
                      context.setVisibility(false);
                      context.setStartDate(true);
                    }}
                  />
                );
              }}
            </workoutScreenContext.Consumer>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: globalStyles.container,
  column: { backgroundColor: "red" },
  columnHeader: { textAlign: "center", fontSize: 18 },
});

export default accessoryPicker;
