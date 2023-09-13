import { LinearProgress, Stack, ThemeProvider } from "@mui/joy";
import Logo from "/public/SVG/Login/LinkdineLogo.svg";
import React from "react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    stackBg: {
      primary: "#fff",
    },
  },
});
function Load() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
        <Stack
          spacing={5}
          width={"25rem"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Logo className={`w-32`} />
          <LinearProgress value={50} size="lg" sx={{ width: "25rem" }} />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default Load;
