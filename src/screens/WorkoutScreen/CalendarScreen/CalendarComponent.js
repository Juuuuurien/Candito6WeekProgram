import React, { useState } from "react";
import { View, Text } from "react-native";

import { CalendarList } from "react-native-calendars";

import AsyncStorage from "@react-native-community/async-storage";

import { globalStyles } from "../../../styles/global";

const calendar = (props) => {
  const moment = require("moment");

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      // console.log(JSON.parse(jsonValue));
      return JSON.parse(jsonValue);
    } catch (e) {
      console.log("ERROR cannot retrieve workoutData");
    }
  };

  getData("workoutData").then((value) => {
    setDate(value.startingDate);
  });

  const [startingDate, setDate] = useState(null);

  const arr = [];

  const obj = {};

  startMoment = moment(startingDate);

  // Create Calendar Marked Dates for Week 1

  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      obj[startMoment.format("YYYY-MM-DD")] = {
        // startingDay: true,
        color: "#1de9b6",
      };
    } else {
      if (i === 7) {
        obj[startMoment.format("YYYY-MM-DD")] = {
          // endingDay: true,
          color: "#1de9b6",
        };
      } else {
        obj[startMoment.format("YYYY-MM-DD")] = {
          color: "#1de9b6",
        };
      }
      startMoment.add(1, "days");
    }
  }

  // Week 2

  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      obj[startMoment.format("YYYY-MM-DD")] = {
        // startingDay: true,
        color: "#b3e5fc",
      };
    } else {
      if (i === 7) {
        obj[startMoment.format("YYYY-MM-DD")] = {
          // endingDay: true,
          color: "#b3e5fc",
        };
      } else {
        obj[startMoment.format("YYYY-MM-DD")] = {
          color: "#b3e5fc",
        };
      }
      startMoment.add(1, "days");
    }
  }

  console.log(obj);

  console.log(startingDate);
  return (
    <CalendarList
      style={{ height: "100%" }}
      pastScrollRange={12}
      markingType={"custom"}
      horizontal={true}
      pagingEnabled={true}
      markedDates={{
        "2020-06-06": {
          customStyles: {
            container: {
              backgroundColor: "#bbdefb",
            },
            text: {
              color: "black",
            },
          },
        },
        "2020-06-07": {
          customStyles: {
            container: {
              backgroundColor: "#bbdefb",
            },
            text: {
              color: "black",
            },
          },
        },
      }}
    ></CalendarList>

    // <View style={globalStyles.container}>
    //   <Text style={globalStyles.textHeader}>This is a test component!</Text>
    //   <Text>{display}</Text>
    //   <Text>{display2}</Text>
    // </View>
  );
};

//depending on the date selected in async storage, need logic to see whether or not the date exists.

export default calendar;
