import styled from "styled-components";


export const ShowCaseParticleContainer = styled.div `
position: relative;
@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    display: none
}
`
export const ShowCaseImageCard = styled.div`
display:flex;
border: 1px solid white;
width: max-content;
height: fit-content;
padding-top: 2rem;
border-radius: 1rem;
position: relative;
overflow: hidden;

>img{
    align-self: flex-end;
    max-width: 250px;
    max-height: 350px;
}
`
