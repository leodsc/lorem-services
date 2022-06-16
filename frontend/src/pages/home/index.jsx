import React, { useState } from "react";
import Profissional from "./Profissional";
import { Scheduler, Title, Day } from "./styles";
import Calendar from "../../components/calendar";
import { useSelector } from "react-redux";

function Home() {
  const daySelected = useSelector((state) => state.calendar.daySelected);

  const parseDaySelected = () => {
    const dayName = daySelected
      .toLocaleString("default", { weekday: "long" })
      .toUpperCase();
    const fullDate = daySelected.toLocaleDateString();
    return `${dayName} - ${fullDate}`;
  };

  return (
    <main>
      <Title>Agenda</Title>
      <Scheduler>
        <Day>{parseDaySelected()}</Day>
        <Profissional />
      </Scheduler>
      <Calendar />
    </main>
  );
}

export default Home;
