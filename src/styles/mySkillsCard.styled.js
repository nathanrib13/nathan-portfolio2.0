import styled from "styled-components";

export const SkillCardContainer = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-gap: 2rem;
padding: 0 5%;

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    display: block;
    padding: 0;
}

`

export const SkillCard = styled.div`
width: 230px;
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem 0;
border: 1px solid #fff;
border-radius: 1rem;
background-color: ${({theme})=>theme.colors.primary_ligth};

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    width: 100%;
    margin-top: 2rem;
}


`