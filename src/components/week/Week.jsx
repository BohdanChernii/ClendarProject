import React from "react";
import Day from "../day/Day";

import "./week.scss";

const Week = ({ weekDates, events, deleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter(
          (event) => event.dateFrom >= dayStart && event.dateTo < dayEnd
        );
        const isCurrentDay = new Date().getDate() === dayStart.getDate();
        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            isCurrentDay={isCurrentDay}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Week;
