import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ContactCard } from "../styles/contact.styled";
import {
  BlueText,
  FlexContainer,
  Heading,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";

export const Contact = () => {
  return (
    <PaddingContainer id="contact" top="5%" bottom="10%">
      <Heading as="h4" size="h4" align="center">
        Contact
      </Heading>
      <Heading as="h2" size="h2" align="center" top="0.5rem">
        Where <BlueText>I am</BlueText>
      </Heading>
      <FlexContainer justify="space-between">
        <ContactCard
          onClick={() => {
            window.open(
              "https://www.google.com.br/maps/place/Vila+da+Penha,+Rio+de+Janeiro+-+RJ/@-22.8387059,-43.3151196,16z/data=!4m6!3m5!1s0x997c9ff0d73881:0x55c84d080e5917e9!8m2!3d-22.844146!4d-43.3094211!16s%2Fm%2F0cz94r5?entry=ttu",
              "_blank"
            );
          }}
        >
          <FaLocationDot />
          <h2>Location</h2>
          <ParaText>Rio de Jnaeiro, RJ</ParaText>
        </ContactCard>
        <ContactCard
          onClick={() => {
            window.open("mailto:nathan.ribeiros7@gmail.com", "_blank");
          }}
        >
          <MdEmail />
          <h2>Email</h2>
          <ParaText>nathan.ribeiros7@gmail.com</ParaText>
        </ContactCard>
        <ContactCard
          onClick={() => {
            window.open("https://wa.me/21980870945", "_blank");
          }}
        >
          <IoLogoWhatsapp />
          <h2>WhatsApp</h2>
          <ParaText>(21) 98087-0945</ParaText>
        </ContactCard>
      </FlexContainer>
    </PaddingContainer>
  );
};
