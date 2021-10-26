import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import "./common.scss";

function App() {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  
 const nextWeek = () =>{
    setWeekStartDate(
      new Date(weekStartDate.setDate(new Date(weekDates).getDate() +7))
    )
  }

 const prevWeek = () =>{
    setWeekStartDate(
      new Date(weekStartDate.setDate(new Date(weekDates).getDate() -7))
    )
  }
  const today = () =>{
    setWeekStartDate(
      new Date()
    )
  }
  return (
    <>
      <Header nextWeek={nextWeek} prevWeek={prevWeek} today={today}/>
      <Calendar weekDates={weekDates} />
    </>
  );
}

export default App;
