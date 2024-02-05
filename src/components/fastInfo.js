import React from "react";
import resume from '../assets/cv/cv-nathan.pdf'
import { FastInfoContainer } from "../styles/fastInfo.styled";
import { 
   Button 
} from "../styles/global.styled" 

export const FastInfo = () => {
    return(
        <FastInfoContainer>
            <Button href="https://wa.me/21980870945"download target="_blank">WhatsApp</Button>
            <Button href={resume} download>Download CV</Button>       
        </FastInfoContainer>
    )
}