import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";
import moment from "moment";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import "./common.scss";

function App() {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [showDialog, setShowDialog] = useState(null);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  
  const show = () =>{
    setShowDialog(showDialog)
  }

 const nextWeek = () =>{
    setWeekStartDate(
      new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() +7))
    )
  }

 const prevWeek = () =>{
    setWeekStartDate(
      new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() -7))
    )
  }
  const today = () =>{
    setWeekStartDate(
      new Date()
    )
  }
  return (
    <>
      <Header nextWeek={nextWeek} 
      prevWeek={prevWeek} 
      today={today}
      weekDates={weekDates}
      show={show}/>
      <Calendar weekDates={weekDates} />
      <Modal />
    </>
  );
}

export default App;
