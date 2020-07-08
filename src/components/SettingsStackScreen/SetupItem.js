import React from "react";
import { View, Text } from "react-native";
import { colors, globalStyles } from "../../styles/global";

const SetupItem = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 4,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.darkGreen,
        padding: 10,
        ...props.style,
      }}
    >
      <Text
        style={{
          flex: 2,
          flexDirection: "row",
          color: colors.text,
          justifyContent: "center",
          alignSelf: "center",
          ...props.textStyle,
        }}
      >
        {props.label}
      </Text>
      <View style={{ flex: 1 }}>{props.children}</View>
    </View>
  );
};

export default SetupItem;
