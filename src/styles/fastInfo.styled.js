import styled, { keyframes } from "styled-components";

const rotateBorder = keyframes`
  0% {
    border-color: #0495F1;
  }
  25% {
    border-color: #EFF3F6;
  }
  50% {
    border-color: #82CCFA;
  }
  75% {
    border-color: #C0C0C0;
  }
  100% {
    border-color: #070B0E;
  }
`;

const shadowInsetCenter = keyframes`
  0% {
    box-shadow: inset 0 0 0 0 transparent;
  }
  100% {
    box-shadow: inset 0 0 14px 2px rgba(255, 255, 255, 1);
  }
`;

export const FastInfoContainer = styled.div`
  padding-top: 85px;
  padding-left: 315px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-height: 3rem;

  > a {
    text-decoration: none;
    padding: 15px 45px;
    background-color: ${({ theme }) => theme.colors.black};
    border: 1px solid white;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.primary};
    animation: ${rotateBorder} 4s linear infinite;
    cursor: pointer;

    &:hover {
      animation: ${shadowInsetCenter} 1s linear both;
    }
  }
`;
