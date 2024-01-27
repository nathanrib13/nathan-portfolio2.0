import React from "react";
import {Container, MainBody}  from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import ShowCase from "./components/showCase";


function App() {
  return (
    <ThemeProvider theme={theme}>
     <MainBody>
      <Container>
        <ShowCase></ShowCase>
      </Container>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
