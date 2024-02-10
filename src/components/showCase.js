import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import profilePhoto from "../assets/foguete.png";
import {
  BlueText,
  FlexContainer,
  Heading,
  IconContainer,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import {
  ShowCaseImageCard,
  ShowCaseParticleContainer,
} from "../styles/showCase.styled";
import { FastInfo } from "./fastInfo";

// import { fadeInLeftVariant } from "../utils/variants"

const ShowCase = () => {
  const { t } = useTranslation();
  return (
    <PaddingContainer
      id="home"
      left="3%"
      top="15%"
      rigth="5%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer fullWidthCenter>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Heading as="h1" size="h1" top="3.5rem" bottom="1rem">
            {t("hello")} <BlueText>Nathan Ribeiro</BlueText>
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            {t("professional")}
          </Heading>
          <ParaText as="p" top="1rem" bottom="4rem">
            {t("shortExp")}
          </ParaText>
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <a
                rel="noreferrer"
                href="https://linkedin.com/in/devnathanrib/"
                target="_blank"
              >
                <BsLinkedin color="white" />
              </a>
            </IconContainer>
            <IconContainer size="1.5rem">
              <a
                rel="noreferrer"
                href="https://www.instagram.com/dev.nathanribeiro/"
                target="_blank"
              >
                <BsInstagram color="white" />
              </a>
            </IconContainer>
            <IconContainer size="1.5rem">
              <a
                rel="noreferrer"
                href="https://github.com/nathanrib13/"
                target="_blank"
              >
                <BsGithub color="white" />
              </a>
            </IconContainer>
            <IconContainer size="1.5rem">
              <a
                rel="noreferrer"
                href="https://linkedin.com/in/devnathanrib/"
                target="_blank"
              >
                <BsTwitter color="white" />
              </a>
            </IconContainer>
          </FlexContainer>
        </motion.div>
        <motion.div
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 200, y: -300, opacity: 1, rotate: -45 }} // Ajuste os valores conforme necessário
          transition={{ type: "tween", duration: 5, ease: "easeInOut" }}
          style={{ rotate: 180 }} // Adicionando rotação de 360 graus
        >
          <ShowCaseParticleContainer>
            <ShowCaseImageCard>
              <img src={profilePhoto} alt="logo from nathan" />
            </ShowCaseImageCard>
          </ShowCaseParticleContainer>
        </motion.div>
        <FastInfo></FastInfo>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default ShowCase;
