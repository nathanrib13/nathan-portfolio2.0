import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FooterRights } from "../styles/footer.styled";
import { IconContainer } from "../styles/global.styled";

export const Footer = () => {
  return (
    <FooterRights>
      <p>© Todos os Diretos Reservados - Nathan Ribeiro</p>
      <div>
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
      </div>
    </FooterRights>
  );
};
