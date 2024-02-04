import styled from "styled-components";

export const Navbarcontainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    transition: all 0.3s ease-in ;  
    background-color: ${({theme})=> theme.colors.black};
    border-bottom: 1px solid ${({theme})=> theme.colors.white};;

`

export const Logo = styled.p`
    font-size: 1.7rem;
    font-weight: ${({theme})=> theme.fonts.weigth.medium};
    color: white;
`

export const LanguageImg = styled.img`
width: 25px;
height: 25px;
margin-right: 10px;
`
export const MenuIcon = styled.a`
        color: ${({theme})=> theme.colors.secondary};
        font-size: 1.6rem;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
`
export const NavMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary_light};
    z-index: 99;

`
export const MenuItem = styled.a`
color: #fff;
font-size: 2.5rem;
margin-top: 3rem;
cursor: pointer;
text-decoration: none;

`
