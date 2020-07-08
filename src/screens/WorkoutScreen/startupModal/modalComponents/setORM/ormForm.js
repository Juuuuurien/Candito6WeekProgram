import React from "react";
import { View, ToastAndroid, StyleSheet, TextInput } from "react-native";
import LongButtonRound from "../../../../../components/global/longButtonRound";
import { Formik } from "formik";

const form = ({ onSave }) => {
  // getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("workoutData");
  //     const data = jsonValue != null ? JSON.parse(jsonValue) : null;

  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const showToast = () => {
    ToastAndroid.showWithGravity(
      "Saved",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };
  return (
    <Formik
      initialValues={{ squat: "", bench: "", deadlift: "" }}
      onSubmit={(values) => {
        onSave(values);
        showToast();
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <View style={{ flex: 3 }}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Squat: x lbs"
              onChangeText={handleChange("squat")}
              value={values.squat}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Bench: x lbs"
              onChangeText={handleChange("bench")}
              value={values.bench}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Deadlift: x lbs"
              onChangeText={handleChange("deadlift")}
              value={values.deadlift}
            />
          </View>
          <View style={{ flex: 3, marginTop: "20%" }}>
            <LongButtonRound
              text="Save"
              onPress={handleSubmit}
            ></LongButtonRound>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: "rgb(180,180,185)",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    margin: 3,
    backgroundColor: "#F6F6F6",
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

export default form;
