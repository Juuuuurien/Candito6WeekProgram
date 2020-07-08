import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import ORMForm from "./ormForm";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../../../styles/global";
import NextButton from "../../../../../components/global/nextButton";
import BackButton from "../../../../../components/global/backButton";

const showToast = () => {
  ToastAndroid.show("Saved", ToastAndroid.SHORT);
};

let saveWorkoutData = async (value) => {
  try {
    const oneRepMaxes = { oneRepMaxes: value };
    const ormJSON = JSON.stringify(oneRepMaxes);
    await AsyncStorage.mergeItem("workoutData", ormJSON);
    showToast();
  } catch (err) {
    console.log("ERROR. There was an error initializing date in workoutData");
    console.log(err);
  }
};

const welcome = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ ...globalStyles.container, marginTop: "15%" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 5 }}>
          <Text style={globalStyles.textHeader}>One Rep Maxes.</Text>
          <View style={{ flex: 1, marginTop: "20%" }}>
            <Text style={globalStyles.textSubHeader}>
              Enter your one rep maxes for the following exercises.
            </Text>
            <ORMForm onSave={saveWorkoutData} />
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", top: 20 }}>
          <BackButton
            style={{ flex: 1 }}
            textStyle={{ alignItems: "flex-start" }}
            onPress={() => {
              navigation.navigate("setDate");
            }}
          />
          <NextButton
            style={{ flex: 1 }}
            textStyle={{ alignItems: "flex-end" }}
            onPress={() => {
              navigation.navigate("setAccessories");
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default welcome;
