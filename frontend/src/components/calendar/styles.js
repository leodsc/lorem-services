import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
`;

export const MonthWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Month = styled.p`
  color: #acda6e;
  font-weight: 600;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;

  p {
    font-weight: 600;
    color: #0093cf;
    font-size: 0.85rem;
  }
`;

export const arrowStyle = {
  fontSize: "large",
  color: "action",
};
