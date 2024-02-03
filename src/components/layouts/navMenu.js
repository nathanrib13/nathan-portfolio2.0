import React from "react"
import { MenuIcon, MenuItem, NavMenuContainer } from "../../styles/navbar.styled"
import { FlexContainer, PaddingContainer } from "../../styles/global.styled"
import {AiOutlineClose} from 'react-icons/ai'

export const NavMenu = ({setOpenMenu}) => {
    return(
        <NavMenuContainer>
            <PaddingContainer left="5%" right="5%" top="2rem">
                <FlexContainer justify="flex-end" responsiveFlex>
                    <MenuIcon onClick={()=>setOpenMenu(false)}>                    
                        <AiOutlineClose/>
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

            <PaddingContainer top="8%">
                <FlexContainer direction="column" align="center" responsiveFlex>
                    <MenuItem href="#home" onClick={()=>setOpenMenu(false)}>Home</MenuItem>
                    <MenuItem href="#skills" onClick={()=>setOpenMenu(false)}>My Skills</MenuItem>
                    <MenuItem href="#projects" onClick={()=>setOpenMenu(false)}>My Projects</MenuItem>
                    <MenuItem href="#contact" onClick={()=>setOpenMenu(false)}>Contact</MenuItem>
                </FlexContainer>

            </PaddingContainer>

        </NavMenuContainer>
        
    )

}