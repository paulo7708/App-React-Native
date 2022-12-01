import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/Routes";

export default function app() {
  return (
    <>
      <StatusBar barStyle={"auto"} />
      <Routes />
    </>
  );
}
