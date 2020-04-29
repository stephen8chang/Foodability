/* ONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
/* Now draws correct polyline route between Berlin and Frankfurt */
import { Navigation } from "react-native-navigation"
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { decode } from "@mapbox/polyline";
import { SearchBar } from 'react-native-elements';
import Navigator from "./routes/homeStack";

export default function App() {
  return (
    Navigator()
  );
};
//export default App;
