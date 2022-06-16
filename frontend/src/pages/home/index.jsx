import React from "react";
import Profissional from "./Profissional";
import { Scheduler, Title, Day } from "./styles";
import Calendar from "../../components/calendar";

function Home() {
  return (
    <main>
      <Title>Agenda</Title>
      <Scheduler>
        <Day>DIA - DD/MM/AAAA</Day>
        <Profissional />
      </Scheduler>
      <Calendar />
    </main>
  );
}

export default Home;
