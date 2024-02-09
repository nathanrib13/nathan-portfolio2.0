import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Container,
  FlexContainer,
  PaddingContainer,
} from "../styles/global.styled";
import {
  LanguageImg,
  Logo,
  MenuIcon,
  Navbarcontainer,
} from "../styles/navbar.styled";
import { NavMenu } from "./layouts/navMenu";

export const Navbar = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentlanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentlanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbarcontainer bgColor="transparent">
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" responsiveFlex>
            <Logo>{t("header")}</Logo>
            <MenuIcon>
              <LanguageImg
                onClick={handleChangeLanguage}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brazilian_Flag_-_round.svg/2048px-Brazilian_Flag_-_round.svg.png"
              />
              <LanguageImg src="https://static.vecteezy.com/system/resources/previews/013/743/592/original/united-states-flag-round-icon-american-flag-png.png" />
              <GiHamburgerMenu
                onClick={() => {
                  setOpenMenu(true);
                }}
              />
            </MenuIcon>
          </FlexContainer>
        </Container>
        {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
      </PaddingContainer>
    </Navbarcontainer>
  );
};
