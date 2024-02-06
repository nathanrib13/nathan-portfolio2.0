import React from "react";
import { ThemeProvider } from "styled-components";
import { Contact } from "./components/contact";
import { Expirience } from "./components/experience";
import { Footer } from "./components/footer";
import { MyProjects } from "./components/myProjects";
import { MySkills } from "./components/mySkills";
import { Navbar } from "./components/navbar";
import { Services } from "./components/services";
import ShowCase from "./components/showCase";
import { Container, MainBody } from "./styles/global.styled";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />
        <Container>
          <ShowCase />
          <MySkills />
          <Expirience />
          <MyProjects />
          <Services />
          <Contact />
          <Footer />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
