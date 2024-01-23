import React from "react";
import {MainBody}  from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
     <MainBody/>
    </ThemeProvider>
  );
}

export default App;
