import styled from "styled-components";

export const ExpirienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  gap: 22px;

  > h3 {
    margin: 15px 0;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      > span {
        font-size: 20px;
      }
    }
    > svg {
      z-index: 9;
    }
    > span {
      height: 155px;
      margin-top: 1rem;
      width: 2px;
      background-color: rgba(255, 255, 255, 0.2);
      margin-left: -3.7rem;
    }

    .xpText {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 40%;
      gap: 8px;
      > p {
        color: #c0c0c0;
      }

      > span {
        font-size: 24px;
      }
      > div {
        width: 92px;
        border: 2px solid grey;
      }
    }
  }
`;
