import styled from "styled-components";

export const Title = styled.h2`
  color: #555;
`;

export const Scheduler = styled.article`
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.25);
`;

export const Day = styled.h4`
  font-size: 1rem;
  border-radius: 15px;
  padding: 1rem;
  background-color: #eee;
  color: #555;
  text-align: center;
  width: 250px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`;

export const Info = styled.div`
  margin-top: 1rem;
  background-color: #47bbea;
  display: flex;
  padding: 0.5rem 1rem;
  gap: 1rem;
  align-items: center;
  border-radius: 5px;

  p {
    font-size: 1.25rem;
    color: white;
  }
`;

// schedule

const ScheduleColors = {
  add: "#ff6363",
  busy: "#a3d65d",
  clear: "#eee",
};

export const ScheduleWrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 0.75rem;
    font-weight: 600;
    color: white;
    background-color: ${(props) =>
      props.info.startTime == null
        ? ScheduleColors.clear
        : ScheduleColors.busy};
  }

  p {
    background-color: #f6f6f6;
    width: 100%;
    padding: 0.75rem;
    color: #7b7b7b;
    display: flex;
    justify-content: space-between;
  }
`;

export const FreeTime = styled.p`
  font-style: italic;
`;

export const CustomerName = styled.p`
  font-weight: 600;
`;
