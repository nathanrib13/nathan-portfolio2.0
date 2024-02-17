import React from "react";
import code from "../assets/code.png";
import mobile from "../assets/mobile.png";
import robot from "../assets/robot.png";
import {
  BlueText,
  FlexContainer,
  Heading,
  PaddingContainer,
} from "../styles/global.styled";
import { ServiceContainer } from "../styles/service.styled";

export const Services = () => {
  return (
    //put some animation here
    <PaddingContainer id="services" top="5%" bottom="10%" align="center">
      <Heading as="h4" size="h4">
        MY SERVICES
      </Heading>
      <Heading as="h2" size="h2" top="0.5rem">
        What <BlueText>I can do</BlueText>
      </Heading>
      <FlexContainer justify="space-between">
        <ServiceContainer>
          <img src={robot} alt="robo imagem" />
          <h2>Robot Integrations</h2>
          <p>
            I will create robots for picks informations from web and
            authomatized your tasks and chats{" "}
          </p>
        </ServiceContainer>
        <ServiceContainer>
          <img src={code} alt="robo imagem" />
          <h2>Developing</h2>
          <p>Developing websites and portfolios for you motherfuck</p>
        </ServiceContainer>
        <ServiceContainer>
          <img src={mobile} alt="robo imagem" />
          <h2>Applications</h2>
          <p>Creating mobile apps for androind, lauching at the play store</p>
        </ServiceContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};
