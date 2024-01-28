import React, { useState } from "react";
import { 
    PaddingContainer,
    FlexContainer,
    Container 
} from "../styles/global.styled"
import { GiHamburgerMenu} from "react-icons/gi";
import { NavMenu } from "./layouts/navMenu";
import {theme} from '../utils/theme'
import { Logo, Navbarcontainer, MenuIcon } from "../styles/navbar.styled";

export const Navbar = () =>{ 
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <Navbarcontainer bgColor="transparent">
            <PaddingContainer top="1.2rem" bottom="1.2rem">
                <Container>
                    <FlexContainer justify="space-between">                        <Logo>
                            NATHAN
                        </Logo>
                        <MenuIcon onClick={()=>{setOpenMenu(true)}}>
                            <GiHamburgerMenu/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}

            </PaddingContainer>

        </Navbarcontainer>
    )
}