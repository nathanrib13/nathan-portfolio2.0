import styled from "styled-components";

export const ContactCard = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  padding: 1rem 8rem;
  cursor: pointer;

  > h2 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.para_text_color};
  }
  > svg {
    width: 68px;
    height: 68px;
    color: ${({ theme }) => theme.colors.primary};
    text-align: justify;
    margin-bottom: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    margin: auto;
  }
`;
