import React from "react";
import resume from "../assets/cv/cv-nathan.pdf";
import { FastInfoContainer } from "../styles/fastInfo.styled";

export const FastInfo = () => {
  return (
    <FastInfoContainer>
      <a
        href="https://wa.me/21980870945"
        download
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a href={resume} download>
        Download CV
      </a>
    </FastInfoContainer>
  );
};
