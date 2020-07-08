import React, { useState, createContext, useContext } from "react";
const defaultContext = {
  dateStartSet: false,
  modalShown: false,
};

const workoutScreenContext = createContext(defaultContext);

export default workoutScreenContext;
