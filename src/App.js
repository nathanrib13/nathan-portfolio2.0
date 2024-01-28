import React from "react";
import {Container, MainBody}  from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import ShowCase from "./components/showCase";
import { MySkills } from "./components/mySkills";
import { MyProjects } from "./components/myProjects";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";



function App() {
  return (
    <ThemeProvider theme={theme}>
     <MainBody>
     <Navbar/>
      <Container>
        <ShowCase/>
        <MySkills/>
        <MyProjects/>
        <Footer/>
      </Container>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
