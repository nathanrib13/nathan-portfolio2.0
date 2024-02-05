import React from "react"
import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    BlueText,
    Button,
    IconContainer 

} from "../styles/global.styled"
import { FaLocationDot } from "react-icons/fa6";
import { ContactCard, FooterRights} from "../styles/footer.styled"
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import {BsLinkedin, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs"



export const Footer = () => {
    return(
        <PaddingContainer
        id="contact"
        top="5%"
        bottom="10%"
        >
            <Heading as="h4" size="h4" align="center">
                    Contact 
            </Heading>
            <Heading as="h2" size="h2" align="center" top="0.5rem">
                    Where <BlueText>I am</BlueText>
            </Heading>
            <FlexContainer justify="space-between" >
        <ContactCard>
        <FaLocationDot />
            <h2 >Location</h2>
            
        </ContactCard>
        <ContactCard>
        <MdEmail />
            <h2 >Email</h2>
            
        </ContactCard>
        <ContactCard>
            <IoLogoWhatsapp />
            <h2 >WhatsApp</h2>
            
        </ContactCard>
        </FlexContainer>
     
            <FooterRights>
                
            <p>
            © Todos os Diretos Reservados - Nathan Ribeiro.
            </p>
        <div>
            <IconContainer color="white" size="1.5rem">
                        <a rel= "noreferrer" href="https://linkedin.com/in/devnathanrib/" target="_blank">    
                        <BsLinkedin color="white"/>
                        </a>
            </IconContainer>

            <IconContainer size="1.5rem">
                    <a rel= "noreferrer" href="https://www.instagram.com/dev.nathanribeiro/" target="_blank">
                        <BsInstagram color="white" />
                    </a>
            </IconContainer>
                    
            <IconContainer  size="1.5rem">
                    <a  rel= "noreferrer" href="https://github.com/nathanrib13/" target="_blank">
                        <BsGithub color="white"/>
                        </a>
            </IconContainer>

            <IconContainer size="1.5rem">
                    <a  rel= "noreferrer" href="https://linkedin.com/in/devnathanrib/" target="_blank">
                        <BsTwitter color="white" />
                    </a>
            </IconContainer>
                    </div>
            </FooterRights>
        </PaddingContainer>
    )
}