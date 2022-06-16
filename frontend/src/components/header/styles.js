import styled, { css } from "styled-components";

export const HeaderCtn = styled.header`
  background-color: #0093cf;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const navActive = css`
  top: 25%;
  position: absolute;
  :nth-child(1),
  :nth-child(3) {
    transition: all 500ms;
  }
  :nth-child(1) {
    transform: rotate(45deg);
  }
  :nth-child(2) {
    opacity: 0;
  }
  :nth-child(3) {
    transform: rotate(-45deg);
  }
`;

export const HamburgerBtn = styled.button`
  width: 20%;
  height: 50px;
  cursor: pointer;
  position: relative;

  div.line {
    width: 80%;
    height: 5px;
    border-radius: 10px;
    background-color: white;
    margin: 0.5rem;
    ${(props) => props.nav && navActive}
  }
`;
