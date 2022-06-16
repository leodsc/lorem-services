import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
  padding: 1rem;
`;

export const MonthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Month = styled.p`
  color: #acda6e;
  font-weight: 600;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: ${[...Array(7)].map(() => "auto ")};

  p {
    font-weight: 600;
    color: #0093cf;
    font-size: 0.85rem;
  }

  button {
    &.selected {
      background: #47bbea;
      color: white;
    }
    padding: 0.5rem 0.25rem;
    font-weight: 600;
    color: #483d3f;
  }
`;

export const arrowStyle = {
  fontSize: "large",
  color: "action",
  sx: {
    cursor: "pointer",
  },
};
