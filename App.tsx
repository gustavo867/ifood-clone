import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from "react-native";
import Themes from "./src/Themes";
import Routes from "./src/routes/routes";

export default function App() {
  const deviceTheme = useColorScheme();

  const theme = Themes.dark;

  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
