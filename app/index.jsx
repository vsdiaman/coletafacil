// index.jsx (ou App.js)
import React from "react";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigator />; // O expo-router vai gerenciar o NavigationContainer automaticamente
}
