import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { globalStyles, colors } from "../../../styles/global";
import { Agenda } from "react-native-calendars";
import { programData } from "./ProgramData";

const CalendarScreen = ({ navigation }) => {
  const moment = require("moment");

  const [markedDates, setMarkedDates] = useState({});
  const [screenReady, setScreenReady] = useState(false);
  const [screenData, setScreenData] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const jsonData = await AsyncStorage.getItem("workoutData");
        if (jsonData != null) {
          const data = JSON.parse(jsonData);
          return data;
        } else return null;
      } catch (e) {
        console.log("ERROR attempting to retrieve starting data");
        console.log(e);
      }
    };

    fetch().then((value) => {
      console.log("Fetching data.");
      setScreenData(value);
    });
  }, []);

  // If data is loaded and screen hasn't been initialized, set initial data for the screen.
  if (screenData && !screenReady) {
    const dateMoment = moment(screenData.startDate);
    const itemsObj = {};
    const markedDatesObj = {};
    let count = 0;
    for (let i = 1; i <= 43; i++) {
      if (
        i !== 3 &&
        i !== 7 &&
        i !== 10 &&
        i !== 13 &&
        i !== 16 &&
        i !== 18 &&
        i !== 21 &&
        i !== 24 &&
        i !== 27 &&
        i !== 28 &&
        i !== 30 &&
        i !== 32 &&
        i !== 34 &&
        i !== 35
      ) {
        markedDatesObj[dateMoment.format("YYYY-MM-DD")] = {
          marked: true,
        };
        itemsObj[dateMoment.format("YYYY-MM-DD")] = programData[count];
        count++;
      } else {
        itemsObj[dateMoment.format("YYYY-MM-DD")] = [];
      }
      dateMoment.add(1, "days");
    }
    console.log(itemsObj);
    setMarkedDates(markedDatesObj);
    setItems(itemsObj);
    setScreenReady(true);
  }
  const clearData = async () => {
    await AsyncStorage.clear();
  };

  const AgendaComponent = (day) => {
    return (
      <Agenda
        theme={{
          backgroundColor: colors.darkerGray,
          calendarBackground: colors.darkerGray,
          todayTextColor: colors.green,
          selectedDayBackgroundColor: colors.green,
          dotColor: colors.green,
          textDisabledColor: "#222222",
          dayTextColor: colors.green,
          monthTextColor: "#ffffff",
        }}
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        selected={screenData.startDate}
        pastScrollRange={1}
        futureScrollRange={3}
        minDate={screenData.startDate}
        items={items}
        renderItem={(item) => {
          return (
            <View
              style={{ flexDirection: "row", flex: 1, margin: 10, height: 100 }}
            >
              <TouchableOpacity
                style={{
                  flex: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colors.darkGray,
                  borderRadius: 4,
                  padding: 15,
                  elevation: 5,
                }}
                onPress={() => Alert.alert(item.name)}
              >
                <Text
                  style={{
                    color: colors.lightGray,
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  {item.week}
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: colors.vibrantGreen,
                  borderRadius: 4,
                }}
              />
            </View>
          );
        }}
        renderEmptyDate={() => {
          return (
            <View>
              <TouchableOpacity
                style={{
                  height: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                  margin: 10,
                }}
                onPress={() => Alert.alert(item.name)}
              >
                <Text
                  style={{
                    color: colors.gray,
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Rest day zzz.
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  };

  if (screenReady) {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, paddingTop: 50, backgroundColor: colors.darkGray }}
        >
          <AgendaComponent />
        </View>
        <Button
          title="Clear"
          onPress={() => {
            clearData();
          }}
        ></Button>
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }
};

export default CalendarScreen;
