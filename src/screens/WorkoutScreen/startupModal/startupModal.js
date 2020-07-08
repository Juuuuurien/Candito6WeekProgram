import React, { useState, useRef } from "react";
import { View, Modal } from "react-native";

// Modal Components:
import Welcome from "./modalComponents/WelcomeScreen";
import SetDate from "./modalComponents/setDate/setDate";
import SetORM from "./modalComponents/setORM/setORMs";
import SetAccessories from "./modalComponents/setAccessories/setAccessories";

import WorkoutScreenContext from "../workoutScreenContext";

import CircleButton from "../../../components/global/smallButtonCircle";

import { globalStyles } from "../../../styles/global";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const startupModal = (props) => {
  const modalStack = createStackNavigator();

  return (
    <View style={globalStyles.container}>
      <WorkoutScreenContext.Consumer>
        {(context) => {
          return (
            <Modal
              animationType="slide"
              transparent={true}
              visible={context.visibility}
            >
              <modalStack.Navigator
                mode="modal"
                initialRouteName="Welcome"
                screenOptions={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                  headerShown: false,
                }}
              >
                <modalStack.Screen name="Welcome" component={Welcome} />
                <modalStack.Screen name="setDate" component={SetDate} />
                <modalStack.Screen name="setORM" component={SetORM} />
                <modalStack.Screen
                  name="setAccessories"
                  component={SetAccessories}
                />
              </modalStack.Navigator>
              <CircleButton
                text="x"
                textStyle={{ fontSize: 26 }}
                style={{
                  height: 36,
                  width: 36,
                  right: "3%",
                  top: "2%",
                  position: "absolute",
                }}
                onPress={() => {
                  context.setVisibility(false);
                }}
              />
            </Modal>
          );
        }}
      </WorkoutScreenContext.Consumer>
    </View>
  );
};

export default startupModal;
