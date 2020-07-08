import React from "react";
import { StyleSheet } from "react-native";

export const colors = {
  text: "#ffffff",
  headerText: "#798187",
  darkerGray: "#282931",
  darkGray: "#32343e",
  gray: "#404c54",
  lightGray: "#707c84",
  darkGreen: "#446b6a",
  green: "#478d73",
  vibrantGreen: "#5ba95d",
};

export const globalStyles = StyleSheet.create({
  // ====================== Containers ========================
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // ====================== Text ========================
  textHeader: {
    padding: 10,
    fontSize: 36,
    fontFamily: "Inter-Regular",
    color: colors.headerText,
  },
  textSubHeader: {
    fontFamily: "Inter-Light",
    padding: 5,
    fontSize: 24,
    color: colors.text,
  },
  // ====================== Buttons ========================
  fabContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: colors.green,
    borderRadius: 100,
    elevation: 6,
  },
  fabSquareContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: colors.green,
    borderRadius: 15,
    elevation: 6,
  },
  longButtonRound: {
    backgroundColor: colors.vibrantGreen,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignContent: "center",
  },
  // ====================== Headers ========================
  headerBackgroundColor: {
    backgroundColor: colors.darkGray,
  },
  headerTitleStyle: {
    fontFamily: "Inter-Medium",
  },
});

export const headerStyles = {
  headerShown: true,
  headerTitleAlign: "center",
  headerStyle: { ...globalStyles.headerBackgroundColor },
  headerTintColor: "#fff",
  headerTitleStyle: { ...globalStyles.headerTitleStyle },
};
