import React, { useEffect, useState } from "react";
import { 
    PaddingContainer,
    FlexContainer,
    Container 
} from "../styles/global.styled"
import { GiHamburgerMenu} from "react-icons/gi";
import { NavMenu } from "./layouts/navMenu";
import {theme} from '../utils/theme'
import { Logo, Navbarcontainer, MenuIcon, LanguageImg } from "../styles/navbar.styled";
import { IoRocketSharp } from "react-icons/io5";


export const Navbar = () =>{ 
    const [openMenu, setOpenMenu] = useState(false)


    return(
        <Navbarcontainer bgColor="transparent">
            <PaddingContainer top="1.2rem" bottom="1.2rem" responsiveLeft="1rem" responsiveRight="1rem">
                <Container>
                    <FlexContainer justify="space-between" responsiveFlex>  
                        <Logo>                    
                        {/* <IoRocketSharp margin-left='-105px'/> */}
                        </Logo>
                        <MenuIcon>
                        <LanguageImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brazilian_Flag_-_round.svg/2048px-Brazilian_Flag_-_round.svg.png"/>
                        <LanguageImg src="https://static.vecteezy.com/system/resources/previews/013/743/592/original/united-states-flag-round-icon-american-flag-png.png"/>
                            <GiHamburgerMenu onClick={()=>{setOpenMenu(true)}}/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}

            </PaddingContainer>

        </Navbarcontainer>
    )
}