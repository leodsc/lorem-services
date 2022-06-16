import React from "react";
import { CustomerName, FreeTime, ScheduleWrapper } from "./styles";
import { Add } from "@mui/icons-material";

function Schedule(props) {
  const { customer, time } = props;

  return (
    <ScheduleWrapper info={props}>
      {props.startTime == null ? (
        <FreeTime>Disponível</FreeTime>
      ) : (
        <CustomerName>{customer.name}</CustomerName>
      )}
      {props.startTime != null && (
        <button>
          <Add />
        </button>
      )}
    </ScheduleWrapper>
  );
}

export default Schedule;
