import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Next = (props) => {
  return (
    <TouchableOpacity style={{ ...props.style }} onPress={props.onPress}>
      <View style={{ ...props.textStyle }}>
        <Text style={{ ...styles.textColor }}>Next</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "#455A64",
  },
});

export default Next;
