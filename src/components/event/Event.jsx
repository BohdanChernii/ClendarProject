import React, { useState } from "react";
import DeleteEvent from "./DeleteEvent.jsx";
import "./event.scss";

const Event = ({ height, marginTop, title, time, deleteEvent, id }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <div style={eventStyle} className="event" onClick={toggleModal}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isShowModal && <DeleteEvent id={id} deleteEvent={deleteEvent} />}
    </div>
  );
};

export default Event;
