import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { colors, globalStyles } from "../../../styles/global";
import LongButton from "../../../components/global/longButtonRound";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import SetupItem from "../../../components/SettingsStackScreen/SetupItem";
import { Formik } from "formik";
import { Picker } from "@react-native-community/picker";

const ProgramSetupScreen = ({ navigation }) => {
  const moment = require("moment");
  const [date, setDate] = useState(moment());
  const [displayDate, setDisplayDate] = useState(null);
  const [oneRepMaxes, setOneRepMaxes] = useState({
    squat: "",
    bench: "",
    deadlift: "",
  });
  const [accessoryExercises, setAccessoryExercises] = useState({
    horizontalPull: "Dumbbell Row",
    verticalPull: "Pull-ups",
    shoulders: "Standing Overhead Press",
  });
  const [modalVisibility, setVisibility] = useState(false);

  const saveData = async (data) => {
    console.log("Saving data...");
    await AsyncStorage.mergeItem("workoutData", JSON.stringify(data));
    console.log("Data was: " + data);
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            fontWeight: "bold",
            color: colors.text,
            alignSelf: "center",
          }}
        >
          {"Program setup".toUpperCase()}
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 5,
            justifyContent: "flex-end",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: colors.text }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisibility}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Calendar
            onDayPress={(day) => {
              setDate(day.dateString);
            }}
            markedDates={{
              [date]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: "gray",
                selectedTextColor: "white",
              },
            }}
          />
        </View>
        <Button
          title="Set"
          onPress={() => {
            const str = moment(date).format("MMMM Do, YYYY");
            setDisplayDate(str);
            setVisibility(false);
          }}
        />
      </Modal>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: colors.green,
              marginBottom: 5,
            }}
          >
            {"General"}
          </Text>
          <SetupItem label="Program Start Date">
            <TextInput
              style={{
                color: colors.text,
                textAlign: "right",
              }}
              onFocus={() => {
                setVisibility(true);
              }}
              placeholderTextColor={colors.green}
              placeholder="Select..."
              value={displayDate}
            />
          </SetupItem>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: colors.green,
              marginBottom: 5,
            }}
          >
            {"One Rep Maxes"}
          </Text>
          <SetupItem label="Squat">
            <TextInput
              style={{
                color: colors.text,
                textAlign: "right",
              }}
              keyboardType="numeric"
              placeholderTextColor={colors.green}
              placeholder="Select..."
              onChangeText={(text) => {
                //change state here.
                setOneRepMaxes({ ...oneRepMaxes, squat: text });
              }}
              value={oneRepMaxes.squat}
            />
          </SetupItem>
          <SetupItem label="Bench">
            <TextInput
              style={{
                color: colors.text,
                textAlign: "right",
              }}
              placeholderTextColor={colors.green}
              placeholder="Select..."
              keyboardType="numeric"
              onChangeText={(text) => {
                //change state here.
                setOneRepMaxes({ ...oneRepMaxes, bench: text });
              }}
              value={oneRepMaxes.bench}
            />
          </SetupItem>
          <SetupItem label="Deadlift">
            <TextInput
              style={{
                color: colors.text,
                textAlign: "right",
              }}
              placeholderTextColor={colors.green}
              placeholder="Select..."
              keyboardType="numeric"
              onChangeText={(text) => {
                //change state here.
                setOneRepMaxes({ ...oneRepMaxes, deadlift: text });
              }}
              value={oneRepMaxes.deadlift}
            />
          </SetupItem>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: colors.green,
              marginBottom: 5,
            }}
          >
            {"Accessory Exercises"}
          </Text>
          <SetupItem label="Shoulders">
            <Picker
              mode="dropdown"
              style={{
                height: 30,
                width: 125,
                color: colors.text,
              }}
              onValueChange={(value) => {
                setAccessoryExercises({
                  ...accessoryExercises,
                  shoulders: value,
                });
              }}
              selectedValue={accessoryExercises.shoulders}
            >
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
          </SetupItem>
          <SetupItem label="Horizontal Pull">
            <Picker
              mode="dropdown"
              style={{
                height: 30,
                width: 125,
                color: colors.text,
              }}
              onValueChange={(value) => {
                setAccessoryExercises({
                  ...accessoryExercises,
                  horizontalPull: value,
                });
              }}
              selectedValue={accessoryExercises.horizontalPull}
            >
              <Picker.Item label="Dumbbell Row" value="Dumbbell Row" />
              <Picker.Item label="Barbell Row" value="Barbell Row" />
              <Picker.Item label="Machine Row" value="Machine Row" />
            </Picker>
          </SetupItem>
          <SetupItem label="Vertical Pull">
            <Picker
              mode="dropdown"
              style={{
                height: 30,
                width: 125,
                color: colors.text,
              }}
              onValueChange={(value) => {
                setAccessoryExercises({
                  ...accessoryExercises,
                  verticalPull: value,
                });
              }}
              selectedValue={accessoryExercises.verticalPull}
            >
              <Picker.Item label="Pull-ups" value="Pull-ups" />
              <Picker.Item label="Chin-Ups" value="Chin-ups" />
              <Picker.Item label="Lat Pulldowns" value="Lat Pulldowns" />
            </Picker>
          </SetupItem>
        </View>
      </SafeAreaView>
      <Button
        onPress={async () => {
          if (
            !moment(date).isValid ||
            oneRepMaxes.squat === "" ||
            oneRepMaxes.bench === "" ||
            oneRepMaxes.deadlift === ""
          ) {
            alert("Please select valid inputs.");
          } else {
            const data = {
              startDate: date,
              oneRepMaxes: oneRepMaxes,
              accessoryExercises: accessoryExercises,
            };
            await saveData(data);
            navigation.goBack();
          }
        }}
        title="Submit"
      />
    </ScrollView>
  );
};

export default ProgramSetupScreen;
