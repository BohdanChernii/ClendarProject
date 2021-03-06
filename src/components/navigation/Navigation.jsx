import React from "react";
import "./navigation.scss"
import { days } from "../../utils/dateUtils.js";

function Navigation ({ weekDates }) {

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate,index) => {
        const isCurrentDay = new Date().getDate() === dayDate.getDate();
        return(
        <div key={index} className="calendar__day-label day-label">
         <span className={`day-label__day-name ${isCurrentDay ? "today":""  } ` } >{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      )})}
    </header>
  );
};

export default Navigation;
