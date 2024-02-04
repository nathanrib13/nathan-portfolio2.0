import styled from "styled-components";


export const ShowCaseParticleContainer = styled.div `
position: relative;
@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    display: none
}
`
export const ShowCaseImageCard = styled.div`
width: max-content;
height: fit-content;
margin-left: 70%;
padding-top: 2rem;
position: relative;
overflow: hidden;
/* background-color: ${({theme})=> theme.colors.primary}; */

>img{
    align-self: flex-end;
        
}

 
`
