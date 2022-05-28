import React, { useState } from "react";
import { AppRouter } from "./routes/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Switch } from "@mui/material";

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: "#F8D5AF",
      },
    },
  });

  return (
    <>
      <Switch onChange={(e) => setIsDark(!isDark)} />
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};
