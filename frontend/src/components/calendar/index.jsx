import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";
import { MonthWrapper, arrowStyle, Month, WeekDays, Wrapper } from "./styles";
import { change } from "../../reducer/calendar/calendarReducer";
import { useDispatch } from "react-redux";

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [weekdays, setWeekdays] = useState([]);
  const [lastDayOfMonth, setLastDayOfMonth] = useState(0);
  const [nameOfFirstDayOfMonth, setNameOfFirstDayOfMonth] = useState("");
  const [currentDaySelected, setCurrentDaySelected] = useState(null);
  const dispatch = useDispatch();
  let firstDayFound = false;
  let currentDay = 1;
  let currentWeekday = 0;

  useEffect(() => {
    loadWeekDays();
  }, []);

  useEffect(() => {
    // just runs after month changes
    // enable changes on day selected, since it runs after the UI updates
    if (currentDaySelected !== null) changeCurrentDay(currentDaySelected);
  }, [date]);

  const changeCurrentDay = (e) => {
    const button = e.target ?? e;
    const daySelected = new Date(
      date.getFullYear(),
      date.getMonth(),
      button.textContent
    );
    console.log(daySelected);
    dispatch(
      change({
        date: daySelected,
      })
    );
    toggleDaySelectedStyle(button);
  };

  const toggleDaySelectedStyle = (button) => {
    if (currentDaySelected !== null)
      currentDaySelected.classList.remove("selected");
    button.classList.add("selected");
    setCurrentDaySelected(button);
  };

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
      return <button onClick={(e) => changeCurrentDay(e)}>{currentDay}</button>;
    } else if (isDayTheFirstOfMonth) {
      firstDayFound = true;
      return <button onClick={(e) => changeCurrentDay(e)}>{currentDay}</button>;
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
