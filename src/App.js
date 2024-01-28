import React from "react";
import {Container, MainBody}  from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import ShowCase from "./components/showCase";
import { MySkills } from "./components/mySkills";
import { MyProjects } from "./components/myProjects";



function App() {
  return (
    <ThemeProvider theme={theme}>
     <MainBody>
      <Container>
        <ShowCase/>
        <MySkills/>
        <MyProjects/>
      </Container>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
