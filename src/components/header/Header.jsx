import React from "react";
import { months } from "../../utils/dateUtils.js";

import "./header.scss";

const Header = ({ nextWeek, prevWeek, today, weekDates, showModal }) => {
  let showMonth;
  if (weekDates[0].getMonth() === weekDates[weekDates.length - 1].getMonth()) {
    showMonth = `${months[weekDates[0].getMonth()]}`;
  } else {
    showMonth = `${months[weekDates[0].getMonth()]} - ${
      months[weekDates[6].getMonth()]
    }`;
  }

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={showModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={today}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left" onClick={prevWeek}></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right" onClick={nextWeek}></i>
        </button>
        <span className="navigation__displayed-month">{showMonth}</span>
      </div>
    </header>
  );
};

export default Header;
