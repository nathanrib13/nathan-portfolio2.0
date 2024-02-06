import styled from "styled-components";

export const FooterRights = styled.footer`
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 45px 45px 5px 45px;

  > div {
    display: flex;
    gap: 14px;
  }
  > p {
    color: ${({ theme }) => theme.colors.para_text_color};
  }
`;
