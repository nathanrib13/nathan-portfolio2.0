import React from "react";
import {Container, MainBody}  from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
     <MainBody>
      <Container/>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
