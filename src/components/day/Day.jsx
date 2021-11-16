import React from "react";
import Hour from "../hour/Hour";
import RedLine from "./RedLine";
import "./day.scss";

const Day = ({ dataDay, dayEvents, isCurrentDay, deleteEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            deleteEvent={deleteEvent}
          />
        );
      })}
      {isCurrentDay && <RedLine />}
    </div>
  );
};

export default Day;
