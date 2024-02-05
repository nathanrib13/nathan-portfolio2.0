import React from "react"
import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    BlueText,
    Button,
    ParaText,
} from "../styles/global.styled"
import {ServiceContainer} from "../styles/service.styled"
import robot from "../assets/robot.png"
import mobile from "../assets/mobile.png"
import code from "../assets/code.png"

export const Services = () => {
    return(
        <PaddingContainer
        id="services"
        top="5%"
        bottom="10%"
        align="center"
        >
           
            <Heading as="h2" size="h2" top="0.5rem"  align="center">
                <BlueText>Services</BlueText>
            </Heading>  
        <FlexContainer justify="space-between" >
        <ServiceContainer>
            <img src={robot} alt="robo imagem"/>
            <h2 >Robot Integrations</h2>
            <p>I will create robots for picks informations from web and authomatized your tasks and chats </p>
        </ServiceContainer>
        <ServiceContainer>
           <img src={code} alt="robo imagem"/>
            <h2 >Developing</h2>
            <p>develping websites and portfolios for you motherfuck</p>
        </ServiceContainer>
        <ServiceContainer>
          <img src={mobile} alt="robo imagem"/>
            <h2 >Applications</h2>
            <p>Creating mobile apps for androind, lauching at the play store</p>
        </ServiceContainer>
        </FlexContainer>

          
        </PaddingContainer>
    )
}