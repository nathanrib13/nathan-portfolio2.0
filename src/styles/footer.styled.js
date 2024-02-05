import styled from "styled-components";

export const ContactCard = styled.div`
margin-top: 5rem;
display: flex;
flex-direction: column;
height: auto;
align-items: center;
padding: 1rem 1rem;
gap: 35px;


> h2 {
    margin-top: -25px;
    margin-bottom: 10px;
    color: ${({theme})=>theme.colors.para_text_color};
}
>svg{ 
    width: 68px;
    height: 68px;
    color: ${({theme})=>theme.colors.primary};
    text-align: justify;
    margin-bottom: 15px ;
}

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    width: 90%;
    margin: auto
}


`
export const FooterRights = styled.footer`
display: flex;
width: 100%;
justify-content: space-between;
padding: 24px 45px;
margin-bottom: -55px;
background-color: #151515;



> div{
    display: flex;
    gap: 8px;
}
>p{
    color: ${({theme})=>theme.colors.para_text_color    };;
}

`

