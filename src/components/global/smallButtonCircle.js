import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { globalStyles } from "../../styles/global";

const fabButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...globalStyles.fabContainer, ...props.style, ...styles }}
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
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 40,
    bottom: 3,
    textAlign: "center",
    fontFamily: "Inter-Medium",
  },
};

export default fabButton;
