import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import SquareButton from "../../../components/global/roundedSquareButton";
import { globalStyles, colors } from "../../../styles/global";
import { Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const NoWorkoutsScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        ...globalStyles.container,
        backgroundColor: colors.darkerGray,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ ...styles.textLine, fontWeight: "bold", fontSize: 16 }}>
          You haven't started your 6 week program yet.
        </Text>
        <Text style={{ ...styles.textLine, paddingBottom: 35 }}>
          Press the '+' button to start one!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsStackScreen")}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ ...styles.textLine }}>
            <Fontisto name="plus-a" size={26} color={colors.green} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLine: { padding: 5, fontFamily: "Inter-Regular", color: colors.text },
});

export default NoWorkoutsScreen;
