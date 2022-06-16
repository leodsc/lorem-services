import { useSelector } from "react-redux";
import styled from "styled-components";
import { css } from "styled-components";

export const Banner = styled.div`
  font-family: "Cedarville Cursive", cursive;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;

export const Wrapper = styled.aside`
  position: fixed;
  background-color: #0093cf;
  transition: all 500ms;
  width: 50%;
  padding: 1rem;
  animation-name: move;
  animation-duration: 500ms;

  @keyframes move {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }

  ul {
    a {
      font-family: sans-serif;
      color: white;
      font-weight: 500;
      display: flex;
      align-items: center;
      padding: 0.5rem;

      p.text {
        margin-left: 10px;
      }
    }
  }
`;
