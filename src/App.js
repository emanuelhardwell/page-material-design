import React, { useState } from "react";
import { AppRouter } from "./routes/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navbar } from "./components/navbar/Navbar";
import { MaterialUISwitch } from "./components/ui/MaterialUISwitch";

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: "#56A2EF",
      },
    },
  });

  return (
    <>
      <MaterialUISwitch
        sx={{ m: 1 }}
        checked={isDark}
        onChange={(e) => setIsDark(!isDark)}
      />
      <ThemeProvider theme={theme}>
        <Navbar />
        <AppRouter />
      </ThemeProvider>
    </>
  );
};
