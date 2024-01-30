import React from "react"
import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer 
} from "../styles/global.styled"
import {BsLinkedin, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs"
import { 
    ShowCaseImageCard, 
    ShowCaseParticleContainer 
} from "../styles/showCase.styled"
import logo2 from "../assets/logo2.png"
import { motion } from "framer-motion"
import { fadeInLeftVariant } from "../utils/variants"

const ShowCase = () => {
    return (
        <PaddingContainer 
            id="home"
            left="3%"
            top="15%"
            rigth="10%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
            responsiveTop="8rem"
        >
        <FlexContainer  fullWidthCenter>
            <motion.div
            initial={{x: -50, opacity:0}}
            whileInView={{x: 0, opacity:1}}
            transition={{type: 'tween', duration:1}}
             >
                <Heading as="h4" size="h4">Hello</Heading>
                <Heading 
                    as="h1" 
                    size="h1" 
                    top="3.5rem" 
                    bottom="1rem">
                    I'm <BlueText>Nathan Ribeiro</BlueText> 
                </Heading>
                <Heading as="h1" size="h1" top="0.5rem" bottom="1rem" >
                    <BlueText>Full Stack Developer</BlueText>
                </Heading>
                <ParaText as="p" top="2rem" bottom="4rem">
                    I'have almost 2 years of expirience developing websites, 
                    web apllications and systems.  
                </ParaText>
                <FlexContainer gap="20px" responsiveFlex>
                    <IconContainer color="white" size="1.5rem">
                        <BsLinkedin/>
                    </IconContainer>
                    <IconContainer color="white" size="1.5rem">
                        <BsInstagram/>
                    </IconContainer>
                    <IconContainer color="white" size="1.5rem">
                        <BsGithub/>
                    </IconContainer>
                    <IconContainer color="white" size="1.5rem">
                        <BsTwitter/>
                    </IconContainer>
                </FlexContainer>
            </motion.div>
            <FlexContainer 
            as={motion.div}
            justify="justify-end"
            initial={{x: 50, opacity:0}}
            whileInView={{x: 0, opacity:1}}
            transition={{type: 'tween', duration:1}}
            >
                <ShowCaseParticleContainer>
                    <ShowCaseImageCard>
                        <img src={logo2} alt="logo from nathan"/>
                    </ShowCaseImageCard>
                </ShowCaseParticleContainer>
            </FlexContainer>
        </FlexContainer>
        </PaddingContainer>
    )
}

    export default ShowCase