import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { globalStyles } from "../../styles/global";

const longButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...globalStyles.longButtonRound, ...styles, ...props.style }}
    >
      {props.children}
      <Text style={{ ...styles.textStyle, ...props.textStyle }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter-Bold",
  },
};

export default longButton;
