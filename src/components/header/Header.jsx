import React from "react";
import  moment from 'moment';
import { months} from "../../utils/dateUtils.js";

import "./header.scss";

const Header = ({nextWeek,prevWeek,today}) => {

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={today}>{moment().format('dddd')}</button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left" onClick={prevWeek}></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right"onClick={nextWeek}></i>
        </button>
        <span className="navigation__displayed-month">{moment().format('MMMM')}</span>
      </div>
    </header>
  );
};

export default Header;
