import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";
import events from "./gateway/events.js";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import "./common.scss";

function App() {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isShowModal, setIsShowModal] = useState(false);
  const [eventList, setEventList] = useState(events);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const toggleModal = (e) => {
    const target = e.target;
    if (
      target.classList.contains("create-event-btn") ||
      target.classList.contains("create-event__close-btn") ||
      target.classList.contains("overlay") ||
      target.classList.contains("event-form")
    ) {
      setIsShowModal(!isShowModal);
    }
  };
  const showModal = () => {
    setIsShowModal(true);
  };
  const nextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() + 7))
    );
  };

  const prevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() - 7))
    );
  };
  const today = () => {
    setWeekStartDate(new Date());
  };

  const createEvent = (e, eventData) => {
    e.preventDefault();
    const { title, description, date, startTime, endTime } = eventData;
    const newEvent = {
      id: Math.random(),
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
    setEventList([...eventList, newEvent]);
  };

  return (
    <>
      <Header
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        today={today}
        weekDates={weekDates}
        showModal={showModal}
      />

      {isShowModal && (
        <Modal hideModal={toggleModal} createEvent={createEvent} />
      )}

      <Calendar weekDates={weekDates} list={eventList} />
    </>
  );
}

export default App;
