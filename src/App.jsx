import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";

import {
  fetchCreate,
  fetchDelete,
  fetchEvents,
} from "./gateway/eventsGateway.js";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import "./common.scss";
function App() {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isShowModal, setIsShowModal] = useState(false);
  const [eventList, setEventList] = useState([]);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
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

  const getEvent = () =>
    fetchEvents().then((events) => {
      const updatedList = events.map((event) => ({
        ...event,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      }));
      setEventList(updatedList);
    });

  const createEvent = (e, eventData) => {
    e.preventDefault();
    const { title, description, date, startTime, endTime } = eventData;
    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };

    fetchCreate(newEvent).then(() => getEvent());
  };

  const deleteEvent = (id) => {
    fetchDelete(id).then(() => getEvent());
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

      <Calendar
        weekDates={weekDates}
        list={eventList}
        deleteEvent={deleteEvent}
      />
    </>
  );
}

export default App;
