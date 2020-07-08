import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { globalStyles } from "../../styles/global";

const fabButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles, ...props.style }}
    >
      {props.children}
      <Text
        style={{
          ...styles.textStyle,
          ...globalStyles.fabSquareContainer,
          ...props.textStyle,
        }}
      >
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
    borderRadius: 20,
  },
};

export default fabButton;
