import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";
import { MonthWrapper, arrowStyle, Month, WeekDays, Wrapper } from "./styles";
import { current } from "@reduxjs/toolkit";

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [weekdays, setWeekdays] = useState([]);
  const [lastDayOfMonth, setLastDayOfMonth] = useState(0);
  const [nameOfFirstDayOfMonth, setNameOfFirstDayOfMonth] = useState("");
  let firstDayFound = false;
  let currentDay = 1;
  let currentWeekday = 0;

  useEffect(() => {
    loadWeekDays();
  }, []);

  const reset = () => {
    firstDayFound = false;
    currentDay = 1;
    currentWeekday = 0;
  };

  const changeMonth = (operation) => {
    const newMonth =
      operation === "sub" ? date.getMonth() - 1 : date.getMonth() + 1;
    const newDate = new Date(date.setMonth(newMonth));
    reset();
    setDate(newDate);
    fetchFirstAndLastDay();
  };

  const getMonthLocaleName = () => {
    const locale = date.toLocaleString("default", { month: "long" });
    return locale.toUpperCase();
  };

  const loadWeekDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(`${17 + i} December 1995`); // 17 december 1995 = Sunday
      const dayName = getDayName(date);
      days.push(dayName);
    }
    setWeekdays(days);
    fetchFirstAndLastDay();
  };

  const fetchFirstAndLastDay = () => {
    const year = date.getFullYear();
    const monthFirstDay = new Date(year, date.getMonth(), 1);
    setNameOfFirstDayOfMonth(getDayName(monthFirstDay));
    const monthLastDay = new Date(year, date.getMonth() + 1, 0).getDate();
    setLastDayOfMonth(monthLastDay);
  };

  const getDayName = (date) => {
    const dayName = date.toLocaleString("default", { weekday: "short" });
    return dayName.toUpperCase();
  };

  const organizeDays = () => {
    const isDayTheFirstOfMonth =
      weekdays[currentWeekday] === nameOfFirstDayOfMonth;
    const fetchedAllDaysOfMonth = currentDay >= lastDayOfMonth;
    if (fetchedAllDaysOfMonth) {
      return <p></p>;
    } else if (firstDayFound) {
      currentDay += 1;
      return <button>{currentDay}</button>;
    } else if (isDayTheFirstOfMonth) {
      firstDayFound = true;
      return <button>{currentDay}</button>;
    } else if (!firstDayFound) {
      currentWeekday += 1;
      return <p></p>;
    }
  };

  return (
    <Wrapper>
      <MonthWrapper>
        <ArrowLeft onClick={() => changeMonth("sub")} {...arrowStyle} />
        <Month>
          {getMonthLocaleName() + " "}
          {date.getFullYear()}
        </Month>
        <ArrowRight onClick={() => changeMonth("add")} {...arrowStyle} />
      </MonthWrapper>
      <WeekDays>
        {weekdays.map((day) => {
          return <p>{day}</p>;
        })}
        {[...Array(lastDayOfMonth + 7)].map(organizeDays)}
      </WeekDays>
    </Wrapper>
  );
}

export default Calendar;
