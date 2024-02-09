import styled from "styled-components";

export const SkillCardContainer = styled.div`
  max-width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 0 5%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    padding: 0;
  }
`;

export const SkillCard = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  border: 1px solid #fff;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.primary_ligth};
  overflow: hidden;
  transition: border-color 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-top: 2rem;
  }
`;
