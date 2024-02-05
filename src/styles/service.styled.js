import styled from "styled-components";

export const ServiceContainer = styled.div`
margin-top: 5rem;
display: flex;
flex-direction: column;
width: 350px;
height: auto;
align-items: flex-start;
padding: 1rem 1rem;
border: 2px solid ${({theme})=>theme.colors.para_text_color};
border-radius: 1rem;
background-color: ${({theme})=>theme.colors.primary_ligth};
gap: 25px;
position: relative;
overflow: hidden;
transition: border-color 0.2s ease; 
&:hover {
    border-color: ${({theme})=>theme.colors.primary};
}


>img{
margin-top: -35px;
margin-left: -45px;
max-width: 155px;
}
> h2 {
    margin-top: -25px;
    margin-bottom: 10px;
    color: ${({theme})=>theme.colors.primary};
}
>p{ 
    color: ${({theme})=>theme.colors.para_text_color};
    text-align: justify;
    margin-bottom: 15px ;
}


@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    width: 90%;
    margin: auto
}

`
